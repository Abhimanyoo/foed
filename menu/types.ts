export interface CardItem {
  id: string;
  name: string;
  description: string;
  price: number;
  subitems: CardSubitem[];
}

export interface CardSubitem {
  id: string;
  name: string;
  type: 'VARIANT' | 'ADDITION';
  price: number;
}

export interface Item {
  preselect?: boolean;
  cardItem: CardItem;
  subitems: CardSubitem[];
  organizationId: string;
  restaurant: BasicRestaurant;
}

export interface BasicRestaurant {
  id: string;
  name: string;
}

export interface GroupedItem {
  item: Item;
  amount: number;
}

export interface GroupedItemByRestaurant {
  restaurant: BasicRestaurant;
  items: GroupedItem[];
}
