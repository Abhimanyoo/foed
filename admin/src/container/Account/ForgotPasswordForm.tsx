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
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export class ForgotPasswordForm extends Component<Props, {}> {
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
          handleChange,
          handleBlur,
        }) => (
          <div>
            <Text tone={Tone.Light}>
              Fill in the email that you used to register here.
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
            <Button type="submit" fullWidth disabled={isSubmitting}>
              Send email
            </Button>
          </div>
        )}
      />
    );
  }
}
