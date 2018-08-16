import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { Button, Tone, IconDelete, IconEdit } from '@volst/ui-components';
import { TableRow, TableData } from '../../../component/FakeTable';
import { ModalCardCategoryEdit } from '../../../screen/ModalCardCategoryEdit';
import { DragHandle } from '../../../component/DragHandle';

interface Props {
  index: number;
  category: any;
  form: FormikProps<any>;
  onRemove: () => void;
}

export class CreateFormCategoryListRow extends React.Component<
  Props,
  { showEdit: boolean }
> {
  state = { showEdit: false };
  render() {
    const { category } = this.props;
    return (
      <TableRow>
        <TableData size={0}>
          <DragHandle />
        </TableData>
        <TableData>{category.name}</TableData>
        <TableData alignRight>
          <Button ghost onClick={() => this.setState({ showEdit: true })}>
            <IconEdit />
          </Button>
          <Button onClick={this.props.onRemove} ghost tone={Tone.Danger}>
            <IconDelete />
          </Button>
        </TableData>
        <ModalCardCategoryEdit
          visible={this.state.showEdit}
          onClose={() => this.setState({ showEdit: false })}
          form={this.props.form}
          index={this.props.index}
        />
      </TableRow>
    );
  }
}
