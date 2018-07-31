import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import { Table } from '../../../component/FakeTable';
import { CreateFormCategoryAdd } from './CreateFormCategoryAdd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { CreateFormCategoryListRow } from './CreateFormCategoryListRow';

interface Props {
  form: FormikProps<any>;
}

interface SortableListProps {
  items: any[];
  onRemove: (index: number) => void;
  form: FormikProps<any>;
}

const SortableList = SortableContainer(
  ({ items, form, onRemove }: SortableListProps) => {
    return (
      <Table>
        {items.map((category, index) => (
          <SortableItem
            key={`item-${index}`}
            item={category}
            index={index}
            index2={index}
            form={form}
            onRemove={onRemove}
          />
        ))}
      </Table>
    );
  }
);

interface SortableItemProps {
  item: any;
  index2: number;
  onRemove: (index: number) => void;
  form: FormikProps<any>;
}

const SortableItem = SortableElement(
  ({ item, index2, form, onRemove }: SortableItemProps) => (
    <CreateFormCategoryListRow
      category={item}
      index={index2}
      form={form}
      onRemove={() => onRemove(index2)}
    />
  )
);

export class CreateFormCategoryList extends React.Component<Props, {}> {
  render() {
    const { form } = this.props;

    return (
      <FieldArray
        name="categories"
        render={arrayHelpers => (
          <div>
            <CreateFormCategoryAdd onAdd={arrayHelpers.push} />
            <SortableList
              items={form.values.categories}
              onRemove={arrayHelpers.remove}
              form={form}
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
