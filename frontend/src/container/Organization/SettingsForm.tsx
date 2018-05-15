import React, { Component } from 'react';
import { Form } from '../../component/Form';
import {
  Button,
  ActionBar,
  FormField,
  TextInput,
  Checkbox,
} from '@volst/ui-components';
import { FormikConfig } from 'formik';
import Yup from 'yup';
import { ImageUpload } from '../ImageUpload';

interface Props {
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: object;
}

const Validations = Yup.object().shape({
  name: Yup.string().required('Required'),
});

export class OrganizationSettingsForm extends Component<Props, {}> {
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
            <FormField
              label="Organization name"
              error={realErrors.name}
              required
            >
              <TextInput
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </FormField>
            <FormField label="" error={realErrors.visible}>
              <Checkbox
                name="visible"
                label="Visible in menu app"
                value={values.visible || false}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Image" error={realErrors.imageUrl} required>
              <ImageUpload
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
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
