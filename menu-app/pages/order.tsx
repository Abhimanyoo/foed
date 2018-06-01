import React from 'react';
import { Page } from '../component/Page';
import { OrderDetails } from '../container/Order/Details';
import { Store } from 'Store';

interface Props {
  store: Store;
}

export default class OrderPage extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return (
      <Page>
        <OrderDetails store={store} />
      </Page>
    );
  }
}
