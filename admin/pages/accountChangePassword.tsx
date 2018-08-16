import * as React from 'react';
import { AccountChangePasswordForm } from 'container/Account/ChangePasswordForm';
import { ScreenProps } from 'Props';
import gql from 'graphql-tag';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { AccountTopMenu } from 'container/Account/TopMenu';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      id
    }
  }
`;

export default class AccountChangePassword extends React.Component<
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

  save = async (values, actions, mutate) => {
    try {
      await mutate({
        variables: values,
      });
      this.props.addNotification({
        key: 'requestSave',
        dismissAfter: 4000,
        message: 'Changed successfully',
      });
      actions.setSubmitting(false);
    } catch (err) {
      actions.setSubmitting(false);
      if (err.graphQLErrors) {
        actions.setFieldError('oldPassword', 'Invalid');
      } else {
        throw err;
      }
    }
  };

  render() {
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <AccountTopMenu />
        <ContentContainer>
          <Content>
            <Mutation mutation={CHANGE_PASSWORD}>
              {mutate => (
                <AccountChangePasswordForm
                  initialValues={{ oldPassword: '', newPassword: '' }}
                  onSubmit={(values, actions) =>
                    this.save(values, actions, mutate)
                  }
                />
              )}
            </Mutation>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
