import React from 'react';
import { observer } from 'mobx-react';
import { OrderReceiptListItem, OnAddFn, OnRemoveFn } from './ReceiptListItem';
import { Order } from 'Store';
import { ReceiptBackground } from 'component/ReceiptBackground';
import { ReceiptRestaurantTitle } from 'component/ReceiptList';
import { OrderReceiptPricing } from './ReceiptPricing';
import { uniqueId } from 'lib/uniqueId';

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
        {order.groupedItemsByRestaurant.map(groupedRestaurantItem => (
          <React.Fragment key={uniqueId()}>
            <ReceiptRestaurantTitle>
              {groupedRestaurantItem.restaurant.name}
            </ReceiptRestaurantTitle>
            {groupedRestaurantItem.items.map(groupedItem => (
              <OrderReceiptListItem
                key={uniqueId()}
                item={groupedItem.item}
                amount={groupedItem.amount}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
              />
            ))}
          </React.Fragment>
        ))}
        <OrderReceiptPricing order={order} />
      </ReceiptBackground>
    );
  }
}
