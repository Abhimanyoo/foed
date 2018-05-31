import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ListItem,
  ListItemOrderCount,
  ListItemInfo,
  ListItemInfoDescription,
  ListItemPrice,
  ListItemButton,
} from '../../component/List';
import { floatToDecimal } from '../../helpers';
import { Store } from 'Store';

interface Props {
  item: any;
  store: Store;
  selected: boolean;
  onAdd: (item: any) => void;
}

@observer
export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { selected, item, store, onAdd } = this.props;
    return (
      <ListItem selected={selected}>
        <ListItemOrderCount>
          {store.order.getAmountOfItemsPerCardItem(item.id)}
        </ListItemOrderCount>
        <ListItemInfo>
          {item.name}
          <ListItemInfoDescription>{item.description}</ListItemInfoDescription>
        </ListItemInfo>
        <ListItemPrice>€{floatToDecimal(item.price)}</ListItemPrice>
        <ListItemButton type="button" onClick={() => onAdd(item)}>
          +
        </ListItemButton>
      </ListItem>
    );
  }
}
