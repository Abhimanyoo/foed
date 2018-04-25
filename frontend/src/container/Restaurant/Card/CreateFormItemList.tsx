import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import { TableBody, Table } from '@volst/ui-components';
import { CreateFormItemAdd } from './CreateFormItemAdd';
import { CreateFormItemListRow } from './CreateFormItemListRow';

interface Props {
  categoryIndex: number;
  form: FormikProps<any>;
}

export class CreateFormItemList extends React.Component<Props, {}> {
  render() {
    const { categoryIndex, form } = this.props;

    return (
      <FieldArray
        name={`categories.${categoryIndex}.items`}
        render={arrayHelpers => (
          <div>
            <CreateFormItemAdd onAdd={arrayHelpers.push} />
            <Table>
              <TableBody>
                {form.values.categories[categoryIndex].items.map(
                  (item, index) => (
                    <CreateFormItemListRow
                      item={item}
                      index={index}
                      form={form}
                      categoryIndex={categoryIndex}
                      onRemove={() => arrayHelpers.remove(index)}
                    />
                  )
                )}
              </TableBody>
            </Table>
          </div>
        )}
      />
    );
  }
}
