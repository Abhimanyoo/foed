import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { ScreenProps } from '../Props';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

export default class RestaurantDetails extends React.Component<
  ScreenProps,
  {}
> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  render() {
    const { query } = this.props;
    const id = query.id;
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <RestaurantTopMenu id={id} />
        <ContentContainer>
          <Content>
            <p>Here will be a dashboard.</p>
            <p>Stats about sales today compared to other days</p>
            <p>Best selling menu item</p>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
