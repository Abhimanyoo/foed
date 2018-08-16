import * as React from 'react';
import { FormikProps } from 'component/Form';
import { Modal, Button } from '@volst/ui-components';
import { RestaurantCardCategoryEditForm } from 'container/Restaurant/CardCategory/EditForm';

interface Props {
  visible: boolean;
  onClose: () => void;
  form: FormikProps<any>;
  index: number;
}

export class ModalCardCategoryEdit extends React.Component<Props, {}> {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        onClose={this.props.onClose}
        title="Edit a menu category"
        footer={
          <React.Fragment>
            <Button onClick={this.props.onClose}>Done</Button>
          </React.Fragment>
        }
        theme={{} as any}
      >
        <RestaurantCardCategoryEditForm
          form={this.props.form}
          index={this.props.index}
        />
      </Modal>
    );
  }
}
