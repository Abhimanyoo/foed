import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, Link, Tone } from '@volst/ui-components';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { observable } from 'mobx';
import { ScreenProps } from '../Props';
import { ResetPasswordForm } from '../container/Account/ResetPasswordForm';

const PASSWORD_RESET = gql`
  mutation passwordReset(
    $email: String!
    $resetToken: String!
    $password: String!
  ) {
    passwordReset(email: $email, resetToken: $resetToken, password: $password) {
      id
    }
  }
`;

@observer
export class UserResetPassword extends React.Component<ScreenProps, {}> {
  @observable formSent = false;
  handleSubmit = async (values, actions, mutate) => {
    try {
      await mutate({
        variables: values,
      });
      this.formSent = true;
      return null;
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        this.props.addNotification({
          key: 'requestError',
          dismissAfter: 4000,
          message: 'Reset token is invalid.',
        });
        actions.setSubmitting(false);
        return;
      }
      throw err;
    }
  };

  renderContent = () => {
    const { email, resetToken } = this.props.match.params;
    if (!email || !resetToken) {
      return (
        <Text tone={Tone.Light}>
          The URL doesn't contain any email and resetToken.
        </Text>
      );
    }
    if (this.props.currentUser) {
      return <Text tone={Tone.Light}>You are logged in already.</Text>;
    }
    return (
      <Mutation mutation={PASSWORD_RESET}>
        {mutate => (
          <ResetPasswordForm
            initialValues={{ email, resetToken, password: '' }}
            onSubmit={(values, actions) =>
              this.handleSubmit(values, actions, mutate)
            }
          />
        )}
      </Mutation>
    );
  };

  renderSent = () => {
    return (
      <Text tone={Tone.Light}>
        Your password has been reset. Go to the{' '}
        <Link to="/" link>
          login form
        </Link>.
      </Text>
    );
  };

  render() {
    return (
      <LoginBackground>
        <LoginContainer>
          <LoginLogo />
          {this.formSent ? this.renderSent() : this.renderContent()}
        </LoginContainer>
      </LoginBackground>
    );
  }
}
