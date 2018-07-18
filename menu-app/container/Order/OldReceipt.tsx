import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { OrderOldReceiptListItem } from './OldReceiptListItem';
import { Order } from 'Store';
import { ReceiptBackground } from '../../component/ReceiptBackground';
import { OrderReceiptPricing } from './ReceiptPricing';
import { Subheading } from '../../component/Header';

interface Props {
  order: Order;
}

@observer
export class OrderOldReceipt extends React.Component<Props, {}> {
  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <Subheading>Order #{order.number}</Subheading>
        <ReceiptBackground>
          {order.groupedItems.map(groupedItem => (
            <OrderOldReceiptListItem
              item={groupedItem.item}
              amount={groupedItem.amount}
            />
          ))}
          <OrderReceiptPricing order={order} />
        </ReceiptBackground>
      </Fragment>
    );
  }
}
