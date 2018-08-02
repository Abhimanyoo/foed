import { RestaurantListItem } from './ListItem';
import { Grid, GRID_ITEM_HEIGHT } from 'component/Grid';
import VirtualList from 'react-virtual-list';
import { Subheading } from 'component/Header';
import { currentUserDetails_currentUser } from 'graphqlTypes';

interface Props {
  employments: currentUserDetails_currentUser['employments'];
}

const MyList = ({ virtual }) => (
  <Grid style={virtual.style}>
    {virtual.items.map(item => (
      <RestaurantListItem
        key={item.restaurant.id}
        restaurant={item.restaurant}
      />
    ))}
  </Grid>
);

const MyVirtualList = VirtualList()(MyList);

export const RestaurantOverview = ({ employments }: Props) => (
  <div>
    <Subheading>Restaurants</Subheading>
    <MyVirtualList items={employments} itemHeight={GRID_ITEM_HEIGHT} />
  </div>
);
