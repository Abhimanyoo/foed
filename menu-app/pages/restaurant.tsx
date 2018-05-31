import React from 'react';
import { Page } from '../component/Page';
import { Query } from '../component/Query';
import { CardOverview } from '../container/Card/Overview';
import gql from 'graphql-tag';
import { Store } from 'Store';

interface Props {
  slug: string;
  categoryId: string;
  store: Store;
}

const RESTAURANT_DETAILS = gql`
  query getRestaurant($slug: String!) {
    restaurant(where: { slug: $slug }) {
      id
      name
      slug
      organization {
        slug
      }
      activeCard {
        id
        categories {
          id
          name
        }
      }
    }
  }
`;

export default class CardOverviewPage extends React.Component<Props, {}> {
  static getInitialProps({ query: { slug, categoryId } }) {
    return { slug, categoryId };
  }

  render() {
    const { slug, store } = this.props;
    return (
      <Page>
        <Query query={RESTAURANT_DETAILS} variables={{ slug }}>
          {result => {
            const restaurant = result.data.restaurant;
            const categoryId =
              this.props.categoryId || restaurant.activeCard.categories[0].id;
            return (
              <CardOverview
                restaurant={restaurant}
                categoryId={categoryId}
                store={store}
              />
            );
          }}
        </Query>
      </Page>
    );
  }
}
