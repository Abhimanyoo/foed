import React from 'react';
import { observer } from 'mobx-react';
import { Store } from 'Store';
import {
  ReceiptPriceItem,
  ReceiptPriceItemName,
  ReceiptPriceItemAmount,
  ReceiptPriceLine,
} from '../../component/ReceiptPricing';
import { floatToDecimal } from '../../helpers';

interface Props {
  store: Store;
}

@observer
export class OrderPricing extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return (
      <div>
        <ReceiptPriceLine />
        <ReceiptPriceItem>
          <ReceiptPriceItemName>Subtotal</ReceiptPriceItemName>
          <ReceiptPriceItemAmount>
            €{floatToDecimal(store.order.totalPrice)}
          </ReceiptPriceItemAmount>
        </ReceiptPriceItem>
        <ReceiptPriceItem>
          <ReceiptPriceItemName>Tip</ReceiptPriceItemName>
          <ReceiptPriceItemAmount />
        </ReceiptPriceItem>
        <ReceiptPriceLine />
        <ReceiptPriceItem bold>
          <ReceiptPriceItemName>Total</ReceiptPriceItemName>
          <ReceiptPriceItemAmount>
            €{floatToDecimal(store.order.totalPrice)}
          </ReceiptPriceItemAmount>
        </ReceiptPriceItem>
      </div>
    );
  }
}
