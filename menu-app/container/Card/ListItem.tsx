import * as React from 'react';

interface Props {
  item: any;
}

export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { item } = this.props;
    return <div>{item.name}</div>;
  }
}
