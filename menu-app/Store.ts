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

  getAmountOfItemsPerCardItem(cardItemId) {
    return this.items.filter(item => item.cardItem.id === cardItemId).length;
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
