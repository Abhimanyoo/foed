import * as React from 'react';
import {
  ActionBar,
  Heading,
  Button,
  Row,
  Col,
  IconExitToApp,
  Tone,
  FormField,
  TextInput,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Yup from 'yup';
import { Form } from '../../component/Form';
import { AddNotification } from '../../Props';

export interface Props {
  addNotification: AddNotification;
  user: any;
  onLogout: () => void;
}

const Validations = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const UPDATE_CURRENT_USER = gql`
  mutation updateCurrentUser($data: UserUpdateInput!) {
    updateCurrentUser(data: $data) {
      id
    }
  }
`;
export class AccountDetailsForm extends React.Component<Props, {}> {
  save = async (values, actions, mutate) => {
    try {
      await mutate({
        variables: { data: values },
      });
      this.props.addNotification({
        key: 'requestSave',
        dismissAfter: true,
        message: 'Changed successfully',
      });
      actions.setSubmitting(false);
    } catch (err) {
      if (!err.graphQLErrors) {
        throw err;
      }
    }
    actions.setSubmitting(false);
  };

  render() {
    const { user } = this.props;
    return (
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Row middle="xs">
            <Col xs>
              <Heading>Account</Heading>
            </Col>
            <Col>
              <Button onClick={this.props.onLogout} tone={Tone.Dark}>
                <IconExitToApp />
                Logout
              </Button>
            </Col>
          </Row>
          <Mutation mutation={UPDATE_CURRENT_USER}>
            {mutate => (
              <Form
                initialValues={{ name: user.name, email: user.email }}
                onSubmit={(values, actions) =>
                  this.save(values, actions, mutate)
                }
                validationSchema={Validations}
                render={({
                  isSubmitting,
                  isValid,
                  realErrors,
                  values,
                  handleChange,
                  handleBlur,
                }) => (
                  <React.Fragment>
                    <FormField label="Name" error={realErrors.name} required>
                      <TextInput
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </FormField>
                    <FormField label="Email" error={realErrors.email} required>
                      <TextInput
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </FormField>
                    <ActionBar>
                      <Button type="submit" disabled={isSubmitting || !isValid}>
                        Save
                      </Button>
                    </ActionBar>
                  </React.Fragment>
                )}
              />
            )}
          </Mutation>
        </Col>
      </Row>
    );
  }
}
