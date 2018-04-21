import * as React from 'react';
import {
  Body,
  ContentContainer,
  Content,
  Toolbar,
  Link,
  IconAddCircle,
} from '@volst/ui-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { RestaurantUserOverviewItem } from '../container/Restaurant/User/OverviewItem';
import { OverviewTable } from '../container/OverviewTable';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';

const ALL_EMPLOYEES = gql`
  query getRestaurantEmployees(
    $where: EmploymentWhereInput!
    $first: Int
    $skip: Int
  ) {
    employments(first: $first, skip: $skip, where: $where) {
      id
      permission
      user {
        name
        email
        inviteAccepted
      }
    }
    employmentsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export class RestaurantUserOverview extends React.Component<ScreenProps, {}> {
  render() {
    const { match } = this.props;
    const restaurantId = match.params.restaurantId;
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = {
      where: { restaurant: { id: restaurantId } },
      ...getPageInfo(this.props),
    };
    return (
      <Query query={ALL_EMPLOYEES} variables={variables}>
        {({ refetch, data }) => (
          <Body>
            <RestaurantTopMenu id={restaurantId} />
            <ContentContainer>
              <Content>
                <Link to={`/restaurant/${restaurantId}/user/invite`}>
                  <IconAddCircle />
                  Invite user
                </Link>
                <OverviewTable
                  headings={['Full name', 'Email', 'Role']}
                  item={props => <RestaurantUserOverviewItem {...props} />}
                  data={data}
                  refetch={refetch}
                  name="employments"
                />
              </Content>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={(data as any).employmentsConnection}
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
