export interface CardItem {
  id: string;
  name: string;
  description: string;
  price: number;
  optionGroups: CardOptionGroup[];
}

export interface CardOptionGroup {
  id: string;
  name: string;
  type: 'VARIANT' | 'ADDITION';
  options: CardOption[];
}

export interface CardOption {
  id: string;
  name: string;
  price: number;
}

export interface Item {
  preselect?: boolean;
  cardItem: CardItem;
  options: CardOption[];
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
