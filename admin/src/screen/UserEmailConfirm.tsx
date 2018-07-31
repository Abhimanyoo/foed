import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';

const CONFIRM_EMAIL = gql`
  mutation confirmEmail($email: String!, $emailConfirmToken: String!) {
    confirmEmail(email: $email, emailConfirmToken: $emailConfirmToken) {
      token
    }
  }
`;

interface Props extends ScreenProps {
  mutate: any; // TODO find out why `MutationFn<any, any>` does not work
}

class UserEmailConfirmMutation extends React.Component<Props> {
  async componentDidMount() {
    const { email, emailConfirmToken } = this.props.match.params;
    try {
      const res = await this.props.mutate({
        variables: { email, emailConfirmToken },
      });
      const token = res.data.confirmEmail.token;
      localStorage.setItem('authToken', token);
      this.props.refetchBootstrap();
      this.props.addNotification({
        key: 'emailConfirmSuccess',
        dismissAfter: 6000,
        message: 'Email successfully confirmed!',
      });
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        this.props.addNotification({
          key: 'emailConfirmFail',
          dismissAfter: 4000,
          message: 'Something went wrong with confirming your email.',
        });
      } else {
        throw err;
      }
    }
    this.props.history.replace('/');
  }
  render() {
    return null;
  }
}

export class UserEmailConfirm extends React.Component<ScreenProps, {}> {
  render() {
    return (
      <Mutation mutation={CONFIRM_EMAIL}>
        {mutate => <UserEmailConfirmMutation mutate={mutate} {...this.props} />}
      </Mutation>
    );
  }
}
