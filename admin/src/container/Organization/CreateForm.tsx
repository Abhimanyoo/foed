import React, { Component } from 'react';
import { Form } from '../../component/Form';
import { Button, ActionBar } from '@volst/ui-components';
import { FormikConfig } from 'formik';
import { OrganizationNameFields } from './NameFields';
import Yup from 'yup';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  name: Yup.string().required('Required'),
  slug: Yup.string().required('Required'),
});

export class OrganizationCreateForm extends Component<Props, {}> {
  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={Validations}
        render={form => (
          <div>
            <OrganizationNameFields form={form} />
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
