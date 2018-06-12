import { computed, observable } from 'mobx';
import { Item, GroupedItem, CardItem, CardSubitem } from './types';

let store: Store | null = null;
export enum PaymentStatus {
  None,
  Error,
  Success,
}

export class Order {
  @observable items: Item[] = [];
  @observable tip = 0;
  @observable paymentStatus: PaymentStatus = PaymentStatus.None;

  addItem(cardItem: CardItem) {
    this.items.push({
      cardItem,
      subitems: [],
      preselect: true,
    });
  }

  cloneItem(item: Item) {
    this.items.push({
      cardItem: item.cardItem,
      subitems: item.subitems.slice(),
      preselect: false,
    });
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  hasSelectedSubitem(cardItem: CardItem, subitem: CardSubitem) {
    const item = this.items.find(
      item => item.preselect && item.cardItem.id === cardItem.id
    );
    if (item) {
      return item.subitems.some(sItem => sItem.id === subitem.id);
    }
    return false;
  }

  toggleSubitem(cardItem: CardItem, subitem: CardSubitem) {
    // TODO: this does not work when there are two of the same items that are preselected
    const item = this.items.find(
      item => item.preselect && item.cardItem.id === cardItem.id
    );
    if (item) {
      const index = item.subitems.findIndex(sItem => sItem.id === subitem.id);
      if (index >= 0) {
        item.subitems.splice(index, 1);
      } else {
        // Only one subitem of the type variant can be selected at the time
        if (subitem.type === 'VARIANT') {
          item.subitems.forEach((sItem, i) => {
            if (sItem.type === 'VARIANT') {
              item.subitems.splice(i, 1);
            }
          });
        }
        item.subitems.push(subitem);
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
  get totalPrice() {
    return this.items.reduce((itemPrice, item) => {
      const subitemsPrice = item.subitems.reduce(
        (subitemPrice, subitem) => subitem.price + subitemPrice,
        0
      );
      return item.cardItem.price + subitemsPrice + itemPrice;
    }, 0);
  }

  @computed
  get groupedItems() {
    const groupedItems: GroupedItem[] = [];
    this.items.forEach(item => {
      const groupedItem = groupedItems.find(
        gItem => gItem.item.cardItem.id === item.cardItem.id
      );
      if (!item.cardItem.subitems.length && groupedItem) {
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
}

export class Store {
  @observable order = new Order();
}

export function initStore() {
  if (store === null) {
    store = new Store();
  }
  return store;
}
