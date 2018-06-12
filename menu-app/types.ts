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
}

export interface GroupedItem {
  item: Item;
  amount: number;
}
