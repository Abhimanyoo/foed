import { Page } from '../component/Page';
import { withApollo } from '../withApollo';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrganizationOverview } from '../container/Organization/Overview';

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
      {result => (
        <OrganizationOverview organizations={result.data.organizations} />
      )}
    </Query>
  </Page>
));

export default Index;
