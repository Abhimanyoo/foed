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
import { IconAddCircle } from '../../component/icon/AddCircle';

interface Props {
  item: any;
  store: Store;
  selected: number;
  disabled: boolean;
  onAdd: (item: any) => void;
}

@observer
export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { selected, disabled, item, store, onAdd } = this.props;
    return (
      <ListItem selected={selected > 0} disabled={disabled}>
        <ListItemOrderCount>
          {store.order.getAmountOfItemsPerCardItem(item.id) + selected}
        </ListItemOrderCount>
        <ListItemInfo>
          {item.name}
          <ListItemInfoDescription>{item.description}</ListItemInfoDescription>
        </ListItemInfo>
        <ListItemPrice>€{floatToDecimal(item.price)}</ListItemPrice>
        <ListItemButton type="button" onClick={() => onAdd(item)}>
          <IconAddCircle />
        </ListItemButton>
      </ListItem>
    );
  }
}
