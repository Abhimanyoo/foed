import * as React from 'react';
import { Receipt, ReceiptHeader } from 'component/Receipt';
import { OrderListItemItem } from './ListItemItem';
import { Button } from 'component/Button';
import { Text } from 'component/Text';
import { IconDots } from 'component/icon/Dots';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  restaurantInfoAndOrders_unfinishedRestaurantOrders,
  OrderStatus,
} from 'graphqlTypes';

interface Props {
  order: restaurantInfoAndOrders_unfinishedRestaurantOrders;
  style: object;
  refetch: () => void;
}

const CHANGE_ORDER_STATUS = gql`
  mutation changeOrderStatus($id: ID!, $status: OrderStatus!) {
    changeOrderStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

export class OrderListItem extends React.Component<Props, {}> {
  changeStatus = async (mutate, status: OrderStatus) => {
    const { order } = this.props;
    await mutate({
      variables: {
        id: order.id,
        status,
      },
    });
    this.props.refetch();
    // TODO: Show some kind of feedback when this went wrong
  };

  render() {
    const { order, style } = this.props;
    const buttonText =
      order.status === OrderStatus.COMPLETED ? 'Picked up' : 'Notify customer';

    return (
      <Receipt style={style}>
        <Mutation mutation={CHANGE_ORDER_STATUS}>
          {mutate => (
            <ReceiptHeader>
              <Text size="small" tone="light">
                #{order.number}
              </Text>
              <Button
                onClick={() =>
                  this.changeStatus(
                    mutate,
                    order.status === OrderStatus.COMPLETED
                      ? OrderStatus.PICKED_UP
                      : OrderStatus.COMPLETED
                  )
                }
              >
                {buttonText}
              </Button>
              <IconDots />
            </ReceiptHeader>
          )}
        </Mutation>
        {order.status === OrderStatus.IN_PROGRESS &&
          order.items.map(item => (
            <OrderListItemItem key={item.id} item={item} />
          ))}
      </Receipt>
    );
  }
}
