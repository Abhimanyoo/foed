import * as React from 'react';
import {
  Body,
  ContentContainer,
  Content,
  Sidebar,
  Toolbar,
  Heading,
  Row,
  Col,
  IconAddCircle,
} from '@volst/ui-components';
import { OverviewTable } from 'container/OverviewTable';
import { RestaurantOverviewItem } from 'container/Restaurant/OverviewItem';
import { RestaurantOverviewFilters } from 'container/Restaurant/OverviewFilters';
import { Query } from 'component/Query';
import gql from 'graphql-tag';
import { PaginationControls } from 'component/PaginationControls';
import { getPageInfo } from 'utils/query';
import { ScreenProps } from 'Props';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { Link } from 'component/Link';
import { AppHeader } from 'container/AppHeader';

const ALL_RESTAURANTS = gql`
  query allRestaurants($where: RestaurantWhereInput!, $first: Int, $skip: Int) {
    restaurants(first: $first, skip: $skip, orderBy: name_ASC, where: $where) {
      id
      name
      visible
      organization {
        name
      }
    }
    restaurantsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default class RestaurantOverview extends React.Component<
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
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = { where: {}, ...getPageInfo(this.props.query) };
    return (
      <Query query={ALL_RESTAURANTS} variables={variables}>
        {({ refetch, data }) => (
          <Body>
            <AppHeader user={this.props.currentUser} />
            <ContentContainer>
              <Content>
                <Row>
                  <Col xs>
                    <Heading>Restaurant overview</Heading>
                  </Col>
                  <Col>
                    <Link to="/restaurant/add" prefetch>
                      <IconAddCircle />
                      Add restaurant
                    </Link>
                  </Col>
                </Row>
                <OverviewTable
                  headings={['Name', 'Employees', 'Organization', 'Visibility']}
                  item={props => <RestaurantOverviewItem {...props} />}
                  data={data}
                  refetch={refetch}
                  name="restaurants"
                />
              </Content>
              <Sidebar>
                <RestaurantOverviewFilters refetch={refetch} />
              </Sidebar>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={data.restaurantsConnection}
                query={this.props.query}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
