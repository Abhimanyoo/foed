import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ListItem,
  ListItemOrderCount,
  ListItemInfo,
  ListItemInfoDescription,
  ListItemPrice,
  ListItemButton,
  ListItemTitle,
} from 'component/List';
import { floatToDecimal } from 'helpers';
import { Store } from 'Store';
import { IconAddCircle } from 'component/icon/AddCircle';
import { CardItem } from 'types';

interface Props {
  item: CardItem;
  store: Store;
  onAdd: (item: CardItem) => void;
}

@observer
export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { item, store, onAdd } = this.props;
    const count = store.order.getAmountOfItemsPerCardItem(item.id);
    return (
      <React.Fragment>
        <ListItem>
          <ListItemInfo>
            <ListItemOrderCount>{count || ''}</ListItemOrderCount>
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemPrice>€ {floatToDecimal(item.price)}</ListItemPrice>
            <ListItemButton
              type="button"
              onClick={e => {
                e.stopPropagation();
                onAdd(item);
              }}
            >
              <IconAddCircle />
            </ListItemButton>
          </ListItemInfo>
          <ListItemInfoDescription folded={!!item.optionGroups}>
            {item.description}
          </ListItemInfoDescription>
        </ListItem>
      </React.Fragment>
    );
  }
}
