import * as React from 'react';
import {
  Body,
  ContentContainer,
  Row,
  Col,
  Content,
} from '@volst/ui-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { OrganizationSettingsForm } from '../container/Organization/SettingsForm';
import { parseQueryToForm } from '@volst/graphql-form-helpers';
import { OrganizationTopMenu } from '../container/Organization/TopMenu';

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
    }
  }
`;

export class OrganizationSettings extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values: object, mutate, id?: string) => {
    try {
      await mutate({
        variables: { id, data: values },
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
        <OrganizationTopMenu id={id} />
        <ContentContainer>
          <Query query={ORGANIZATION} variables={{ id }}>
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
                          initialValues={parseQueryToForm(data.organization, {
                            name: '',
                          })}
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
