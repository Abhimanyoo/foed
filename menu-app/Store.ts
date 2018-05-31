import { observable } from 'mobx';

let store: Store | null = null;

class Order {
  @observable items = [];

  addItem(cardItem) {
    this.items.push({
      cardItem,
      subitems: [],
    });
  }

  getAmountOfItemsPerCardItem(cardItemId) {
    return this.items.filter(item => item.cardItem.id === cardItemId).length;
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
