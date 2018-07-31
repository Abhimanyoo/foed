import * as React from 'react';
import { AccountChangePasswordForm } from '../container/Account/ChangePasswordForm';
import { ScreenProps } from '../Props';
import gql from 'graphql-tag';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { AccountTopMenu } from '../container/Account/TopMenu';

const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      id
    }
  }
`;

export class AccountChangePassword extends React.Component<ScreenProps, {}> {
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
