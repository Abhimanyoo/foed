import * as React from 'react';
import { Mutation } from 'react-apollo';
import {
  ReceiptListItem,
  ReceiptListItemInfo,
  ReceiptListItemButton,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import { IconCheck } from 'component/icon/Check';
import { Text } from 'component/Text';
import gql from 'graphql-tag';
import { restaurantInfoAndOrders_unfinishedRestaurantOrders_items } from 'graphqlTypes';

interface Props {
  item: restaurantInfoAndOrders_unfinishedRestaurantOrders_items;
  allItemIds: string[];
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
    const { item, allItemIds } = this.props;
    await mutate({
      variables: {
        ids: allItemIds,
        complete: !item.completedAt,
      },
    });
    // TODO: Show some kind of feedback when this went wrong
  };

  render() {
    const { allItemIds, item } = this.props;
    return (
      <ReceiptListItem>
        <ReceiptListItemInfo completed={!!item.completedAt}>
          <ReceiptListItemTitle>
            {allItemIds.length} {item.cardItem.name}
          </ReceiptListItemTitle>
          <Text size="small" tone="warning">
            {item.options.map(subitem => subitem.name).join(', ')}
          </Text>
        </ReceiptListItemInfo>
        <Mutation mutation={COMPLETE_ORDER_ITEM}>
          {mutate => (
            <ReceiptListItemButton
              type="button"
              onClick={() => this.handleCompleted(mutate)}
            >
              <IconCheck />
            </ReceiptListItemButton>
          )}
        </Mutation>
      </ReceiptListItem>
    );
  }
}
