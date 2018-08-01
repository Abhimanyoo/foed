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
import { OrganizationOverviewItem } from '../container/Organization/OverviewItem';
import { OrganizationOverviewFilters } from '../container/Organization/OverviewFilters';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';
import { ScreenProps } from '../Props';

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

export class OrganizationOverview extends React.Component<ScreenProps, {}> {
  render() {
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = { where: {}, ...getPageInfo(this.props) };
    return (
      <Query
        query={ALL_ORGANIZATIONS}
        variables={variables}
        fetchPolicy="network-only"
      >
        {({ refetch, data }) => (
          <Body>
            <ContentContainer>
              <Content>
                <Row>
                  <Col xs>
                    <Heading>Organization overview</Heading>
                  </Col>
                  <Col>
                    <Link to="/organization/add">
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
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
