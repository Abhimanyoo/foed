import { OrganizationListItem } from './ListItem';
import { Grid } from '../../component/Grid';

interface Props {
  organizations: any[];
}

export const OrganizationOverview = (props: Props) => (
  <div>
    <h1>Foed</h1>
    <Grid>
      {props.organizations.map(org => (
        <OrganizationListItem key={org.slug} organization={org} />
      ))}
    </Grid>
  </div>
);
