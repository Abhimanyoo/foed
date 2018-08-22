import { computed, observable, autorun } from 'mobx';
import {
  Item,
  GroupedItem,
  CardItem,
  CardOption,
  GroupedItemByRestaurant,
  CardOptionGroup,
} from './types';

const STORAGE_KEY = 'store-data';
// Increase this number if there is a breaking change in the storage data.
const STORAGE_VERSION = 2;

let store: Store | null = null;
export enum PaymentStatus {
  None,
  Error,
  Success,
}

export class Order {
  @observable
  items: Item[] = [];
  @observable
  tip = 0;
  @observable
  number: number | null = null;
  @observable
  paymentStatus: PaymentStatus = PaymentStatus.None;

  addItem(
    cardItem: CardItem,
    restaurant: { id: string; name: string },
    organizationId: string
  ) {
    // Reset items if items from another organization are added since those can never be mixed
    if (
      this.items.length > 0 &&
      this.items[0].organizationId !== organizationId
    ) {
      this.items = [];
    }
    this.items.push({
      cardItem,
      options: [],
      preselect: cardItem.optionGroups.length > 0,
      organizationId,
      restaurant,
    });
  }

  cloneItem(item: Item) {
    this.items.push({
      cardItem: item.cardItem,
      options: item.options.slice(),
      preselect: false,
      organizationId: item.organizationId,
      restaurant: item.restaurant,
    });
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  hasSelectedOption(cardItem: CardItem, option: CardOption) {
    const item = this.items.find(
      item => item.preselect && item.cardItem.id === cardItem.id
    );
    if (item) {
      return item.options.some(sItem => sItem.id === option.id);
    }
    return false;
  }

  toggleOption(
    cardItem: CardItem,
    optionGroup: CardOptionGroup,
    option: CardOption
  ) {
    // TODO: this does not work when there are two of the same items that are preselected
    const item = this.items.find(
      item => item.preselect && item.cardItem.id === cardItem.id
    );
    if (item) {
      const index = item.options.findIndex(iOption => iOption.id === option.id);
      if (index >= 0) {
        item.options.splice(index, 1);
      } else {
        // Only one option of the type variant can be selected at the time
        if (optionGroup.type === 'VARIANT') {
          item.options.forEach((option, i) => {
            if (optionGroup.options.some(o => o.id === option.id)) {
              item.options.splice(i, 1);
            }
          });
        }
        item.options.push(option);
      }
    }
  }

  pinPreselected() {
    return this.items.forEach(item => (item.preselect = false));
  }

  clearPreselected() {
    this.items = this.items.filter(item => !item.preselect);
  }

  _getByCardItem(cardItemId: string) {
    return this.items.filter(item => item.cardItem.id === cardItemId);
  }

  getAmountOfItemsPerCardItem(cardItemId: string) {
    return this._getByCardItem(cardItemId).length;
  }

  isCardItemPreselected(cardItemId: string) {
    return this._getByCardItem(cardItemId).some(item => item.preselect);
  }

  getAmountOfPreselections() {
    return this.items.filter(item => item.preselect).length;
  }

  @computed
  get subtotalPrice() {
    return this.items.reduce((itemPrice, item) => {
      const optionsPrice = item.options.reduce(
        (optionPrice, option) => option.price + optionPrice,
        0
      );
      return item.cardItem.price + optionsPrice + itemPrice;
    }, 0);
  }

  @computed
  get totalPrice() {
    return this.subtotalPrice + this.tip;
  }

  @computed
  get groupedItems() {
    const groupedItems: GroupedItem[] = [];
    this.items.forEach(item => {
      const groupedItem = groupedItems.find(
        gItem => gItem.item.cardItem.id === item.cardItem.id
      );
      if (!item.cardItem.optionGroups.length && groupedItem) {
        groupedItem.amount += 1;
      } else {
        groupedItems.push({
          amount: 1,
          item,
        });
      }
    });
    return groupedItems;
  }

  @computed
  get groupedItemsByRestaurant() {
    // TODO: this is shitcode, perhaps I should just use a small package that does the grouping
    const restaurantItems: GroupedItemByRestaurant[] = [];

    this.groupedItems.forEach(groupedItem => {
      const restaurantItem = restaurantItems.find(
        restaurantItem =>
          restaurantItem.restaurant.id === groupedItem.item.restaurant.id
      );
      if (restaurantItem) {
        restaurantItem.items.push(groupedItem);
      } else {
        restaurantItems.push({
          restaurant: groupedItem.item.restaurant,
          items: [groupedItem],
        });
      }
    });

    return restaurantItems;
  }

  changeTip(tip: number) {
    if (tip >= 0) {
      this.tip = tip;
    }
  }
}

export class Store {
  @observable
  order = new Order();
  @observable
  previousOrders: Order[] = [];

  setPaymentAttempt(data?: { id: string; number: number }) {
    if (data) {
      this.order.paymentStatus = PaymentStatus.Success;
      this.order.number = data.number;
      this.previousOrders.unshift(this.order);
      this.order = new Order();
    } else {
      this.order.paymentStatus = PaymentStatus.Error;
    }
  }

  initStorageSync() {
    const oldPayload = localStorage.getItem(STORAGE_KEY);
    if (oldPayload) {
      const parsed = JSON.parse(oldPayload);
      if (!parsed.version || parsed.version < STORAGE_VERSION) {
        return;
      }
      // This implementation probably won't hold up for very long...
      Object.assign(this.order, parsed.data.order);
      this.previousOrders = parsed.data.previousOrders.map(rawOrder => {
        const order = new Order();
        Object.assign(order, rawOrder);
        return order;
      });
    }

    autorun(() => {
      const payload = {
        createdAt: new Date(),
        version: STORAGE_VERSION,
        data: {
          order: this.order,
          previousOrders: this.previousOrders,
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    });
  }
}

export function initStore() {
  if (store === null) {
    store = new Store();
  }
  return store;
}
