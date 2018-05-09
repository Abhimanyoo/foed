import { Page } from '../component/Page';
import { withApollo } from '../withApollo';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrganizationListItem } from '../container/OrganizationList/ListItem';

const ALL_ORGANIZATIONS = gql`
  query allOrganizationNames {
    organizations {
      slug
      name
    }
  }
`;

const Index = withApollo(() => (
  <Page>
    <Query query={ALL_ORGANIZATIONS}>
      {result => {
        return (
          <div>
            {result.data.organizations.map(org => (
              <OrganizationListItem key={org.slug} organization={org} />
            ))}
          </div>
        );
      }}
    </Query>
  </Page>
));

export default Index;
