import { RestaurantListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import { Header } from '../../component/Header';

interface Props {
  organization: any;
}

export const RestaurantOverview = ({ organization }: Props) => (
  <div>
    <Header title={organization.name} backUrl="/" />
    <Grid>
      {organization.restaurants.map(restaurant => (
        <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
      ))}
    </Grid>
  </div>
);
