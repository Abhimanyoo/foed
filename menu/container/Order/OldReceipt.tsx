import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { OrderOldReceiptListItem } from './OldReceiptListItem';
import { Order } from 'Store';
import { Receipt, ReceiptRestaurant, ReceiptHeader } from 'component/Receipt';
import { uniqueId } from 'lib/uniqueId';
import { Text } from 'component/Text';
import { OrderStatus } from 'component/OrderStatus';
import { IconDots } from 'component/icon/Dots';

interface Props {
  order: Order;
  orderExtra?: { id: string; items: { id: string; completedAt: Date }[] };
}

@observer
export class OrderOldReceipt extends React.Component<Props, {}> {
  render() {
    const { order, orderExtra } = this.props;

    return (
      <Fragment>
        <Receipt>
          <ReceiptHeader>
            <Text size="small" tone="light">
              #{order.number}
            </Text>
            <IconDots />
          </ReceiptHeader>
          {order.groupedItemsByRestaurant.map(groupedRestaurantItem => (
            <ReceiptRestaurant key={uniqueId()}>
              <ReceiptHeader>
                <Text size="medium">
                  {groupedRestaurantItem.restaurant.name}
                </Text>
                <OrderStatus
                  totalAmount={groupedRestaurantItem.items.reduce(
                    (total, item) => total + item.amount,
                    0
                  )}
                  completedAmount={
                    orderExtra &&
                    orderExtra.items.filter(eItem => eItem.completedAt).length
                  }
                />
              </ReceiptHeader>
              {groupedRestaurantItem.items.map(groupedItem => (
                <OrderOldReceiptListItem
                  key={uniqueId()}
                  item={groupedItem.item}
                  amount={groupedItem.amount}
                  completed={
                    !!orderExtra &&
                    !!orderExtra.items.find(
                      eItem => eItem.id === groupedItem.item.id
                    ).completedAt
                  }
                />
              ))}
            </ReceiptRestaurant>
          ))}
        </Receipt>
      </Fragment>
    );
  }
}
