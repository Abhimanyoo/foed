import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Login } from '../screen/Login';
import { AppHeader } from './AppHeader';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Router } from './Router';
import { StartupError } from './StartupError';
import { RuntimeError } from './RuntimeError';
import { NotificationArea } from '../component/NotificationArea';
import { AppContainer, Body } from '@volst/ui-components';
import Raven from 'raven-js';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { setSentryUserContext } from '../sentry';
import { isNotAuthenticatedError } from '../utils/user';

const pathsThatSkipAuthentication = [
  /^\/login\/forgot$/,
  /^\/login\/reset-password/,
  /^\/register/,
];

// TODO: move to separate file?
const LOGGED_IN_USER = gql`
  query currentUser {
    currentUser {
      id
      email
      name
      isSuper
    }
  }
`;

interface Props extends RouteComponentProps<{}> {}

@observer
class MyApp extends React.Component<Props, {}> {
  @observable hasCrashed = false;
  private notificationRef: NotificationArea | null = null;

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.data && nextProps.data.user) {
      setSentryUserContext(nextProps.data.user);
    }
  }

  componentDidCatch(err: Error) {
    this.hasCrashed = true;
    if (process.env.REACT_APP_SENTRY_DSN) {
      Raven.captureException(err);
      Raven.showReportDialog();
    }
  }

  refetchHack = () => {
    this.forceUpdate();
  };

  renderContent = (content, currentUser) => {
    return (
      <AppContainer>
        <AppHeader user={currentUser} />
        <Body>{content}</Body>
        <NotificationArea ref={c => (this.notificationRef = c as any)} />
      </AppContainer>
    );
  };

  renderRouter = currentUser => {
    return this.renderContent(
      <Router
        refetchBootstrap={() => this.refetchHack()}
        addNotification={msg => this.notificationRef!.addNotification(msg)}
        currentUser={currentUser}
      />,
      currentUser
    );
  };

  renderLogin = () => {
    return this.renderContent(
      <Login refetchBootstrap={() => this.refetchHack()} />,
      null
    );
  };

  render(): any {
    const { location } = this.props;
    const shouldSkip = !localStorage.getItem('authToken');
    const isUnauthRoute = pathsThatSkipAuthentication.some(regex =>
      regex.test(location.pathname)
    );

    // Try to prevent a query to the API if possible
    if (isUnauthRoute) {
      return this.renderRouter(null);
    } else if (shouldSkip) {
      return this.renderLogin();
    }
    return (
      <Query query={LOGGED_IN_USER} fetchPolicy="network-only">
        {result => {
          const { loading, error, data } = result;
          const { currentUser } = (data || {}) as any;

          if (this.hasCrashed) {
            return <RuntimeError />;
          }
          if (error && !isNotAuthenticatedError(error)) {
            return <StartupError message={error.message} />;
          }
          if (currentUser || isUnauthRoute) {
            return this.renderRouter(currentUser);
          } else if (!loading && !currentUser) {
            return this.renderLogin();
          }
          return null;
        }}
      </Query>
    );
  }
}

export const App = withRouter(MyApp);
