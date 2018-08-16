import React, { Component } from 'react';
import { Form } from '../../../component/Form';
import {
  Button,
  ActionBar,
  FormField,
  TextInput,
  Heading,
  Subheading,
  Row,
  Col,
} from '@volst/ui-components';
import { FormikConfig } from 'formik';
import { CreateFormCategoryList } from './CreateFormCategoryList';
import { CreateFormItemList } from './CreateFormItemList';
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
            <Heading>Step 1 – Name and categories</Heading>
            <Row>
              <Col xs={12} sm={5} md={3}>
                <FormField label="Name" error={form.realErrors.name} required>
                  <TextInput
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    autoFocus
                  />
                </FormField>
                <CreateFormCategoryList form={form} />
              </Col>
            </Row>
            <Heading>Step 2 – Dishes</Heading>
            {form.values.categories.map((category, index) => (
              <div>
                <Subheading underline>{category.name}</Subheading>
                <Row>
                  <Col xs={12} sm={5} md={3}>
                    <CreateFormItemList form={form} categoryIndex={index} />
                  </Col>
                </Row>
              </div>
            ))}
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
