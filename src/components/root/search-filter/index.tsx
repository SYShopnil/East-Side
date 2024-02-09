import { ISearchFilter } from '@src/types/root';
import React, { useDeferredValue, useState } from 'react';
import { RightArrowIcon, SearchIcon } from '../icons';

export const SearchFilter = (props: ISearchFilter) => {
  const { tags, filterHandler, searchHandler, isSearch } = props;

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  // const [filterValue, setFilterValue] = useState('');

  const deferredSearch = useDeferredValue(searchTerm);
  // const deferredFilter = useDeferredValue(filterValue);

  const triggerSearch = () => {
    !!searchHandler && searchHandler(deferredSearch);
    setSearchTerm('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch();
  };
  return (
    <div className="flex flex-col lg:flex-row gap-[30px]">
      {/* first item */}
      <div
        className="flex items-center justify-between border border-[#BCB7B7] px-[19px] py-[10px] rounded-[4px] bg-white lg:hidden"
        onClick={() => setShow(!show)}
      >
        <span className="font-[600] text-[14px] leading-[21px]">{'All'}</span>
        <span className={` ${!show ? 'rotate-45' : 'rotate-90'}`}>
          <RightArrowIcon iconFill="#000" iconType="normal" />
        </span>
      </div>
      {!!tags &&
        !!tags.length &&
        tags.map(({ id, attributes }, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setActive(i);
                filterHandler(attributes.tag === 'all' ? '' : attributes.tag);
                setShow(!show);
              }}
              className={`border-br border-[#BCB7B7]] capitalize ${
                !show ? 'hidden' : null
              } lg:block`}
              data-testid="search-filter-click"
            >
              {/* {title} */}
              <span
                className={`text-[16px] leading-[24px] cursor-pointer  ${
                  i === active ? 'font-[600] border-b-2 pb-[7px]' : null
                }`}
              >
                {attributes.tag}
              </span>
            </div>
          );
        })}

      {/* search box */}
      {isSearch && (
        <div className="flex items-center justify-between lg:gap-[85px] border-[#212121]/[0.1]  pb-[25px] border-b lg:ml-auto mt-[12px] lg:mt-0">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles"
              className="focus:outline-none placeholder:text-[#212121] placeholder:uppercase placeholder:text-[12px] placeholder:leading-[16px] placeholder:tracking-[0.2em] bg-transparent"
              onKeyDown={(e: React.KeyboardEvent<Element>) => {
                if (e.key == 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
          </form>
          <span
            className="cursor-pointer"
            onClick={triggerSearch}
            data-testid="search-filter-search-click"
          >
            <SearchIcon />
          </span>
        </div>
      )}
    </div>
  );
};
