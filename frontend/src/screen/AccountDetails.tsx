import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { AccountDetailsForm } from '../container/Account/DetailsForm';
import { ScreenProps } from '../Props';
import { AccountTopMenu } from '../container/Account/TopMenu';

export class AccountDetails extends React.Component<ScreenProps, {}> {
  handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  render() {
    return (
      <Body>
        <AccountTopMenu />
        <ContentContainer>
          <Content>
            <AccountDetailsForm
              addNotification={this.props.addNotification}
              onLogout={this.handleLogout}
              user={this.props.currentUser}
            />
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
