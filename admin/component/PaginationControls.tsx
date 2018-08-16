import * as React from 'react';
import { PaginationControls as UIPaginationControls } from '@volst/ui-components';
import { PER_PAGE } from '../utils/query';
import R from '../routes';

interface Props {
  query: { page?: string };
  connection?: { aggregate: { count: number } };
}

export class PaginationControls extends React.Component<Props, object> {
  getPage = () => {
    return parseInt(this.props.query.page || '1');
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
    R.Router.push(`${window.location.pathname}?page=${newPage}`);
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
