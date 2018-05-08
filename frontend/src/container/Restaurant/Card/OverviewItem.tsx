import * as React from 'react';
import {
  Button,
  IconDelete,
  Tone,
  IconLoyalty,
  Tooltip,
  confirm,
  Link,
  IconEdit,
} from '@volst/ui-components';
import { TableRow, TableData } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ItemProps } from '../../OverviewTable';

const DELETE_CARD = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(where: { id: $id }) {
      id
    }
  }
`;

const PROMOTE_CARD = gql`
  mutation promoteCard($restaurantId: ID!, $data: RestaurantUpdateInput!) {
    updateRestaurant(where: { id: $restaurantId }, data: $data) {
      id
    }
  }
`;

interface MyItemProps extends ItemProps {
  restaurantId: string;
}

export class RestaurantCardOverviewItem extends React.Component<
  MyItemProps,
  {}
> {
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

  handlePromote = async mutate => {
    const { model, restaurantId } = this.props;
    await mutate({
      variables: {
        restaurantId,
        data: {
          activeCard: { connect: { id: model.id } },
        },
      },
    });
    this.props.refetch();
  };

  render() {
    const { model, restaurantId } = this.props;
    return (
      <TableRow highlight={!!model.activeRestaurant}>
        <TableData>{model.name}</TableData>
        <TableData alignRight>
          <Link to={`/restaurant/${restaurantId}/card/${model.id}/edit`} ghost>
            <IconEdit />
          </Link>
          <Mutation mutation={PROMOTE_CARD}>
            {mutate => (
              <Tooltip message="Promote to active menu" direction="bottomLeft">
                <Button
                  ghost
                  tone={Tone.Success}
                  onClick={() => this.handlePromote(mutate)}
                >
                  <IconLoyalty />
                </Button>
              </Tooltip>
            )}
          </Mutation>{' '}
          <Mutation mutation={DELETE_CARD}>
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
