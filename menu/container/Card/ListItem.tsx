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
import { CardListGroupOption, ToggleOptionFn } from './ListGroupOption';
import { floatToDecimal } from 'helpers';
import { Store } from 'Store';
import { IconAddCircle } from 'component/icon/AddCircle';
import { CardItem } from 'types';

interface Props {
  item: CardItem;
  store: Store;
  selected: boolean;
  disabled: boolean;
  opened: boolean;
  onAdd: (item: CardItem) => void;
  onToggleOption: ToggleOptionFn;
  onToggleOpen: (id: string) => void;
}

@observer
export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { selected, disabled, item, store, onAdd } = this.props;
    const count = store.order.getAmountOfItemsPerCardItem(item.id);
    const openToggle = () => this.props.onToggleOpen(item.id);
    return (
      <React.Fragment>
        <ListItem selected={selected} disabled={disabled}>
          <ListItemInfo onClick={openToggle}>
            <ListItemOrderCount>{count || ''}</ListItemOrderCount>
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemPrice>€{floatToDecimal(item.price)}</ListItemPrice>
            <ListItemButton
              type="button"
              onClick={e => {
                e.stopPropagation();
                onAdd(item);
              }}
              disabled={selected && item.optionGroups.length > 0}
            >
              <IconAddCircle />
            </ListItemButton>
          </ListItemInfo>
          <ListItemInfoDescription
            opened={this.props.opened}
            onClick={openToggle}
          >
            {item.description}
          </ListItemInfoDescription>
        </ListItem>
        {selected &&
          item.optionGroups.map(optionGroup => (
            <CardListGroupOption
              key={optionGroup.id}
              item={item}
              optionGroup={optionGroup}
              store={store}
              onToggle={this.props.onToggleOption}
            />
          ))}
      </React.Fragment>
    );
  }
}
