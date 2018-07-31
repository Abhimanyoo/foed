import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ReceiptListItem,
  ReceiptListItemOrderCount,
  ReceiptListItemInfo,
  ReceiptListItemPrice,
  ReceiptListItemButton,
  ReceiptListItemDescription,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import { floatToDecimal } from 'helpers';
import { IconAddCircle } from 'component/icon/AddCircle';
import { IconRemoveCircle } from 'component/icon/RemoveCircle';
import { Item } from 'types';

export type OnAddFn = (item: Item) => void;
export type OnRemoveFn = (item: Item) => void;

interface Props {
  item: Item;
  amount: number;
  onAdd: OnAddFn;
  onRemove: OnRemoveFn;
}

@observer
export class OrderReceiptListItem extends React.Component<Props, {}> {
  render() {
    const { item, amount, onRemove, onAdd } = this.props;
    return (
      <ReceiptListItem>
        <ReceiptListItemInfo>
          <ReceiptListItemOrderCount>{amount}</ReceiptListItemOrderCount>
          <ReceiptListItemTitle>{item.cardItem.name}</ReceiptListItemTitle>
          <ReceiptListItemPrice>
            €{floatToDecimal(item.cardItem.price)}
          </ReceiptListItemPrice>
          <ReceiptListItemButton type="button" onClick={() => onRemove(item)}>
            <IconRemoveCircle />
          </ReceiptListItemButton>
          <ReceiptListItemButton type="button" onClick={() => onAdd(item)}>
            <IconAddCircle />
          </ReceiptListItemButton>
        </ReceiptListItemInfo>
        <ReceiptListItemDescription>
          {item.subitems.map(subitem => subitem.name).join(', ')}
        </ReceiptListItemDescription>
      </ReceiptListItem>
    );
  }
}
