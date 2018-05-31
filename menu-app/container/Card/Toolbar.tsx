import * as React from 'react';
import { Button } from '../../component/Button';
import { FloatingButtons } from '../../component/FloatingButtons';
import { observer } from 'mobx-react';

interface Props {
  selectedItem: any;
  store: any;
  onCancel: () => void;
  onAdd: () => void;
  onFinish: () => void;
}

@observer
export class CardToolbar extends React.Component<Props, {}> {
  render() {
    const { store, selectedItem } = this.props;
    if (selectedItem) {
      return (
        <FloatingButtons>
          <Button onClick={this.props.onCancel} tone="secondary">
            Cancel
          </Button>
          <Button onClick={this.props.onAdd}>Add item</Button>
        </FloatingButtons>
      );
    }
    if (store.order.items.length > 0) {
      return (
        <FloatingButtons>
          <Button onClick={this.props.onFinish}>Finish order</Button>
        </FloatingButtons>
      );
    }
    return null;
  }
}
