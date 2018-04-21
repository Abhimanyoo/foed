import * as React from 'react';
import {
  Button,
  IconDelete,
  InlineText,
  Tone,
  TableRow,
  TableData,
  confirm,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ItemProps } from '../OverviewTable';

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(where: { id: $id }) {
      id
    }
  }
`;

export class UserOverviewItem extends React.Component<ItemProps, {}> {
  handleDelete = mutate => {
    const { model } = this.props;
    confirm({
      title: `Do you want to delete ${model.email}?`,
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
          {model.inviteAccepted ? (
            model.name
          ) : (
            <InlineText italic>Invite pending</InlineText>
          )}
        </TableData>
        <TableData>{model.email}</TableData>
        <TableData>
          {model.employments.map(r => r.restaurant.name).join(', ')}
        </TableData>
        <TableData alignRight>
          <Mutation mutation={DELETE_USER}>
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
