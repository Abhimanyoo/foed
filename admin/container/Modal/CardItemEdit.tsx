import * as React from 'react';
import { FormikProps } from 'component/Form';
import { Modal, Button } from '@volst/ui-components';
import { RestaurantCardItemEditForm } from 'container/Restaurant/CardItem/EditForm';

interface Props {
  visible: boolean;
  onClose: () => void;
  form: FormikProps<any>;
  categoryIndex: number;
  itemIndex: number;
}

export class ModalCardItemEdit extends React.Component<Props, {}> {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        onClose={this.props.onClose}
        title="Edit a menu item"
        footer={
          <React.Fragment>
            <Button onClick={this.props.onClose}>Done</Button>
          </React.Fragment>
        }
      >
        <RestaurantCardItemEditForm
          form={this.props.form}
          categoryIndex={this.props.categoryIndex}
          itemIndex={this.props.itemIndex}
        />
      </Modal>
    );
  }
}
