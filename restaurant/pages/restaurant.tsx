import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrderOverview } from '../container/Order/Overview';
import {
  restaurantInfoAndOrders,
  restaurantInfoAndOrdersVariables,
} from 'graphqlTypes';

const ORDERS = gql`
  query restaurantInfoAndOrders($id: ID!) {
    restaurant(where: { id: $id }) {
      id
      name
    }
    unfinishedRestaurantOrders(restaurantId: $id) {
      id
      number
      status
      items {
        id
        completedAt
        cardItem {
          id
          name
        }
        subitems {
          id
          name
        }
      }
    }
  }
`;

interface Props {
  id: string;
  currentUser: any;
}

export default class Restaurant extends React.Component<Props> {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, id: context.query.id };
  }

  render() {
    const { id, currentUser } = this.props;
    return (
      <Query<restaurantInfoAndOrders, restaurantInfoAndOrdersVariables>
        query={ORDERS}
        fetchPolicy="cache-and-network"
        variables={{ id }}
        pollInterval={5000}
      >
        {result => (
          <OrderOverview
            employments={currentUser.employments}
            restaurant={result.data.restaurant}
            orders={result.data.unfinishedRestaurantOrders}
            refetch={result.refetch}
          />
        )}
      </Query>
    );
  }
}
