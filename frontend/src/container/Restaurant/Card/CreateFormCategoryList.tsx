import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import { Button, Tone, IconDelete, IconEdit } from '@volst/ui-components';
import { Table, TableRow, TableData } from '../../../component/FakeTable';
import { CreateFormCategoryAdd } from './CreateFormCategoryAdd';
import { DragHandle } from '../../../component/DragHandle';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

interface Props {
  form: FormikProps<any>;
}

interface SortableListProps {
  items: any[];
  onRemove: (index: number) => void;
}

const SortableList = SortableContainer(
  ({ items, onRemove }: SortableListProps) => {
    return (
      <Table>
        {items.map((category, index) => (
          <SortableItem
            key={`item-${index}`}
            item={category}
            index={index}
            onRemove={onRemove}
          />
        ))}
      </Table>
    );
  }
);

interface SortableItemProps {
  item: any;
  index: number;
  onRemove: (index: number) => void;
}

const SortableItem = SortableElement(
  ({ item, index, onRemove }: SortableItemProps) => (
    <TableRow>
      <TableData size={0}>
        <DragHandle />
      </TableData>
      <TableData>{item.name}</TableData>
      <TableData alignRight>
        <Button ghost>
          <IconEdit />
        </Button>
        <Button onClick={() => onRemove(index)} ghost tone={Tone.Danger}>
          <IconDelete />
        </Button>
      </TableData>
    </TableRow>
  )
);

export class CreateFormCategoryList extends React.Component<Props, {}> {
  render() {
    const {
      form: { values },
    } = this.props;

    return (
      <FieldArray
        name="categories"
        render={arrayHelpers => (
          <div>
            <CreateFormCategoryAdd onAdd={arrayHelpers.push} />
            <SortableList
              items={values.categories}
              onRemove={arrayHelpers.remove}
              onSortEnd={({ oldIndex, newIndex }) =>
                arrayHelpers.move(oldIndex, newIndex)
              }
              useDragHandle
            />
          </div>
        )}
      />
    );
  }
}
