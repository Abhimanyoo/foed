import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

export default class Index extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser };
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <div>Hello {this.props.currentUser.name}!</div>
        ) : (
          <div>not really logged in</div>
        )}
      </div>
    );
  }
}
