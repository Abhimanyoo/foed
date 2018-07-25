import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

export default class Restaurant extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser };
  }

  render() {
    return <div>TODO</div>;
  }
}
