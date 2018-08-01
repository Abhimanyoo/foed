import * as React from 'react';
import { Subheading } from 'component/Header';
import { ReceiptBackground } from 'component/ReceiptBackground';
import { OrderListItemItem } from './ListItemItem';
import { ReceiptButtonGroup } from 'component/ReceiptList';
import { Button } from 'component/Button';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

interface Props {
  order: any;
  refetch: () => void;
}

const COMPLETE_ORDER_ITEM = gql`
  mutation changeOrderStatus($id: ID!, $status: OrderStatus!) {
    changeOrderStatus(id: $id, status: $status) {
      ok
    }
  }
`;

export class OrderListItem extends React.Component<Props, {}> {
  changeStatus = async (mutate, status) => {
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
    const { order, refetch } = this.props;
    return (
      <div>
        <Subheading>#{order.number}</Subheading>
        <ReceiptBackground>
          {order.status !== 'COMPLETED' &&
            order.items.map(item => (
              <OrderListItemItem key={item.id} item={item} refetch={refetch} />
            ))}
          <Mutation mutation={COMPLETE_ORDER_ITEM}>
            {mutate => (
              <ReceiptButtonGroup>
                <Button
                  onClick={() =>
                    this.changeStatus(
                      mutate,
                      order.status === 'COMPLETED' ? 'PICKED_UP' : 'COMPLETED'
                    )
                  }
                >
                  {order.status === 'COMPLETED'
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
