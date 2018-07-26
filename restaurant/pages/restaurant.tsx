import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrderOverview } from '../container/Order/Overview';

const ORDERS = gql`
  query unfinishedRestaurantOrders($id: ID!) {
    unfinishedRestaurantOrders(restaurantId: $id) {
      id
      number
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
    const { id } = this.props;
    return (
      <Query query={ORDERS} fetchPolicy="cache-and-network" variables={{ id }}>
        {result => (
          <OrderOverview orders={result.data.unfinishedRestaurantOrders} />
        )}
      </Query>
    );
  }
}
