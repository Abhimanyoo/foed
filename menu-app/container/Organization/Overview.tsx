import { OrganizationListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Logo } from '../../component/Logo';

interface Props {
  organizations: any[];
}

export const OrganizationOverview = (props: Props) => (
  <div>
    <Logo />
    <Grid>
      {props.organizations.map(org => (
        <OrganizationListItem key={org.slug} organization={org} />
      ))}
    </Grid>
  </div>
);
