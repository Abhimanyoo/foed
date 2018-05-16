import * as React from 'react';
import { GridItem, GridItemTitle, GridItemImage } from '../../component/Grid';

interface Props {
  restaurant: any;
}

export class RestaurantListItem extends React.Component<Props, {}> {
  render() {
    const { restaurant } = this.props;
    return (
      <GridItem route={`/restaurant/${restaurant.slug}`} prefetch>
        <React.Fragment>
          <GridItemTitle>{restaurant.name}</GridItemTitle>
          {restaurant.imageUrl && <GridItemImage src={restaurant.imageUrl} />}
        </React.Fragment>
      </GridItem>
    );
  }
}
