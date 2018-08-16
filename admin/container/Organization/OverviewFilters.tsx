import * as React from 'react';
import { FormField, TextInput } from '@volst/ui-components';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { debounce } from 'lodash';

interface Props {
  refetch: Function;
}

@observer
export class OrganizationOverviewFilters extends React.Component<Props, {}> {
  debouncedFetch = debounce(this.mapRefetch, 300);

  @observable
  input = {
    search: '',
  };

  handleChange = (name, value) => {
    this.input[name] = value;
    this.debouncedFetch();
  };

  mapRefetch() {
    this.props.refetch({
      where: {
        name_contains: this.input.search,
      },
    });
  }

  render() {
    return (
      <FormField label="Search">
        <TextInput
          name="search"
          value={this.input.search}
          onChange={(_name, value) => this.handleChange('search', value)}
        />
      </FormField>
    );
  }
}
