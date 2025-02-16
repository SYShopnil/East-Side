import { usePagination } from '@src/hooks';
import { DOTS } from '@src/hooks/pagination';
import { IPagination } from '@src/types/root';

export const Pagination = (props: IPagination) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (!!paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage =
    !!paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <>
      {!!paginationRange && (
        <ul className={`flex items-center justify-center gap-[11px] list-none`}>
          <li
            className={`box-border flex items-center justify-center cursor-pointer  ${
              currentPage === 1 ? 'pointer-events-none' : null
            }`}
            onClick={onPrevious}
            data-testid="pagination-prev-button"
          >
            <div
              className={`border-[#212121]  border-t border-r inline-block h-2 relative w-2 rotate-[-135deg] ${
                currentPage === 1
                  ? 'border-r-[#0000006e] border-t-[#0000006e]'
                  : null
              }`}
            />
          </li>
          {paginationRange.map((pageNumber, i) => {
            if (pageNumber === DOTS) {
              return (
                <li
                  key={i}
                  className={`box-border flex items-center justify-center text-[#212121] text-[13px] font-[600] leading-[20px] tracking-[1px] hover:cursor-default `}
                >
                  ...
                </li>
              );
            }

            return (
              <li
                key={i}
                className={`box-border flex items-center justify-center text-[#212121] h-[25px] w-[25px] rounded-full bg-white hover:bg-gradient-to-r hover:from-[#00D855] hover:to-[#2BB8E4] cursor-pointer  text-[13px] leading-[20px] tracking-[1px] ${
                  pageNumber === currentPage
                    ? 'text-[18px] font-[600] leading-[27px] h-[35px] w-[35px]  bg-gradient-to-r from-[#00D855] to-[#2BB8E4] '
                    : null
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          <li
            className={` box-border flex items-center justify-center cursor-pointer ${
              currentPage === lastPage ? 'pointer-events-none' : null
            }`}
            data-testid="pagination-next-button"
            onClick={onNext}
          >
            <div
              className={`border-[#212121]  border-t border-r inline-block h-2 relative w-2 rotate-[45deg] ${
                currentPage === lastPage
                  ? 'border-r-[#0000006e] border-t-[#0000006e]'
                  : null
              }`}
            />
          </li>
        </ul>
      )}
    </>
  );
};
