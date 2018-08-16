import * as React from 'react';
import { FormikProps } from '../../../component/Form';
import { FieldArray, ArrayHelpers } from 'formik';
import {
  FormField,
  TextInput,
  Tone,
  IconDelete,
  Button,
  IconAddCircle,
  Row,
  Col,
  Subheading,
  RadioButtons,
} from '@volst/ui-components';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { injectGlobal } from 'react-emotion';
import { CardItemEditFormOptionList } from './EditFormOptionList';

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
}

interface SortableListProps {
  optionGroups: any[];
  arrayHelpers: ArrayHelpers;
  form: FormikProps<any>;
  prefix: string;
}

const SortableList = SortableContainer(
  ({ optionGroups, form, prefix, arrayHelpers }: SortableListProps) => {
    const initialOptionGroupState = {
      name: '',
      ordering: 0,
      type: 'ADDITION',
      options: [],
    };
    return (
      <div>
        <Row middle="xs">
          <Col xs>
            <Subheading>Option groups</Subheading>
          </Col>
          <Col>
            <Button onClick={arrayHelpers.handlePush(initialOptionGroupState)}>
              <IconAddCircle />
            </Button>
          </Col>
        </Row>
        {optionGroups.map((optionGroup, index) => (
          <SortableItem
            key={`item-${index}`}
            optionGroup={optionGroup}
            index={index}
            index2={index}
            onRemove={arrayHelpers.remove}
            form={form}
            prefix={prefix}
          />
        ))}
      </div>
    );
  }
);

interface SortableItemProps {
  optionGroup: any;
  index: number;
  index2: number;
  onRemove: (index: number) => void;
  form: FormikProps<any>;
  prefix: string;
}

const SortableItem = SortableElement(
  ({ optionGroup, index2, form, prefix, onRemove }: SortableItemProps) => {
    return (
      <div>
        <Row middle="xs">
          <Col xs>
            <FormField required label="Name of option group">
              <TextInput
                name={`${prefix}.${index2}.name`}
                value={optionGroup.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </FormField>
          </Col>
          <Col xs>
            <FormField required label="Type">
              <RadioButtons
                name={`${prefix}.${index2}.type`}
                value={optionGroup.type}
                onChange={form.handleChange}
                options={[
                  {
                    value: 'ADDITION',
                    label: 'Addition',
                  },
                  {
                    value: 'VARIANT',
                    label: 'Variant',
                  },
                ]}
              />
            </FormField>
          </Col>
          <Col>
            <Button onClick={() => onRemove(index2)} ghost tone={Tone.Danger}>
              <IconDelete />
            </Button>
          </Col>
        </Row>
        <CardItemEditFormOptionList
          optionGroup={optionGroup}
          prefix={`${prefix}.${index2}`}
          form={form}
        />
      </div>
    );
  }
);

export class CardItemEditFormOptionGroupList extends React.Component<
  Props,
  {}
> {
  render() {
    const { form, prefix, item } = this.props;
    const name = `${prefix}.optionGroups`;
    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <SortableList
            optionGroups={item.optionGroups}
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
