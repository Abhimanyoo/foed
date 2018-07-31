import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { Button, Tone, IconDelete, IconEdit } from '@volst/ui-components';
import { TableRow, TableData } from '../../../component/FakeTable';
import { ModalCardItemEdit } from '../../../screen/ModalCardItemEdit';
import { DragHandle } from '../../../component/DragHandle';

interface Props {
  categoryIndex: number;
  index: number;
  item: any;
  form: FormikProps<any>;
  onRemove: () => void;
}

export class CreateFormItemListRow extends React.Component<
  Props,
  { showEdit: boolean }
> {
  state = { showEdit: false };
  render() {
    const { item } = this.props;
    return (
      <TableRow>
        <TableData size={0}>
          <DragHandle />
        </TableData>
        <TableData>{item.name}</TableData>
        <TableData alignRight>
          <Button ghost onClick={() => this.setState({ showEdit: true })}>
            <IconEdit />
          </Button>
          <Button onClick={this.props.onRemove} ghost tone={Tone.Danger}>
            <IconDelete />
          </Button>
        </TableData>
        <ModalCardItemEdit
          visible={this.state.showEdit}
          onClose={() => this.setState({ showEdit: false })}
          form={this.props.form}
          categoryIndex={this.props.categoryIndex}
          itemIndex={this.props.index}
        />
      </TableRow>
    );
  }
}
