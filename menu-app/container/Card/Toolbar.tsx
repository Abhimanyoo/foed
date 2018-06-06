import * as React from 'react';
import { Button } from '../../component/Button';
import { FloatingButtons } from '../../component/FloatingButtons';
import { observer } from 'mobx-react';
import R from '../../routes';

interface Props {
  selectedItems: any[];
  store: any;
  onCancel: () => void;
  onAdd: () => void;
}

@observer
export class CardToolbar extends React.Component<Props, {}> {
  render() {
    const { store, selectedItems } = this.props;
    const count = selectedItems.length;
    if (count > 0) {
      return (
        <FloatingButtons>
          <Button onClick={this.props.onCancel} tone="secondary">
            Cancel
          </Button>
          <Button onClick={this.props.onAdd}>
            {count === 1 ? 'Add item' : `Add ${count} items`}
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
