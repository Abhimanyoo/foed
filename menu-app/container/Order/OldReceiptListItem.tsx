import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ReceiptListItem,
  ReceiptListItemOrderCount,
  ReceiptListItemInfo,
  ReceiptListItemPrice,
  ReceiptListItemDescription,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import { floatToDecimal } from 'helpers';
import { Item } from 'types';

interface Props {
  item: Item;
  amount: number;
}

@observer
export class OrderOldReceiptListItem extends React.Component<Props, {}> {
  render() {
    const { item, amount } = this.props;
    return (
      <ReceiptListItem>
        <ReceiptListItemInfo>
          <ReceiptListItemOrderCount>{amount}</ReceiptListItemOrderCount>
          <ReceiptListItemTitle>{item.cardItem.name}</ReceiptListItemTitle>
          <ReceiptListItemPrice>
            €{floatToDecimal(item.cardItem.price)}
          </ReceiptListItemPrice>
        </ReceiptListItemInfo>
        <ReceiptListItemDescription>
          {item.subitems.map(subitem => subitem.name).join(', ')}
        </ReceiptListItemDescription>
      </ReceiptListItem>
    );
  }
}
