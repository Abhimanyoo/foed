import * as React from 'react';
import {
  Body,
  ContentContainer,
  Row,
  Col,
  Content,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { OrganizationSettingsForm } from '../container/Organization/SettingsForm';
import { parseQueryToForm } from '@volst/graphql-form-helpers';
import { OrganizationTopMenu } from '../container/Organization/TopMenu';
import { Query } from '../component/Query';
import R from '../routes';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

const UPDATE_ORGANIZATION = gql`
  mutation updateOrganization($id: ID, $data: OrganizationUpdateInput!) {
    updateOrganization(where: { id: $id }, data: $data) {
      id
    }
  }
`;

const ORGANIZATION = gql`
  query getOrganization($id: ID!) {
    organization(where: { id: $id }) {
      id
      name
      visible
      imageUrl
    }
  }
`;

export default class OrganizationSettings extends React.Component<
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

  handleSubmit = async (values: object, mutate, id?: string) => {
    try {
      await mutate({
        variables: { id, data: values },
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
    const { id } = this.props.query;
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <OrganizationTopMenu id={id} />
        <ContentContainer>
          <Query
            query={ORGANIZATION}
            variables={{ id }}
            fetchPolicy="network-only"
          >
            {({ data }) => (
              <Content>
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <Mutation mutation={UPDATE_ORGANIZATION}>
                      {mutate => (
                        <OrganizationSettingsForm
                          onSubmit={values =>
                            this.handleSubmit(values, mutate, id)
                          }
                          initialValues={parseQueryToForm(data.organization)}
                          addNotification={this.props.addNotification}
                        />
                      )}
                    </Mutation>
                  </Col>
                </Row>
              </Content>
            )}
          </Query>
        </ContentContainer>
      </Body>
    );
  }
}
