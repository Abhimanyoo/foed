import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from '../../component/Query';
import { MenuRow } from '@volst/ui-components';
import { NavItem } from 'component/NavItem';
import { DetailedTopMenu, Heading } from '../../component/DetailedTopMenu';

const RESTAURANT = gql`
  query getRestaurant($id: ID!) {
    restaurant(where: { id: $id }) {
      id
      name
    }
  }
`;

interface Props {
  id: string;
}

export class RestaurantTopMenu extends React.Component<Props, {}> {
  render() {
    const { id } = this.props;
    return (
      <Query query={RESTAURANT} variables={{ id }}>
        {({ data }) => (
          <React.Fragment>
            <DetailedTopMenu>
              <Heading>Restaurant {data.restaurant.name}</Heading>
              <MenuRow inContent>
                <NavItem title="Dashboard" to={`/restaurant/${id}`} exact />
                <NavItem title="Menu" to={`/restaurant/${id}/card`} />
                <NavItem title="Users" to={`/restaurant/${id}/user`} />
                <NavItem title="Settings" to={`/restaurant/${id}/settings`} />
              </MenuRow>
            </DetailedTopMenu>
            {this.props.children}
          </React.Fragment>
        )}
      </Query>
    );
  }
}
