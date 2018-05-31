import { observable } from 'mobx';

let store: Store | null = null;

class Order {
  @observable items = [];

  addItem(item) {
    this.items.push(item);
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
