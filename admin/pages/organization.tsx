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
import { OverviewTable } from '../container/OverviewTable';
import { OrganizationOverviewItem } from '../container/Organization/OverviewItem';
import { OrganizationOverviewFilters } from '../container/Organization/OverviewFilters';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { ScreenProps } from '../Props';
import { Link } from 'component/Link';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

const ALL_ORGANIZATIONS = gql`
  query allOrganizations(
    $where: OrganizationWhereInput!
    $first: Int
    $skip: Int
  ) {
    organizations(
      first: $first
      skip: $skip
      orderBy: name_ASC
      where: $where
    ) {
      id
      name
      visible
    }
    organizationsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default class OrganizationOverview extends React.Component<
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
      <Query
        query={ALL_ORGANIZATIONS}
        variables={variables}
        fetchPolicy="network-only"
      >
        {({ refetch, data }) => (
          <Body>
            <AppHeader user={this.props.currentUser} />

            <ContentContainer>
              <Content>
                <Row>
                  <Col xs>
                    <Heading>Organization overview</Heading>
                  </Col>
                  <Col>
                    <Link to="/organization/add" prefetch>
                      <IconAddCircle />
                      Add organization
                    </Link>
                  </Col>
                </Row>
                <OverviewTable
                  headings={['Name', 'Employees', 'Visibility']}
                  item={props => <OrganizationOverviewItem {...props} />}
                  data={data}
                  refetch={refetch}
                  name="organizations"
                />
              </Content>
              <Sidebar>
                <OrganizationOverviewFilters refetch={refetch} />
              </Sidebar>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={data.organizationsConnection}
                query={this.props.query}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
