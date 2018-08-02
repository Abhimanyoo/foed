import * as React from 'react';
import { Subheading } from 'component/Header';
import { ReceiptBackground } from 'component/ReceiptBackground';
import { OrderListItemItem } from './ListItemItem';
import { ReceiptButtonGroup } from 'component/ReceiptList';
import { Button } from 'component/Button';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  restaurantInfoAndOrders_unfinishedRestaurantOrders,
  OrderStatus,
} from 'graphqlTypes';

interface Props {
  order: restaurantInfoAndOrders_unfinishedRestaurantOrders;
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
    const { order } = this.props;
    return (
      <div>
        <Subheading>#{order.number}</Subheading>
        <ReceiptBackground>
          {order.status === OrderStatus.IN_PROGRESS &&
            order.items.map(item => (
              <OrderListItemItem key={item.id} item={item} />
            ))}
          <Mutation mutation={CHANGE_ORDER_STATUS}>
            {mutate => (
              <ReceiptButtonGroup>
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
                  {order.status === OrderStatus.COMPLETED
                    ? 'Picked up'
                    : 'Notify customer'}
                </Button>
              </ReceiptButtonGroup>
            )}
          </Mutation>
        </ReceiptBackground>
      </div>
    );
  }
}
