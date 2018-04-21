import React, { Component } from 'react';
import { Form } from '../../component/Form';
import { Button, ActionBar, FormField, TextInput } from '@volst/ui-components';
import { FormikConfig } from 'formik';
import Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  name: Yup.string().required('Required'),
});

export class RestaurantSettingsForm extends Component<Props, {}> {
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
            <FormField label="Full name" error={realErrors.name} required>
              <TextInput
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <ActionBar>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                Save
              </Button>
            </ActionBar>
          </div>
        )}
      />
    );
  }
}
