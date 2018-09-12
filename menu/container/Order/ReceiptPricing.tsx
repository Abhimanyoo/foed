import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Order } from 'Store';
import {
  ReceiptPriceItem,
  ReceiptPriceItemName,
  ReceiptPriceItemAmount,
} from 'component/ReceiptPricing';

import { floatToDecimal } from 'helpers';
import { ReceiptListItemButton } from 'component/ReceiptList';
import { IconAddCircle } from 'component/icon/AddCircle';
import { IconRemoveCircle } from 'component/icon/RemoveCircle';

interface Props {
  order: Order;
  disabled?: boolean;
}

const TIP_INCREASE_AMOUNT = 0.5;

@observer
export class OrderReceiptPricing extends React.Component<Props, {}> {
  increaseTip = () => {
    const { order } = this.props;
    order.changeTip(order.tip + TIP_INCREASE_AMOUNT);
  };
  decreaseTip = () => {
    const { order } = this.props;
    order.changeTip(order.tip - TIP_INCREASE_AMOUNT);
  };

  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <ReceiptPriceItem>
          <ReceiptPriceItemName>Subtotal</ReceiptPriceItemName>
          <ReceiptPriceItemAmount>
            €{floatToDecimal(order.subtotalPrice)}
          </ReceiptPriceItemAmount>
        </ReceiptPriceItem>
        <ReceiptPriceItem>
          <ReceiptPriceItemName>Tip</ReceiptPriceItemName>
          {!this.props.disabled && (
            <ReceiptListItemButton
              disabled={!order.tip}
              type="button"
              onClick={this.decreaseTip}
            >
              <IconRemoveCircle />
            </ReceiptListItemButton>
          )}
          {!this.props.disabled && (
            <ReceiptListItemButton type="button" onClick={this.increaseTip}>
              <IconAddCircle />
            </ReceiptListItemButton>
          )}
          <ReceiptPriceItemAmount>
            €{floatToDecimal(order.tip)}
          </ReceiptPriceItemAmount>
        </ReceiptPriceItem>
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
