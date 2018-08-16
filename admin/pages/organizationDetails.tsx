import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { ScreenProps } from '../Props';
import { OrganizationTopMenu } from '../container/Organization/TopMenu';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

export default class OrganizationDetails extends React.Component<
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
    const { id } = this.props.query;
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <OrganizationTopMenu id={id} />
        <ContentContainer>
          <Content>
            <p>Here will be a dashboard for the organization.</p>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
