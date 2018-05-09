import React, { Component } from 'react';
import { Form } from '../../component/Form';
import { Text, Button, Tone, FormField } from '@volst/ui-components';
import { LoginTextInput } from '../../component/Login';
import { FormikConfig } from 'formik';
import Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export class RegisterInviteForm extends Component<Props, {}> {
  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={Validations}
        render={({
          isSubmitting,
          isValid,
          realErrors,
          values,
          handleBlur,
          handleChange,
        }) => (
          <div>
            <Text tone={Tone.Light}>
              Please fill in the fields to finish creating an account for Foed.
            </Text>
            <FormField label="Email" error={realErrors.email} required>
              <LoginTextInput
                name="email"
                type="email"
                value={values.email}
                disabled
              />
            </FormField>
            <FormField label="Full name" error={realErrors.name} required>
              <LoginTextInput
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <FormField label="Password" error={realErrors.password} required>
              <LoginTextInput
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            <Button type="submit" fullWidth disabled={isSubmitting}>
              Register
            </Button>
          </div>
        )}
      />
    );
  }
}
