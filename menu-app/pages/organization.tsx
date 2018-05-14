import React from 'react';
import { withApollo } from '../withApollo';
import { Page } from '../component/Page';
import { Query } from '../component/Query';
import { RestaurantOverview } from '../container/Restaurant/Overview';
import gql from 'graphql-tag';

interface Props {
  slug: string;
}

const ORGANIZATION_DETAILS = gql`
  query getOrganization($slug: String!) {
    organization(where: { slug: $slug }) {
      id
      name
      restaurants(where: { visible: true, activeCard: { id_contains: "" } }) {
        id
        name
        slug
      }
    }
  }
`;

class RestaurantOverviewPage extends React.Component<Props, {}> {
  static getInitialProps({ query: { slug } }) {
    return { slug };
  }

  render() {
    const { slug } = this.props;
    return (
      <Page>
        <Query query={ORGANIZATION_DETAILS} variables={{ slug }}>
          {result => (
            <RestaurantOverview organization={result.data.organization} />
          )}
        </Query>
      </Page>
    );
  }
}

export default withApollo(RestaurantOverviewPage);
