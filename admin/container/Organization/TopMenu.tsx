import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'component/Query';
import { MenuRow } from '@volst/ui-components';
import { DetailedTopMenu, Heading } from 'component/DetailedTopMenu';
import { NavItem } from 'component/NavItem';

const ORGANIZATION = gql`
  query getOrganization($id: ID!) {
    organization(where: { id: $id }) {
      id
      name
    }
  }
`;

interface Props {
  id: string;
}

export class OrganizationTopMenu extends React.Component<Props, {}> {
  render() {
    const { id } = this.props;
    return (
      <Query query={ORGANIZATION} variables={{ id }}>
        {({ data }) => (
          <React.Fragment>
            <DetailedTopMenu>
              <Heading>Organization {data.organization.name}</Heading>
              <MenuRow inContent>
                <NavItem title="Dashboard" to={`/organization/${id}`} exact />
                <NavItem title="Settings" to={`/organization/${id}/settings`} />
              </MenuRow>
            </DetailedTopMenu>
            {this.props.children}
          </React.Fragment>
        )}
      </Query>
    );
  }
}
