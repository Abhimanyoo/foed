import React, { Component } from 'react';
import { Form } from '../../component/Form';
import { Text, Button, Tone, FormField } from '@volst/ui-components';
import { FormikConfig } from 'formik';
import { LoginTextInput } from '../../component/Login';
import * as Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  password: Yup.string().required('Required'),
});

export class ResetPasswordForm extends Component<Props, {}> {
  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={Validations}
        render={({
          isSubmitting,
          isValid,
          values,
          realErrors,
          handleBlur,
          handleChange,
        }) => (
          <div>
            <Text tone={Tone.Light}>
              You are about to reset the password of your account.
            </Text>
            <FormField label="Email" error={realErrors.email} required>
              <LoginTextInput
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <FormField
              label="New password"
              error={realErrors.password}
              required
            >
              <LoginTextInput
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            <Button type="submit" fullWidth disabled={isSubmitting}>
              Reset password
            </Button>
          </div>
        )}
      />
    );
  }
}
