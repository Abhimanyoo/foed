import React, { Component } from 'react';
import { Form } from '../../component/Form';
import { LoginTextInput } from '../../component/Login';
import { Button, FormField } from '@volst/ui-components';
import { FormikConfig } from 'formik';
import * as Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export class LoginForm extends Component<Props, {}> {
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
          handleChange,
          handleBlur,
        }) => (
          <div>
            <FormField label="Email" error={realErrors.email}>
              <LoginTextInput
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <FormField label="Password" error={realErrors.password}>
              <LoginTextInput
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormField>
            <FormField>
              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting || !isValid}
              >
                Login
              </Button>
            </FormField>
          </div>
        )}
      />
    );
  }
}
