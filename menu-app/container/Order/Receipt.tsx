import React from 'react';
import { observer } from 'mobx-react';
import { OrderReceiptListItem, OnAddFn, OnRemoveFn } from './ReceiptListItem';
import { Order } from 'Store';
import { ReceiptBackground } from '../../component/ReceiptBackground';
import { OrderReceiptPricing } from './ReceiptPricing';

interface Props {
  order: Order;
  onAdd: OnAddFn;
  onRemove: OnRemoveFn;
}

@observer
export class OrderReceipt extends React.Component<Props, {}> {
  render() {
    const { order } = this.props;
    return (
      <ReceiptBackground>
        {order.groupedItems.map(groupedItem => (
          <OrderReceiptListItem
            item={groupedItem.item}
            amount={groupedItem.amount}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
          />
        ))}
        <OrderReceiptPricing order={order} />
      </ReceiptBackground>
    );
  }
}
