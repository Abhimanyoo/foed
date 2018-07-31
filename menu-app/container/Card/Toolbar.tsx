import * as React from 'react';
import { Button } from 'component/Button';
import { FloatingButtons } from 'component/FloatingButtons';
import { observer } from 'mobx-react';
import R from 'routes';
import { Store } from 'Store';

interface Props {
  preselectedAmount: number;
  store: Store;
  onCancel: () => void;
  onAdd: () => void;
}

@observer
export class CardToolbar extends React.Component<Props, {}> {
  render() {
    const { store, preselectedAmount } = this.props;
    if (preselectedAmount > 0) {
      return (
        <FloatingButtons>
          <Button onClick={this.props.onCancel} tone="secondary">
            Cancel
          </Button>
          <Button onClick={this.props.onAdd}>
            {preselectedAmount === 1
              ? 'Add item'
              : `Add ${preselectedAmount} items`}
          </Button>
        </FloatingButtons>
      );
    }
    if (store.order.items.length > 0) {
      return (
        <FloatingButtons>
          <R.Link route="/order">
            <Button>Finish order</Button>
          </R.Link>
        </FloatingButtons>
      );
    }
    return null;
  }
}
