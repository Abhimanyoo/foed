import React, { Component } from 'react';
import { Form } from '../../../component/Form';
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

export class RestaurantCardCreateForm extends Component<Props, {}> {
  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={Validations}
        render={form => (
          <div>
            <FormField label="Name" error={form.realErrors.name} required>
              <TextInput
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                autoFocus
              />
            </FormField>
            <ActionBar>
              <Button
                type="submit"
                disabled={form.isSubmitting || !form.isValid}
              >
                Save
              </Button>
            </ActionBar>
          </div>
        )}
      />
    );
  }
}
