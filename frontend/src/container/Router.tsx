import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Loadable } from './Loadable';
import { UserRegister } from '../screen/UserRegister';
import { UserRegisterInvite } from '../screen/UserRegisterInvite';
import { UserForgotPassword } from '../screen/UserForgotPassword';
import { UserResetPassword } from '../screen/UserResetPassword';
import { NotFound } from '../container/NotFound';
import { CurrentUser, AddNotification } from '../Props';

const UserOverview = Loadable(() =>
  import('../screen/UserOverview').then(m => m.UserOverview)
);
const AccountDetails = Loadable(() =>
  import('../screen/AccountDetails').then(m => m.AccountDetails)
);
const AccountChangePassword = Loadable(() =>
  import('../screen/AccountChangePassword').then(m => m.AccountChangePassword)
);
const RestaurantOverview = Loadable(() =>
  import('../screen/RestaurantOverview').then(m => m.RestaurantOverview)
);
const RestaurantCreate = Loadable(() =>
  import('../screen/RestaurantCreate').then(m => m.RestaurantCreate)
);
const RestaurantSettings = Loadable(() =>
  import('../screen/RestaurantSettings').then(m => m.RestaurantSettings)
);
const RestaurantDetails = Loadable(() =>
  import('../screen/RestaurantDetails').then(m => m.RestaurantDetails)
);
const RestaurantUserOverview = Loadable(() =>
  import('../screen/RestaurantUserOverview').then(m => m.RestaurantUserOverview)
);
const RestaurantUserInvite = Loadable(() =>
  import('../screen/RestaurantUserInvite').then(m => m.RestaurantUserInvite)
);
const RestaurantCardOverview = Loadable(() =>
  import('../screen/RestaurantCardOverview').then(m => m.RestaurantCardOverview)
);
const RestaurantCardCreate = Loadable(() =>
  import('../screen/RestaurantCardCreate').then(m => m.RestaurantCardCreate)
);
const OrganizationOverview = Loadable(() =>
  import('../screen/OrganizationOverview').then(m => m.OrganizationOverview)
);
const OrganizationCreate = Loadable(() =>
  import('../screen/OrganizationCreate').then(m => m.OrganizationCreate)
);
const OrganizationSettings = Loadable(() =>
  import('../screen/OrganizationSettings').then(m => m.OrganizationSettings)
);
const OrganizationDetails = Loadable(() =>
  import('../screen/OrganizationDetails').then(m => m.OrganizationDetails)
);

export interface Props {
  refetchBootstrap: Function;
  addNotification: AddNotification;
  currentUser: CurrentUser;
}

export class Router extends React.Component<Props, object> {
  // react-router is a bit too verbose so I made a shorthand
  // TODO: is this still necessary??
  route = Screen => {
    return rProps => <Screen {...this.props} {...rProps} />;
  };

  redirectFromHome = () => {
    return <Redirect to="/user" />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={this.redirectFromHome} />
        <Route path="/login/forgot" render={this.route(UserForgotPassword)} />
        <Route
          path="/login/reset-password/:email/:resetToken"
          render={this.route(UserResetPassword)}
        />
        <Route path="/user" exact render={this.route(UserOverview)} />
        <Route path="/register" exact render={this.route(UserRegister)} />
        <Route
          path="/register/:email/:inviteToken"
          exact
          render={this.route(UserRegisterInvite)}
        />
        <Route
          path="/account/details"
          exact
          render={this.route(AccountDetails)}
        />
        <Route
          path="/account/password"
          exact
          render={this.route(AccountChangePassword)}
        />
        <Route
          path="/restaurant"
          exact
          render={this.route(RestaurantOverview)}
        />
        <Route
          path="/restaurant/add"
          exact
          render={this.route(RestaurantCreate)}
        />
        <Route
          path="/restaurant/:id"
          exact
          render={this.route(RestaurantDetails)}
        />
        <Route
          path="/restaurant/:id/settings"
          exact
          render={this.route(RestaurantSettings)}
        />
        <Route
          path="/restaurant/:restaurantId/user"
          exact
          render={this.route(RestaurantUserOverview)}
        />
        <Route
          path="/restaurant/:restaurantId/user/invite"
          exact
          render={this.route(RestaurantUserInvite)}
        />
        <Route
          path="/organization"
          exact
          render={this.route(OrganizationOverview)}
        />
        <Route
          path="/organization/add"
          exact
          render={this.route(OrganizationCreate)}
        />
        <Route
          path="/restaurant/:restaurantId/card"
          exact
          render={this.route(RestaurantCardOverview)}
        />
        <Route
          path="/restaurant/:restaurantId/card/add"
          exact
          render={this.route(RestaurantCardCreate)}
        />
        <Route
          path="/organization/:id"
          exact
          render={this.route(OrganizationDetails)}
        />
        <Route
          path="/organization/:id/settings"
          exact
          render={this.route(OrganizationSettings)}
        />
        <Route render={this.route(NotFound)} />
      </Switch>
    );
  }
}
