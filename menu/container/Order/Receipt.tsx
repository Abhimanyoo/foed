import React from 'react';
import { observer } from 'mobx-react';
import { OrderReceiptListItem, OnAddFn, OnRemoveFn } from './ReceiptListItem';
import { Order } from 'Store';
import { Receipt } from 'component/Receipt';
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
      <Receipt hasCounter>
        {order.groupedItemsByRestaurant.map(groupedRestaurantItem => (
          <React.Fragment key={uniqueId()}>
            <ReceiptRestaurantTitle>
              {groupedRestaurantItem.restaurant.name}
            </ReceiptRestaurantTitle>
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
          </React.Fragment>
        ))}
        <OrderReceiptPricing order={order} />
      </Receipt>
    );
  }
}
