import { RestaurantListItem } from './ListItem';
import { Grid } from '../../component/Grid';
import R from '../../routes';

interface Props {
  organization: any;
}

export const RestaurantOverview = (props: Props) => (
  <div>
    <h1>{props.organization.name}</h1>
    <p>
      <R.Link route="/">
        <a>˂ Back</a>
      </R.Link>
    </p>
    <Grid>
      {props.organization.restaurants.map(restaurant => (
        <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
      ))}
    </Grid>
  </div>
);
