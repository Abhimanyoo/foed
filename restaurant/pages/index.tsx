import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { RestaurantOverview } from '../container/Restaurant/Overview';
import R from '../routes';

const USER_DETAILS = gql`
  query currentUserDetails {
    currentUser {
      id
      employments {
        id
        restaurant {
          id
          name
          imageUrl
        }
      }
    }
  }
`;

export default class Index extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser };
  }

  render() {
    return (
      <Query
        query={USER_DETAILS}
        fetchPolicy="cache-and-network"
        onCompleted={data => {
          // If there is only one employment, just redirect immediately to that restaurant instead of showing a useless list with one item
          const employments = data.currentUser.employments;
          if (employments.length === 1) {
            R.Router.replaceRoute(`/restaurant/${employments[0].id}`);
          }
        }}
      >
        {result => (
          <RestaurantOverview
            employments={result.data.currentUser.employments}
          />
        )}
      </Query>
    );
  }
}
