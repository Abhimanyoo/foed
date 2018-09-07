import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ReceiptListItem,
  ReceiptListItemOrderCount,
  ReceiptListItemInfo,
  ReceiptListItemDescription,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import { ReceiptPriceItemAmount } from 'component/ReceiptPricing';
import { floatToDecimal } from 'helpers';
import { Item } from 'types';

interface Props {
  item: Item;
  amount: number;
  completed: boolean;
}

@observer
export class OrderOldReceiptListItem extends React.Component<Props, {}> {
  render() {
    const { item, amount, completed } = this.props;
    return (
      <ReceiptListItem>
        <ReceiptListItemInfo>
          <ReceiptListItemOrderCount>{amount}</ReceiptListItemOrderCount>
          <ReceiptListItemTitle>
            {item.cardItem.name} {completed && '(completed)'}
          </ReceiptListItemTitle>
          <ReceiptPriceItemAmount>
            €{floatToDecimal(item.cardItem.price)}
          </ReceiptPriceItemAmount>
        </ReceiptListItemInfo>
        <ReceiptListItemDescription>
          {item.options.map(option => option.name).join(', ')}
        </ReceiptListItemDescription>
      </ReceiptListItem>
    );
  }
}
