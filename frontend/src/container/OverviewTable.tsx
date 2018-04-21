import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
} from '@volst/ui-components';

export interface ItemProps {
  key?: any;
  model: any;
  refetch: Function;
}

export interface Props {
  data: any;
  name: string;
  item: (props: ItemProps) => React.ReactNode;
  headings: string[];
  refetch: Function;
}

@observer
export class OverviewTable extends React.Component<Props> {
  renderItem = model => {
    return this.props.item({
      key: model.id,
      model: model,
      refetch: this.props.refetch,
    });
  };

  renderHeading = heading => {
    return <TableHeader key={heading}>{heading}</TableHeader>;
  };

  render() {
    const { data, name, headings } = this.props;
    const store = data[name];
    if (data.loading) {
      return <span>Loading...</span>;
    }

    return (
      <Table>
        <TableHead>
          <TableRow>
            {headings.map(this.renderHeading)}
            <TableHeader />
          </TableRow>
        </TableHead>
        <TableBody>{store && store.map(this.renderItem)}</TableBody>
      </Table>
    );
  }
}
