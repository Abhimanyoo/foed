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
import { ItemProps } from '../../OverviewTable';

const DELETE_USER = gql`
  mutation deleteEmployment($id: ID!) {
    deleteEmployment(where: { id: $id }) {
      id
    }
  }
`;

export class RestaurantUserOverviewItem extends React.Component<ItemProps, {}> {
  handleDelete = mutate => {
    const { model } = this.props;
    confirm({
      title: `Do you want to delete ${model.user.email}?`,
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
          {model.user.inviteAccepted ? (
            model.user.name
          ) : (
            <InlineText italic>Invite pending</InlineText>
          )}
        </TableData>
        <TableData>{model.user.email}</TableData>
        <TableData>{model.permission}</TableData>
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
