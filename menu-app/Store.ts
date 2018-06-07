import { computed, observable } from 'mobx';

let store: Store | null = null;

class Order {
  @observable items = [];

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  hasSelectedSubitem(cardItem, subitem) {
    const item = this.items.find(
      item => item.preselect && item.cardItem.id === cardItem.id
    );
    if (item) {
      return item.subitems.some(sItem => sItem.id === subitem.id);
    }
    return false;
  }

  toggleSubitem(cardItem, subitem) {
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
    return this.items.forEach(item => {
      if (item.preselect) {
        this.removeItem(item);
      }
    });
  }

  _getByCardItem(cardItemId) {
    return this.items.filter(item => item.cardItem.id === cardItemId);
  }

  getAmountOfItemsPerCardItem(cardItemId) {
    return this._getByCardItem(cardItemId).length;
  }

  isCardItemPreselected(cardItemId) {
    return this._getByCardItem(cardItemId).some(item => item.preselect);
  }

  getAmountOfPreselections() {
    return this.items.filter(item => item.preselect).length;
  }

  @computed
  get totalPrice(): number {
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
    const groupedItems: any[] = [];
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
