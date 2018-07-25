import React from 'react';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';
import { LoginBox } from '../container/Login';

export default class Login extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (currentUser.id) {
      redirect(context, '/');
    }

    return {};
  }

  render() {
    return (
      <React.Fragment>
        <LoginBox />
      </React.Fragment>
    );
  }
}
