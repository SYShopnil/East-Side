import { Pagination } from '@src/components/root';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { paginationConfigs } from './config';

// import Pagination from '@src/components/root/pagination';

describe.each(paginationConfigs)('Pagination Config : %s', (con) => {
  const { data, pagination: { currentPage, pageSize, totalCount } = {} } = con;

  const setCurrentPage = jest.fn();

  beforeEach(() => {
    render(
      <Pagination
        currentPage={currentPage!}
        totalCount={totalCount!}
        pageSize={pageSize!}
        onPageChange={setCurrentPage}
      />
    );
  });

  test('triggers prev and next button as expected', () => {
    fireEvent.click(screen.queryByTestId('pagination-next-button')!);
    fireEvent.click(screen.queryByTestId('pagination-prev-button')!);
    expect(setCurrentPage).toHaveBeenCalledTimes(2);
  });
});
