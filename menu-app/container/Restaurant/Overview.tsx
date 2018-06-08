import { RestaurantListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Header } from '../../component/Header';
import { Subheading } from '../../component/LogoHeader';
import { Store } from 'Store';

interface Props {
  organization: any;
  store: Store;
}

export const RestaurantOverview = ({ organization, store }: Props) => (
  <div>
    <Header backTitle="Venues" backUrl="/" store={store} />
    <Subheading>{organization.name} restaurants</Subheading>
    <Grid>
      {organization.restaurants.map(restaurant => (
        <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
      ))}
    </Grid>
  </div>
);
