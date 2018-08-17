import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { OrderOldReceiptListItem } from './OldReceiptListItem';
import { Order } from 'Store';
import { Receipt } from 'component/Receipt';
import { OrderReceiptPricing } from './ReceiptPricing';
import { Subheading } from 'component/Header';
import { uniqueId } from 'lib/uniqueId';

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
        <Receipt hasCounter>
          {order.groupedItems.map(groupedItem => (
            <OrderOldReceiptListItem
              key={uniqueId()}
              item={groupedItem.item}
              amount={groupedItem.amount}
            />
          ))}
          <OrderReceiptPricing order={order} />
        </Receipt>
      </Fragment>
    );
  }
}
