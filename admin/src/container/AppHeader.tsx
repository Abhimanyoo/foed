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
import { CurrentUser } from '../Props';

const MyLogo = () => <Logo>Volst</Logo>;

export interface Props extends RouteComponentProps<{}> {
  user: CurrentUser;
}

class MyAppHeader extends React.Component<Props> {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    const accountTitle = `${getDisplayName(user)}`;
    const account = <NavItem title={accountTitle} to="/account/details" />;

    return (
      <TopMenu>
        <MenuRow tone={Tone.Dark}>
          <MyLogo />
          <NavMenu>
            {user.isSuper && (
              <NavItem title="Users" to="/user" activePath="/user" />
            )}
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
