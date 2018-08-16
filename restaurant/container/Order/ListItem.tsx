import * as React from 'react';
import { Receipt, ReceiptHeader } from 'component/Receipt';
import { OrderListItemItem } from './ListItemItem';
import { SlideButton } from 'component/SlideButton';
import { Text } from 'component/Text';
import { IconDots } from 'component/icon/Dots';
import { IconCheck } from 'component/icon/Check';
import { IconBell } from 'component/icon/Bell';
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

    return (
      <Receipt style={style}>
        <Mutation mutation={CHANGE_ORDER_STATUS}>
          {mutate => (
            <ReceiptHeader>
              <Text size="small" tone="light">
                #{order.number}
              </Text>
              {order.status === OrderStatus.COMPLETED ? (
                <SlideButton
                  key="PICKED_UP"
                  onSlide={() =>
                    this.changeStatus(mutate, OrderStatus.PICKED_UP)
                  }
                  text="Picked up"
                  icon={<IconCheck fill="#fff" />}
                />
              ) : (
                <SlideButton
                  key="COMPLETED"
                  onSlide={() =>
                    this.changeStatus(mutate, OrderStatus.COMPLETED)
                  }
                  text="Notify customer"
                  icon={<IconBell />}
                />
              )}
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
