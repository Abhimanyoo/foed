import React, { Component } from 'react';
import { Row, Col, FormField, TextInput } from '@volst/ui-components';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { FormikProps } from '../../component/Form';

interface Props {
  form: FormikProps<any>;
}

const GENERATE_SLUG = gql`
  query generateRestaurantSlug($name: String!) {
    generateRestaurantSlug(name: $name) {
      slug
    }
  }
`;

export class RestaurantNameFields extends Component<Props, {}> {
  handleBlur = async (client, value) => {
    const result = await client.query({
      query: GENERATE_SLUG,
      variables: { name: value },
    });
    const slug = result.data.generateRestaurantSlug.slug;
    this.props.form.setFieldValue('slug', slug);
  };

  render() {
    const { form } = this.props;
    return (
      <ApolloConsumer>
        {client => (
          <Row>
            <Col xs>
              <FormField label="Name" error={form.realErrors.name} required>
                <TextInput
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={(name, value) => {
                    form.handleBlur(name);
                    this.handleBlur(client, value);
                  }}
                  autoFocus
                />
              </FormField>
            </Col>
            <Col xs>
              <FormField
                label="Slug"
                error={form.realErrors.slug}
                required
                helpText="URL-friendly name"
              >
                <TextInput
                  name="slug"
                  value={form.values.slug}
                  onChange={form.handleChange}
                  onBlur={(name, value) => {
                    form.handleBlur(name);
                    this.handleBlur(client, value);
                  }}
                />
              </FormField>
            </Col>
          </Row>
        )}
      </ApolloConsumer>
    );
  }
}
