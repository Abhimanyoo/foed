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
import { injectGlobal } from 'react-emotion';

// Ugly hack necessary because this component is shown in a modal, so the sortable div is rendered below it.
//tslint:disable-next-line
injectGlobal`
  .sortable-helper {
    z-index: 99999;
  }
`;

interface Props {
  form: FormikProps<any>;
  optionGroup: any;
  prefix: string;
}

interface SortableListProps {
  options: any[];
  arrayHelpers: ArrayHelpers;
  form: FormikProps<any>;
  prefix: string;
}

const SortableList = SortableContainer(
  ({ options, form, prefix, arrayHelpers }: SortableListProps) => {
    const initialOptionState = { name: '', price: '', ordering: 0 };
    return (
      <Table>
        <TableRow>
          <TableData header>Name</TableData>
          <TableData header>Price</TableData>
          <TableData alignRight>
            <Button onClick={arrayHelpers.handlePush(initialOptionState)} small>
              <IconAddCircle />
            </Button>
          </TableData>
        </TableRow>
        {options.map((option, index) => (
          <SortableItem
            key={`item-${index}`}
            item={option}
            index={index}
            index2={index}
            onRemove={arrayHelpers.remove}
            form={form}
            prefix={prefix}
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
  prefix: string;
}

const SortableItem = SortableElement(
  ({ item, index2, form, prefix, onRemove }: SortableItemProps) => {
    return (
      <TableRow>
        <TableData>
          <FormField required noPadding>
            <TextInput
              name={`${prefix}.${index2}.name`}
              value={item.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </FormField>
        </TableData>
        <TableData>
          <FormField required noPadding>
            <NumberInput
              name={`${prefix}.${index2}.price`}
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

export class CardItemEditFormOptionList extends React.Component<Props, {}> {
  render() {
    const { form, prefix, optionGroup } = this.props;
    const name = `${prefix}.options`;
    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <SortableList
            options={optionGroup.options}
            arrayHelpers={arrayHelpers}
            onSortEnd={({ oldIndex, newIndex }) =>
              arrayHelpers.move(oldIndex, newIndex)
            }
            useDragHandle
            form={form}
            prefix={name}
            helperClass="sortable-helper"
          />
        )}
      />
    );
  }
}
