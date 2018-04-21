import * as React from 'react';
import { PaginationControls as UIPaginationControls } from '@volst/ui-components';
import { PER_PAGE } from '../utils/query';
import * as H from 'history';

interface Props {
  history: H.History;
  location: H.Location;
  connection?: { aggregate: { count: number } };
}

export class PaginationControls extends React.Component<Props, object> {
  getPage = () => {
    const search = new URLSearchParams(this.props.location.search);
    return parseInt(search.get('page') || '1');
  };

  handlePrevious = () => {
    const newPage = this.getPage() - 1;
    if (newPage > 0) {
      this.goToPage(newPage);
    }
  };

  handleNext = () => {
    this.goToPage(this.getPage() + 1);
  };

  goToPage = newPage => {
    this.props.history.push(`${this.props.location.pathname}?page=${newPage}`);
  };

  render() {
    // TODO: unfortunately getting the count of items is a bit difficult in GraphQL,
    // so skipping that part for now. The Relay API has a good standard for this.
    const { connection } = this.props;
    const totalItems = connection ? connection.aggregate.count : 0;
    const page = this.getPage();
    const totalPages = Math.ceil(totalItems / PER_PAGE);

    const hasPreviousPage = page > 1;
    const hasNextPage = page + 1 <= totalPages;
    return (
      <UIPaginationControls
        currentPage={page}
        totalPages={totalPages}
        handleNext={this.handleNext}
        handlePrevious={this.handlePrevious}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        previousText="Previous"
        ofText="/"
        nextText="Next"
      />
    );
  }
}
