import * as React from 'react';
import {
  TopMenu,
  MenuRow,
  NavMenu,
  NavItem,
  Logo,
  Tone,
} from '@volst/ui-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getDisplayName } from '../utils/user';

const MyLogo = () => <Logo>Volst</Logo>;

export interface Props extends RouteComponentProps<{}> {
  user: any;
}

class MyAppHeader extends React.Component<Props> {
  render() {
    if (!this.props.user) {
      return null;
    }

    const { user } = this.props;
    const accountTitle = `${getDisplayName(user)}`;
    const account = <NavItem title={accountTitle} to="/account/details" />;

    return (
      <TopMenu>
        <MenuRow tone={Tone.Dark}>
          <MyLogo />
          <NavMenu>
            <NavItem title="Users" to="/user" activePath="/user" />
            <NavItem title="Restaurants" to="/restaurant" />
            <NavItem title="Organizations" to="/organization" />
          </NavMenu>
          {account}
        </MenuRow>
      </TopMenu>
    );
  }
}

export const AppHeader = withRouter(MyAppHeader);
