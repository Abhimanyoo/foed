import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FormField, TextInput, TextArea } from '@volst/ui-components';

interface Props {
  form: FormikProps<any>;
  index: number;
}

export class RestaurantCardCategoryEditForm extends React.Component<Props, {}> {
  render() {
    const { form, index } = this.props;
    const myValues = form.values.categories[index];
    const prefix = `categories.${index}`;
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
      </div>
    );
  }
}
