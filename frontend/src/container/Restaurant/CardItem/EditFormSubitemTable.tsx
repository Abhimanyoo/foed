import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray, ArrayHelpers } from 'formik';
import {
  FormField,
  TextInput,
  NumberInput,
  Tone,
  IconDelete,
  Button,
  IconAddCircle,
} from '@volst/ui-components';
import { Table, TableRow, TableData } from '../../../component/FakeTable';
// import { DragHandle } from '../../../component/DragHandle';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { injectGlobal } from 'styled-components';

// Ugly hack necessary because this component is shown in a modal, so the sortable div is rendered below it.
//tslint:disable-next-line
injectGlobal`
  .sortable-helper {
    z-index: 99999;
  }
`;

interface Props {
  form: FormikProps<any>;
  item: any;
  prefix: string;
  type: 'ADDITION' | 'VARIANT';
}

interface SortableListProps {
  items: any[];
  arrayHelpers: ArrayHelpers;
  form: FormikProps<any>;
  type: Props['type'];
  prefix: string;
}

const SortableList = SortableContainer(
  ({ items, form, prefix, type, arrayHelpers }: SortableListProps) => {
    const initialSubitemState = { name: '', price: '', ordering: 0, type };
    return (
      <Table>
        <TableRow>
          <TableData header>Name</TableData>
          <TableData header>Price</TableData>
          <TableData alignRight>
            <Button
              onClick={arrayHelpers.handlePush(initialSubitemState)}
              small
            >
              <IconAddCircle />
            </Button>
          </TableData>
        </TableRow>
        {items.map((subitem, index) => (
          <SortableItem
            key={`item-${index}`}
            item={subitem}
            index={index}
            index2={index}
            onRemove={arrayHelpers.remove}
            form={form}
            prefix={prefix}
            type={type}
          />
        ))}
      </Table>
    );
  }
);

interface SortableItemProps {
  item: any;
  index: number;
  index2: number;
  onRemove: (index: number) => void;
  form: FormikProps<any>;
  type: Props['type'];
  prefix: string;
}

const SortableItem = SortableElement(
  ({ item, index2, type, form, prefix, onRemove }: SortableItemProps) => {
    if (item.type !== type) return <div />;
    return (
      <TableRow>
        <TableData>
          <FormField required noPadding>
            <TextInput
              name={`${prefix}.subitems.${index2}.name`}
              value={item.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </FormField>
        </TableData>
        <TableData>
          <FormField required noPadding>
            <NumberInput
              name={`${prefix}.subitems.${index2}.price`}
              value={item.price}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              prefix="€"
              allowDecimal
              decimalSymbol=","
            />
          </FormField>
        </TableData>
        <TableData alignRight>
          <Button onClick={() => onRemove(index2)} ghost tone={Tone.Danger}>
            <IconDelete />
          </Button>
        </TableData>
      </TableRow>
    );
  }
);

export class CardItemEditFormSubitemTable extends React.Component<Props, {}> {
  render() {
    const { form, prefix, item, type } = this.props;
    return (
      <FieldArray
        name={`${prefix}.subitems`}
        render={arrayHelpers => (
          <SortableList
            items={item.subitems}
            arrayHelpers={arrayHelpers}
            onSortEnd={({ oldIndex, newIndex }) =>
              arrayHelpers.move(oldIndex, newIndex)
            }
            useDragHandle
            form={form}
            type={type}
            prefix={prefix}
            helperClass="sortable-helper"
          />
        )}
      />
    );
  }
}
