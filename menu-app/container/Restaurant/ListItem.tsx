import * as React from 'react';
import { GridItem, GridItemTitle } from '../../component/Grid';

interface Props {
  restaurant: any;
}

export class RestaurantListItem extends React.Component<Props, {}> {
  render() {
    const { restaurant } = this.props;
    return (
      <GridItem route={`/restaurant/${restaurant.slug}`} prefetch>
        <GridItemTitle>{restaurant.name}</GridItemTitle>
      </GridItem>
    );
  }
}
