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
  Link,
  IconAddCircle,
} from '@volst/ui-components';
import { OverviewTable } from '../container/OverviewTable';
import { RestaurantOverviewItem } from '../container/Restaurant/OverviewItem';
import { RestaurantOverviewFilters } from '../container/Restaurant/OverviewFilters';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { ScreenProps } from '../Props';

const ALL_RESTAURANTS = gql`
  query allRestaurants($where: RestaurantWhereInput!, $first: Int, $skip: Int) {
    restaurants(first: $first, skip: $skip, orderBy: name_ASC, where: $where) {
      id
      name
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

export class RestaurantOverview extends React.Component<ScreenProps, {}> {
  render() {
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = { where: {}, ...getPageInfo(this.props) };
    return (
      <Query
        query={ALL_RESTAURANTS}
        variables={variables}
        fetchPolicy="network-only"
      >
        {({ refetch, data }) => (
          <Body>
            <ContentContainer>
              <Content>
                <Row>
                  <Col xs>
                    <Heading>Restaurant overview</Heading>
                  </Col>
                  <Col>
                    <Link to="/restaurant/add">
                      <IconAddCircle />Add restaurant
                    </Link>
                  </Col>
                </Row>
                <OverviewTable
                  headings={['Name', 'Employees', 'Organization']}
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
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
