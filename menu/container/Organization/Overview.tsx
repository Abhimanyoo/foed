import { OrganizationListItem } from './ListItem';
import { Grid, GRID_ITEM_HEIGHT } from 'component/Grid';
import { Logo } from 'component/Logo';
import VirtualList from 'react-virtual-list';

interface Props {
  organizations: any[];
}

const MyList = ({ virtual }) => (
  <Grid style={virtual.style}>
    {virtual.items.map(item => (
      <OrganizationListItem key={item.slug} organization={item} />
    ))}
  </Grid>
);

const MyVirtualList = VirtualList()(MyList);

export const OrganizationOverview = (props: Props) => (
  <div>
    <Logo />
    <MyVirtualList items={props.organizations} itemHeight={GRID_ITEM_HEIGHT} />
  </div>
);
