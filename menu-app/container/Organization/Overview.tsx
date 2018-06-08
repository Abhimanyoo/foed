import { OrganizationListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Logo } from '../../component/Logo';
import { Subheading } from '../../component/LogoHeader';

interface Props {
  organizations: any[];
}

export const OrganizationOverview = (props: Props) => (
  <div>
    <Logo />
    <Subheading>Venues</Subheading>
    <Grid>
      {props.organizations.map(org => (
        <OrganizationListItem key={org.slug} organization={org} />
      ))}
    </Grid>
  </div>
);
