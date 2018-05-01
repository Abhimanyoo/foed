import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray } from 'formik';
import {
  FormField,
  TextInput,
  NumberInput,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableData,
  TableHead,
  Tone,
  IconDelete,
  Button,
  IconAddCircle,
} from '@volst/ui-components';

interface Props {
  form: FormikProps<any>;
  item: any;
  prefix: string;
  type: 'ADDITION' | 'VARIANT';
}

export class CardItemEditFormSubitemTable extends React.Component<Props, {}> {
  render() {
    const { form, prefix, item, type } = this.props;
    const initialSubitemState = { name: '', price: 0, ordering: 0, type };
    return (
      <FieldArray
        name={`${prefix}.subitems`}
        render={arrayHelpers => (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader alignRight>
                  <Button
                    onClick={arrayHelpers.handlePush(initialSubitemState)}
                    small
                  >
                    <IconAddCircle />
                  </Button>
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.subitems.map((subitem, index) => {
                if (subitem.type !== type) return;
                return (
                  <TableRow key={index}>
                    <TableData>
                      <FormField required>
                        <TextInput
                          name={`${prefix}.subitems.${index}.name`}
                          value={subitem.name}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </FormField>
                    </TableData>
                    <TableData>
                      <FormField required>
                        <NumberInput
                          name={`${prefix}.subitems.${index}.price`}
                          value={subitem.price}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          prefix="€"
                          allowDecimal
                          decimalSymbol=","
                        />
                      </FormField>
                    </TableData>
                    <TableData alignRight>
                      <Button
                        onClick={() => arrayHelpers.remove(index)}
                        ghost
                        tone={Tone.Danger}
                      >
                        <IconDelete />
                      </Button>
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      />
    );
  }
}
