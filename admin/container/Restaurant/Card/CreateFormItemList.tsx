import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import { Table } from '../../../component/FakeTable';
import { CreateFormItemAdd } from './CreateFormItemAdd';
import { CreateFormItemListRow } from './CreateFormItemListRow';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { sortByOrdering, handleNewSort } from 'utils/sort';

interface Props {
  categoryIndex: number;
  form: FormikProps<any>;
}

interface SortableListProps {
  items: any[];
  onRemove: (index: number) => void;
  form: FormikProps<any>;
  categoryIndex: number;
}

const SortableList = SortableContainer(
  ({ items, form, onRemove, categoryIndex }: SortableListProps) => {
    return (
      <Table>
        {sortByOrdering(items).map((item, index) => (
          <SortableItem
            key={`item-${index}`}
            item={item}
            index={index}
            index2={index}
            form={form}
            categoryIndex={categoryIndex}
            onRemove={onRemove}
          />
        ))}
      </Table>
    );
  }
);

interface SortableItemProps {
  item: any;
  // Apparently react-sortable-hoc filters out the `index` prop so we can't use that one.
  index2: number;
  onRemove: (index: number) => void;
  form: FormikProps<any>;
  categoryIndex: number;
}

const SortableItem = SortableElement(
  ({ item, index2, form, categoryIndex, onRemove }: SortableItemProps) => (
    <CreateFormItemListRow
      item={item}
      index={index2}
      form={form}
      categoryIndex={categoryIndex}
      onRemove={() => onRemove(index2)}
    />
  )
);

export class CreateFormItemList extends React.Component<Props, {}> {
  render() {
    const { categoryIndex, form } = this.props;
    const items = form.values.categories[categoryIndex].items;
    const name = `categories.${categoryIndex}.items`;

    return (
      <FieldArray
        name={`categories.${categoryIndex}.items`}
        render={arrayHelpers => (
          <div>
            <CreateFormItemAdd onAdd={arrayHelpers.push} />
            <SortableList
              items={items}
              onRemove={arrayHelpers.remove}
              onSortEnd={({ oldIndex, newIndex }) =>
                handleNewSort(form, name, oldIndex, newIndex)
              }
              useDragHandle
              form={form}
              categoryIndex={categoryIndex}
            />
          </div>
        )}
      />
    );
  }
}
