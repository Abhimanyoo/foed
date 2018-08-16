import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

export default class Index extends React.Component {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    } else {
      redirect(context, '/restaurant');
    }

    return { currentUser };
  }

  render() {
    return null;
  }
}
