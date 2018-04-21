import * as React from 'react';
import { FormField, TextInput, Checkbox } from '@volst/ui-components';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { debounce } from 'lodash';

interface Props {
  refetch: Function;
}

@observer
export class UserOverviewFilters extends React.Component<Props, {}> {
  debouncedFetch = debounce(this.mapRefetch, 300);

  @observable
  input = {
    search: '',
    isSuper: true,
  };

  handleChange = (name, value) => {
    this.input[name] = value;
    this.debouncedFetch();
  };

  mapRefetch() {
    this.props.refetch({
      where: {
        email_contains: this.input.search,
        isSuper: this.input.isSuper,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <FormField label="Search">
          <TextInput
            name="search"
            value={this.input.search}
            onChange={this.handleChange}
          />
        </FormField>
        <FormField label="">
          <Checkbox
            name="isSuper"
            value={this.input.isSuper}
            onChange={this.handleChange}
            label="Show only superadmins"
          />
        </FormField>
      </React.Fragment>
    );
  }
}
