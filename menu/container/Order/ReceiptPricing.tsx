import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Order } from 'Store';
import {
  ReceiptPriceItem,
  ReceiptPriceItemName,
  ReceiptPriceItemAmount,
  ReceiptPriceLine,
} from 'component/ReceiptPricing';
import { floatToDecimal } from 'helpers';

interface Props {
  order: Order;
}

@observer
export class OrderReceiptPricing extends React.Component<Props, {}> {
  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <ReceiptPriceLine />
        <ReceiptPriceItem>
          <ReceiptPriceItemName>Subtotal</ReceiptPriceItemName>
          <ReceiptPriceItemAmount>
            €{floatToDecimal(order.totalPrice)}
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
            €{floatToDecimal(order.totalPrice)}
          </ReceiptPriceItemAmount>
        </ReceiptPriceItem>
      </Fragment>
    );
  }
}
