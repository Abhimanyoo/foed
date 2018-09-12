import React from 'react';
import { observer } from 'mobx-react';
import { OrderReceiptListItem, OnAddFn, OnRemoveFn } from './ReceiptListItem';
import { Order } from 'Store';
import { Receipt, ReceiptHeader, ReceiptRestaurant } from 'component/Receipt';
import { Text } from 'component/Text';
import { OrderReceiptPricing } from './ReceiptPricing';
import { uniqueId } from 'lib/uniqueId';

interface Props {
  order: Order;
  onAdd: OnAddFn;
  onRemove: OnRemoveFn;
  hasPreviousOrders: boolean;
}

@observer
export class OrderReceipt extends React.Component<Props, {}> {
  render() {
    const { order, hasPreviousOrders } = this.props;

    return (
      <Receipt>
        <ReceiptHeader>
          <Text size="small" tone="light">
            Your {hasPreviousOrders && 'new '}
            order
          </Text>
        </ReceiptHeader>
        {order.groupedItemsByRestaurant.map(groupedRestaurantItem => (
          <ReceiptRestaurant key={uniqueId()}>
            <ReceiptHeader>
              <Text size="medium">{groupedRestaurantItem.restaurant.name}</Text>
            </ReceiptHeader>
            {groupedRestaurantItem.items.map(groupedItem => (
              <OrderReceiptListItem
                key={uniqueId()}
                order={order}
                item={groupedItem.item}
                amount={groupedItem.amount}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
              />
            ))}
          </ReceiptRestaurant>
        ))}
        <OrderReceiptPricing order={order} />
      </Receipt>
    );
  }
}
