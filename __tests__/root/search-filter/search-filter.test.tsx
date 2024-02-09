import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { searchFilterConfigs } from './config';
import { SearchFilter } from '@src/components/root';

describe.each(searchFilterConfigs)('Search Filter: %s', (con) => {
  const { tags, isSearch } = con;
  const filter = jest.fn();

  beforeEach(() => {
    render(<SearchFilter tags={tags} isSearch={isSearch} filter={filter} />);
  });

  test('trigger successfully', () => {
    fireEvent.click(screen.queryAllByTestId('search-filter-click').at(0)!);
    fireEvent.click(screen.queryByTestId('search-filter-search-click')!);
    expect(filter).toHaveBeenCalledTimes(2);
  });
});
