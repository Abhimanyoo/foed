import { Page } from '../component/Page';
import { withApollo } from '../withApollo';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrganizationListItem } from '../container/OrganizationList/ListItem';

const ALL_ORGANIZATIONS = gql`
  query allOrganizationNames {
    organizations {
      id
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
              <OrganizationListItem key={org.id} organization={org} />
            ))}
          </div>
        );
      }}
    </Query>
  </Page>
));

console.log('ff', Index);

export default Index;
