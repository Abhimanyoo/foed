import * as React from 'react';
import { Mutation } from 'react-apollo';
import {
  ReceiptListItem,
  ReceiptListItemOrderCount,
  ReceiptListItemInfo,
  ReceiptListItemButton,
  ReceiptListItemDescription,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import IconCheck from 'component/icon/Check';
import gql from 'graphql-tag';
import {
  restaurantInfoAndOrders_unfinishedRestaurantOrders_items,
  completeOrderItem,
  completeOrderItemVariables,
} from 'graphqlTypes';

interface Props {
  item: restaurantInfoAndOrders_unfinishedRestaurantOrders_items;
}

const COMPLETE_ORDER_ITEM = gql`
  mutation completeOrderItem($ids: [ID!]!, $complete: Boolean!) {
    completeOrderItem(ids: $ids, complete: $complete) {
      id
      completedAt
    }
  }
`;

// I'm very good with names as you can see (pls send help)
export class OrderListItemItem extends React.Component<Props, {}> {
  handleCompleted = async mutate => {
    const { item } = this.props;
    await mutate({
      variables: {
        ids: [item.id],
        complete: !item.completedAt,
      },
    });
    // TODO: Show some kind of feedback when this went wrong
  };

  render() {
    const { item } = this.props;
    return (
      <ReceiptListItem completed={!!item.completedAt}>
        <ReceiptListItemInfo>
          <ReceiptListItemOrderCount>1</ReceiptListItemOrderCount>
          <ReceiptListItemTitle>{item.cardItem.name}</ReceiptListItemTitle>
          <Mutation<completeOrderItem, completeOrderItemVariables>
            mutation={COMPLETE_ORDER_ITEM}
          >
            {mutate => (
              <ReceiptListItemButton
                type="button"
                onClick={() => this.handleCompleted(mutate)}
              >
                <IconCheck />
              </ReceiptListItemButton>
            )}
          </Mutation>
        </ReceiptListItemInfo>
        <ReceiptListItemDescription>
          {item.subitems.map(subitem => subitem.name).join(', ')}
        </ReceiptListItemDescription>
      </ReceiptListItem>
    );
  }
}
