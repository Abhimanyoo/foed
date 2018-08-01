import * as React from 'react';
import {
  Button,
  IconDelete,
  Tone,
  IconEdit,
  TableRow,
  TableData,
  Link,
  InlineText,
  confirm,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ItemProps } from '../OverviewTable';

const DELETE_ORGANIZATION = gql`
  mutation deleteOrganization($id: ID!) {
    deleteOrganization(where: { id: $id }) {
      id
    }
  }
`;

export class OrganizationOverviewItem extends React.Component<ItemProps, {}> {
  handleDelete = mutate => {
    const { model } = this.props;
    confirm({
      title: `Do you want to delete ${model.name}?`,
      okText: 'Delete',
      okTone: Tone.Danger,
      cancelText: 'Nope',
      onOk: () =>
        mutate({ variables: { id: model.id } }).then(() =>
          this.props.refetch()
        ),
    });
  };

  render() {
    const { model } = this.props;
    return (
      <TableRow>
        <TableData>
          <InlineText bold>
            <Link to={`/organization/${model.id}`} link>
              {model.name}
            </Link>
          </InlineText>
        </TableData>
        <TableData>0</TableData>
        <TableData>{model.visible ? 'Visible' : 'Hidden'}</TableData>
        <TableData alignRight>
          <Link to={`/organization/${model.id}/settings`} ghost>
            <IconEdit />
          </Link>
          <Mutation mutation={DELETE_ORGANIZATION}>
            {mutate => (
              <Button
                onClick={() => this.handleDelete(mutate)}
                ghost
                tone={Tone.Danger}
              >
                <IconDelete />
              </Button>
            )}
          </Mutation>
        </TableData>
      </TableRow>
    );
  }
}
