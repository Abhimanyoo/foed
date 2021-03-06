import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import {
  FormField,
  TextInput,
  NumberInput,
  TextArea,
} from '@volst/ui-components';
import { CardItemEditFormOptionGroupList } from './EditFormOptionGroupList';

interface Props {
  form: FormikProps<any>;
  categoryIndex: number;
  itemIndex: number;
}

export class RestaurantCardItemEditForm extends React.Component<Props, {}> {
  render() {
    const { form, categoryIndex, itemIndex } = this.props;
    const myValues = form.values.categories[categoryIndex].items[itemIndex];
    const prefix = `categories.${categoryIndex}.items.${itemIndex}`;
    return (
      <div>
        <FormField label="Name" required>
          <TextInput
            name={`${prefix}.name`}
            value={myValues.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </FormField>
        <FormField label="Description">
          <TextArea
            name={`${prefix}.description`}
            value={myValues.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            autoSize
            rows={2}
            maxRows={10}
          />
        </FormField>
        <FormField label="Price" required>
          <NumberInput
            name={`${prefix}.price`}
            value={myValues.price}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            prefix="€"
            allowDecimal
            decimalSymbol=","
          />
        </FormField>
        <CardItemEditFormOptionGroupList
          form={form}
          prefix={prefix}
          item={myValues}
        />
      </div>
    );
  }
}
