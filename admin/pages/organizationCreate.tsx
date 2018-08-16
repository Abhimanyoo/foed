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
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';
import R from '../routes';

const CREATE_ORGANIZATION = gql`
  mutation createOrganization($data: OrganizationCreateInput!) {
    createOrganization(data: $data) {
      id
    }
  }
`;

export default class OrganizationCreate extends React.Component<
  ScreenProps,
  {}
> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  handleSubmit = async (values: object, mutate) => {
    try {
      await mutate({
        variables: { data: values },
      });
      R.Router.push('/organization');
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
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <ContentContainer>
          <Content>
            <Heading>Add organization</Heading>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Mutation mutation={CREATE_ORGANIZATION}>
                  {mutate => (
                    <OrganizationCreateForm
                      onSubmit={values => this.handleSubmit(values, mutate)}
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
