import * as React from 'react';
import {
  Button,
  Text,
  Row,
  Col,
  ActionBar,
  FormField,
  RadioButtons,
  TextInput,
} from '@volst/ui-components';
import { Form } from '../../../component/Form';
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
});

const permissions = [
  {
    value: 'EMPLOYEE',
    label: 'Employee',
  },
  {
    value: 'ADMIN',
    label: 'Admin',
  },
  {
    value: 'OWNER',
    label: 'Owner',
  },
];

export class RestaurantUserInviteForm extends React.Component<Props, {}> {
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
            <Text>
              After inviting, an email will be sent wherein the user will be
              asked to register for Foed.
            </Text>
            <FormField label="Email" error={realErrors.email} required>
              <TextInput
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <FormField
              label="Permission"
              error={realErrors.permission}
              required
            >
              <RadioButtons
                name="permission"
                value={values.permission}
                onChange={handleChange}
                options={permissions}
              />
            </FormField>
            <ActionBar>
              <Row>
                <Col>
                  <Button type="submit" disabled={isSubmitting || !isValid}>
                    Save
                  </Button>
                </Col>
              </Row>
            </ActionBar>
          </div>
        )}
      />
    );
  }
}
