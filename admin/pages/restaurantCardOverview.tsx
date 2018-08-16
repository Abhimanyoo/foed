import * as React from 'react';
import {
  Body,
  ContentContainer,
  Content,
  Toolbar,
  IconAddCircle,
} from '@volst/ui-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { RestaurantCardOverviewItem } from '../container/Restaurant/Card/OverviewItem';
import { OverviewTable } from '../container/OverviewTable';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { Link } from 'component/Link';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

const All_CARDS = gql`
  query getRestaurantCards($where: CardWhereInput!, $first: Int, $skip: Int) {
    cards(first: $first, skip: $skip, where: $where) {
      id
      name
      activeRestaurant {
        id
      }
    }
    cardsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default class RestaurantCardOverview extends React.Component<
  ScreenProps,
  {}
> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  render() {
    const { restaurantId } = this.props.query;
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = {
      where: { restaurant: { id: restaurantId } },
      ...getPageInfo(this.props),
    };
    return (
      <Query query={All_CARDS} variables={variables} fetchPolicy="network-only">
        {({ refetch, data }) => (
          <Body>
            <AppHeader user={this.props.currentUser} />
            <RestaurantTopMenu id={restaurantId} />
            <ContentContainer>
              <Content>
                <Link to={`/restaurant/${restaurantId}/card/add`} prefetch>
                  <IconAddCircle />
                  Add menu
                </Link>
                <OverviewTable
                  headings={['Name']}
                  item={props => (
                    <RestaurantCardOverviewItem
                      {...props}
                      restaurantId={restaurantId}
                    />
                  )}
                  data={data}
                  refetch={refetch}
                  name="cards"
                />
              </Content>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={(data as any).cardsConnection}
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
