import * as React from 'react';
import {
  Body,
  ContentContainer,
  Content,
  Sidebar,
  Toolbar,
  Heading,
} from '@volst/ui-components';
import { OverviewTable } from '../container/OverviewTable';
import { UserOverviewItem } from '../container/User/OverviewItem';
import { UserOverviewFilters } from '../container/User/OverviewFilters';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { ScreenProps } from '../Props';

const ALL_USERS = gql`
  query allUsers($where: UserWhereInput!, $first: Int, $skip: Int) {
    users(first: $first, skip: $skip, orderBy: name_ASC, where: $where) {
      id
      name
      email
      inviteAccepted
      employments {
        restaurant {
          name
        }
      }
    }
    usersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export class UserOverview extends React.Component<ScreenProps, {}> {
  render() {
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables: any = {
      where: { isSuper: true },
      ...getPageInfo(this.props),
    };
    return (
      <Query query={ALL_USERS} variables={variables}>
        {({ refetch, data }) => (
          <Body>
            <ContentContainer>
              <Content>
                <Heading>User overview</Heading>
                <OverviewTable
                  headings={['Full name', 'Email', 'Restaurants']}
                  item={props => <UserOverviewItem {...props} />}
                  data={data}
                  refetch={refetch}
                  name="users"
                />
              </Content>
              <Sidebar>
                <UserOverviewFilters refetch={refetch} />
              </Sidebar>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={(data as any).usersConnection}
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
