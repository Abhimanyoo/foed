import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { AccountDetailsForm } from '../container/Account/DetailsForm';
import { ScreenProps } from '../Props';
import { AccountTopMenu } from '../container/Account/TopMenu';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';
import cookie from 'cookie';
import { ApolloConsumer } from 'react-apollo';

export default class AccountDetails extends React.Component<ScreenProps, {}> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  handleLogout = apolloClient => {
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
      <Body>
        <AppHeader user={this.props.currentUser} />
        <AccountTopMenu />
        <ContentContainer>
          <Content>
            <ApolloConsumer>
              {client => (
                <AccountDetailsForm
                  addNotification={this.props.addNotification}
                  onLogout={() => this.handleLogout(client)}
                  user={this.props.currentUser}
                />
              )}
            </ApolloConsumer>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
