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
import { CardListSubitem, ToggleSubItemFn } from './ListSubitem';
import { floatToDecimal } from '../../helpers';
import { Store } from 'Store';
import { IconAddCircle } from '../../component/icon/AddCircle';

interface Props {
  item: any;
  store: Store;
  selected: boolean;
  disabled: boolean;
  onAdd: (item: any) => void;
  onToggleSubitem: ToggleSubItemFn;
}

@observer
export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { selected, disabled, item, store, onAdd } = this.props;
    return (
      <React.Fragment>
        <ListItem selected={selected} disabled={disabled}>
          <ListItemOrderCount>
            {store.order.getAmountOfItemsPerCardItem(item.id)}
          </ListItemOrderCount>
          <ListItemInfo>
            {item.name}
            <ListItemInfoDescription>
              {item.description}
            </ListItemInfoDescription>
          </ListItemInfo>
          <ListItemPrice>€{floatToDecimal(item.price)}</ListItemPrice>
          <ListItemButton type="button" onClick={() => onAdd(item)}>
            <IconAddCircle />
          </ListItemButton>
        </ListItem>
        {selected &&
          item.subitems.map(subitem => (
            <CardListSubitem
              key={subitem.id}
              item={item}
              subitem={subitem}
              store={store}
              onToggle={this.props.onToggleSubitem}
            />
          ))}
      </React.Fragment>
    );
  }
}
