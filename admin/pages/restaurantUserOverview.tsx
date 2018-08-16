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
import { RestaurantUserOverviewItem } from '../container/Restaurant/User/OverviewItem';
import { OverviewTable } from '../container/OverviewTable';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { Link } from 'component/Link';
import redirect from 'lib/redirect';
import checkLoggedIn from 'lib/checkLoggedIn';
import { AppHeader } from 'container/AppHeader';

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

export default class RestaurantUserOverview extends React.Component<
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
      ...getPageInfo(this.props.query),
    };
    return (
      <Query query={ALL_EMPLOYEES} variables={variables}>
        {({ refetch, data }) => (
          <Body>
            <AppHeader user={this.props.currentUser} />
            <RestaurantTopMenu id={restaurantId} />
            <ContentContainer>
              <Content>
                <Link to={`/restaurant/${restaurantId}/user/invite`} prefetch>
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
                query={this.props.query}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
