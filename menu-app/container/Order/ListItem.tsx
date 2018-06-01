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
} from '../../component/ReceiptList';
import { floatToDecimal } from '../../helpers';
import { Store } from 'Store';
import { IconAddCircle } from '../../component/icon/AddCircle';
import { IconRemoveCircle } from '../../component/icon/RemoveCircle';

interface Props {
  item: any;
  amount: number;
  store: Store;
  onAdd: (item: any) => void;
  onRemove: (item: any) => void;
}

@observer
export class OrderListItem extends React.Component<Props, {}> {
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
