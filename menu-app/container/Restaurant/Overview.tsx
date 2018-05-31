import { RestaurantListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Header } from '../../component/Header';
import { Store } from 'Store';

interface Props {
  organization: any;
  store: Store;
}

export const RestaurantOverview = ({ organization, store }: Props) => (
  <div>
    <Header title={organization.name} backUrl="/" store={store} />
    <Grid>
      {organization.restaurants.map(restaurant => (
        <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
      ))}
    </Grid>
  </div>
);
