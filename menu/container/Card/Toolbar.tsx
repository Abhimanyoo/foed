import * as React from 'react';
import { Button } from 'component/Button';
import { FloatingButtons } from 'component/FloatingButtons';
import { observer } from 'mobx-react';
import R from 'routes';
import { Store } from 'Store';

interface Props {
  store: Store;
}

@observer
export class CardToolbar extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;

    if (store.order.items.length > 0) {
      return (
        <FloatingButtons>
          <R.Link route="/order">
            <Button tone="secondary">View cart</Button>
          </R.Link>
        </FloatingButtons>
      );
    }
    return null;
  }
}
