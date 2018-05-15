import React from 'react';
import { Page } from '../component/Page';
import { Query } from '../component/Query';
import { CardOverview } from '../container/Card/Overview';
import gql from 'graphql-tag';

interface Props {
  slug: string;
}

const RESTAURANT_DETAILS = gql`
  query getRestaurant($slug: String!) {
    restaurant(where: { slug: $slug }) {
      id
      name
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
  static getInitialProps({ query: { slug } }) {
    return { slug };
  }

  render() {
    const { slug } = this.props;
    return (
      <Page>
        <Query query={RESTAURANT_DETAILS} variables={{ slug }}>
          {result => <CardOverview restaurant={result.data.restaurant} />}
        </Query>
      </Page>
    );
  }
}
