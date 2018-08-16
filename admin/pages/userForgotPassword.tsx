import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, Tone } from '@volst/ui-components';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { observable } from 'mobx';
import { ScreenProps } from '../Props';
import { ForgotPasswordForm } from '../container/Account/ForgotPasswordForm';

const TRIGGER_PASSWORD_RESET = gql`
  mutation triggerPasswordReset($email: String!) {
    triggerPasswordReset(email: $email) {
      ok
    }
  }
`;

@observer
export default class UserForgotPassword extends React.Component<
  ScreenProps,
  {}
> {
  @observable
  formSent = false;
  handleSubmit = async (values, mutate) => {
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
          message: 'Failed to send email.',
        });
        return;
      }
      throw err;
    }
  };

  renderForm = () => {
    let { email } = this.props.query;
    email = email || '';
    if (this.props.currentUser) {
      return <Text tone={Tone.Light}>You are logged in already.</Text>;
    }
    return (
      <Mutation mutation={TRIGGER_PASSWORD_RESET}>
        {mutate => (
          <ForgotPasswordForm
            initialValues={{ email }}
            onSubmit={values => this.handleSubmit(values, mutate)}
          />
        )}
      </Mutation>
    );
  };

  renderSent = () => {
    return <Text tone={Tone.Light}>Check your email box.</Text>;
  };

  render() {
    return (
      <LoginBackground>
        <LoginContainer>
          <LoginLogo />
          {this.formSent ? this.renderSent() : this.renderForm()}
        </LoginContainer>
      </LoginBackground>
    );
  }
}
