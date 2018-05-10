import * as React from 'react';
import R from '../../routes';

interface Props {
  restaurant: any;
}

export class RestaurantListItem extends React.Component<Props, {}> {
  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <R.Link route={`/restaurant/${restaurant.slug}`}>
          <a>{restaurant.name}</a>
        </R.Link>
      </div>
    );
  }
}
