import * as React from 'react';
import { MenuRow } from '@volst/ui-components';
import { DetailedTopMenu, Heading } from 'component/DetailedTopMenu';
import { NavItem } from 'component/NavItem';

interface Props {}

export class AccountTopMenu extends React.Component<Props, {}> {
  render() {
    return (
      <React.Fragment>
        <DetailedTopMenu>
          <Heading>Account</Heading>
          <MenuRow inContent>
            <NavItem title="Account" to="/account/details" />
            <NavItem title="Change password" to="/account/password" />
          </MenuRow>
        </DetailedTopMenu>
        {this.props.children}
      </React.Fragment>
    );
  }
}
