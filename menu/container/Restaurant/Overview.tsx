import { RestaurantListItem } from './ListItem';
import { Grid, GRID_ITEM_HEIGHT } from 'component/Grid';
import { Header } from 'component/Header';
import { Store } from 'Store';
import VirtualList from 'react-virtual-list';

interface Props {
  organization: any;
  store: Store;
}

const MyList = ({ virtual }) => (
  <Grid style={virtual.style}>
    {virtual.items.map(item => (
      <RestaurantListItem key={item.slug} restaurant={item} />
    ))}
  </Grid>
);

const MyVirtualList = VirtualList()(MyList);

export const RestaurantOverview = ({ organization, store }: Props) => (
  <div>
    <Header
      backTitle="Venues"
      backUrl="/"
      subTitle={`${organization.name}`}
      store={store}
    />
    <MyVirtualList
      items={organization.restaurants}
      itemHeight={GRID_ITEM_HEIGHT}
    />
  </div>
);
