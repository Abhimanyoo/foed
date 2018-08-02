import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import cookie from 'cookie';
import { ApolloConsumer } from 'react-apollo';
import SettingsBox from 'container/Settings';

interface Props {
  currentUser: any;
}

export default class Settings extends React.Component<Props> {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser };
  }

  logout = apolloClient => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1,
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/login');
    });
  };

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <SettingsBox
            currentUser={this.props.currentUser}
            onLogout={() => this.logout(client)}
          />
        )}
      </ApolloConsumer>
    );
  }
}
