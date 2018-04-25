import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import {
  Button,
  Tone,
  IconDelete,
  IconEdit,
  TableData,
  TableBody,
  Table,
  TableRow,
} from '@volst/ui-components';
import { CreateFormCategoryAdd } from './CreateFormCategoryAdd';

interface Props {
  form: FormikProps<any>;
}

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
            <Table>
              <TableBody>
                {values.categories.map((category, index) => (
                  <TableRow>
                    <TableData>{category.name}</TableData>
                    <TableData alignRight>
                      <Button ghost>
                        <IconEdit />
                      </Button>
                      <Button
                        onClick={() => arrayHelpers.remove(index)}
                        ghost
                        tone={Tone.Danger}
                      >
                        <IconDelete />
                      </Button>
                    </TableData>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      />
    );
  }
}
