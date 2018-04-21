import * as React from 'react';
import {
  Body,
  ContentContainer,
  Heading,
  Row,
  Col,
  Content,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { OrganizationCreateForm } from '../container/Organization/CreateForm';

const CREATE_ORGANIZATION = gql`
  mutation createOrganization($data: OrganizationCreateInput!) {
    createOrganization(data: $data) {
      id
    }
  }
`;

export class OrganizationCreate extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values: object, mutate, id?: string) => {
    try {
      await mutate({
        variables: { data: values },
      });
      this.props.history.push('/organization');
      return null;
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        return;
      }
      throw err;
    }
  };

  render() {
    const { match } = this.props;
    const id = match.params.id;
    return (
      <Body>
        <ContentContainer>
          <Content>
            <Heading>Add organization</Heading>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Mutation mutation={CREATE_ORGANIZATION}>
                  {mutate => (
                    <OrganizationCreateForm
                      onSubmit={values => this.handleSubmit(values, mutate, id)}
                      initialValues={{ name: '', slug: '' }}
                    />
                  )}
                </Mutation>
              </Col>
            </Row>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
