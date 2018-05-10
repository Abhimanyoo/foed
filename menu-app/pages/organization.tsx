import React from 'react';
import { withApollo } from '../withApollo';
import { Page } from '../component/Page';
import { Query } from '../component/Query';
import { RestaurantListItem } from '../container/RestaurantList/ListItem';
import gql from 'graphql-tag';
import R from '../routes';

interface Props {
  slug: string;
}

const ORGANIZATION_DETAILS = gql`
  query getOrganization($slug: String!) {
    organization(where: { slug: $slug }) {
      id
      name
      restaurants {
        id
        name
        slug
      }
    }
  }
`;

class Organization extends React.Component<Props, {}> {
  static getInitialProps({ query: { slug } }) {
    return { slug };
  }

  render() {
    const { slug } = this.props;
    return (
      <Page>
        <Query query={ORGANIZATION_DETAILS} variables={{ slug }}>
          {result => {
            return (
              <div>
                <h1>Organization {result.data.organization.name}</h1>
                <p>
                  <R.Link route="/">
                    <a>˂ Back</a>
                  </R.Link>
                </p>
                {result.data.organization.restaurants.map(restaurant => (
                  <RestaurantListItem
                    key={restaurant.slug}
                    restaurant={restaurant}
                  />
                ))}
              </div>
            );
          }}
        </Query>
      </Page>
    );
  }
}

export default withApollo(Organization);
