import React, { Component } from 'react';
import { Form } from '../../component/Form';
import {
  Button,
  ActionBar,
  FormField,
  FancySelect,
} from '@volst/ui-components';
import { FormikConfig } from 'formik';
import { RestaurantNameFields } from './NameFields';
import Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
  organizationData: any;
}

const Validations = Yup.object().shape({
  name: Yup.string().required('Required'),
  slug: Yup.string().required('Required'),
});

export class RestaurantCreateForm extends Component<Props, {}> {
  render() {
    const { organizationData } = this.props;
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={Validations}
        render={form => (
          <div>
            <RestaurantNameFields form={form} />
            <FormField
              label="Organization"
              error={form.realErrors.organization}
              required
              helpText="Optional, physical place the restaurant is located in"
            >
              <FancySelect
                name="organization"
                value={form.values.organization}
                onChange={form.handleChange}
                options={
                  organizationData.organizations
                    ? organizationData.organizations.map(org => ({
                        value: org.id,
                        label: org.name,
                      }))
                    : []
                }
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
