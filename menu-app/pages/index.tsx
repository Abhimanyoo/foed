import { Page } from '../component/Page';
import { Query } from '../component/Query';
import gql from 'graphql-tag';
import { OrganizationOverview } from '../container/Organization/Overview';

const ALL_ORGANIZATIONS = gql`
  query allOrganizationNames {
    organizations(where: { visible: true }) {
      slug
      name
      imageUrl
    }
  }
`;

export default () => (
  <Page>
    <Query query={ALL_ORGANIZATIONS}>
      {result => (
        <OrganizationOverview organizations={result.data.organizations} />
      )}
    </Query>
  </Page>
);
