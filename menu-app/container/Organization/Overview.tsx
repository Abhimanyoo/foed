import { OrganizationListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Logo } from '../../component/Logo';
import { LogoHeader, Subheading } from '../../component/LogoHeader';

interface Props {
  organizations: any[];
}

export const OrganizationOverview = (props: Props) => (
  <div>
    <LogoHeader>
      <Logo />
      <Subheading>Select your venue</Subheading>
    </LogoHeader>
    <Grid>
      {props.organizations.map(org => (
        <OrganizationListItem key={org.slug} organization={org} />
      ))}
    </Grid>
  </div>
);
