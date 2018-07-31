import * as React from 'react';
import {
  ActionBar,
  Heading,
  Button,
  Row,
  Col,
  FormField,
  TextInput,
} from '@volst/ui-components';
import { Form } from '../../component/Form';
import { FormikConfig } from 'formik';
import Yup from 'yup';

export interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string().required('Required'),
});

export class AccountChangePasswordForm extends React.Component<Props, {}> {
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
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Heading>Change password</Heading>
              <FormField
                label="Old password"
                error={realErrors.oldPassword}
                required
              >
                <TextInput
                  name="oldPassword"
                  type="password"
                  value={values.oldPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                />
              </FormField>
              <FormField
                label="New password"
                error={realErrors.newPassword}
                required
              >
                <TextInput
                  name="newPassword"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormField>
              <ActionBar>
                <Button type="submit" disabled={isSubmitting || !isValid}>
                  Save
                </Button>
              </ActionBar>
            </Col>
          </Row>
        )}
      />
    );
  }
}
