import * as React from 'react';
import { GridItem, GridItemTitle, GridItemImage } from '../../component/Grid';

interface Props {
  restaurant: any;
}

export class RestaurantListItem extends React.Component<Props, {}> {
  render() {
    const { restaurant } = this.props;
    return (
      <GridItem route={`/restaurant/${restaurant.id}`} prefetch>
        <React.Fragment>
          {restaurant.imageUrl && <GridItemImage src={restaurant.imageUrl} />}
          <GridItemTitle>{restaurant.name}</GridItemTitle>
        </React.Fragment>
      </GridItem>
    );
  }
}
