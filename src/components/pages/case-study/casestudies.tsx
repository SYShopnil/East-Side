import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@root/apollo-client';
import {
  CaseStudyListQuery,
  CaseStudyTagsQuery,
  FeaturedCaseStudyQuery,
} from '@src/query/case-study';
import { ICardList, ICardTypeEnum, IHeroSecondary } from '@src/types/compound';
import { ICaseStudyList } from '@src/types/pages';
import { FeaturedCaseStudyCards } from './featured-case-study-cards';
import dynamic from 'next/dynamic';
import { IPagination, ISearchFilter } from '@src/types/root';
import NotFoundData from '@src/components/root/not-found';

const SearchFilter = dynamic<ISearchFilter>(
  import('@src/components/root/search-filter').then(
    (module) => module.SearchFilter
  )
);
const Pagination = dynamic<IPagination>(
  import('@src/components/root/pagination').then((module) => module.Pagination)
);
const HeroSecondary = dynamic<IHeroSecondary>(
  import('@src/components/compound/hero-section/heroSecondary').then(
    (module) => module.HeroSecondary
  )
);
const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);
const CaseStudyList = ({ locale = 'en', heroProps }: ICaseStudyList) => {
  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  /* Filter */
  const [filterText, setFilterText] = useState('');

  /* Fetch Cards */
  const { data: cardData, error: caseStudyError } = useSWR(
    CaseStudyListQuery(locale, currentPage, cardsPerPage, filterText),
    fetcher
  );

  /* Fetch Featured Cards */
  const { data: featuredCardData, error: featuredCardError } = useSWR(
    FeaturedCaseStudyQuery(locale),
    fetcher
  );

  /* Fetch Tags */
  const { data: tagsData, error: tagsError } = useSWR(
    CaseStudyTagsQuery(locale),
    fetcher
  );

  /* Tags for Filter */
  const allTags = [{ id: 0, attributes: { tag: 'all' } }];
  tagsData?.caseStudyCategories.data.map((ele: any, ind: number) => {
    allTags.push(ele);
  });

  return (
    <>
      <section>
        <HeroSecondary {...heroProps} bgType={heroProps.heroSecondaryBgType} />
      </section>
      {!!featuredCardData?.caseStudyLists.data.length && (
        <section>
          <FeaturedCaseStudyCards
            cardList={featuredCardData?.caseStudyLists.data}
            isOverlappedWithHero={true}
          />
        </section>
      )}
      {!!cardData?.caseStudyLists.data.length ? (
        <section>
          <div className="container mt-[2.625rem] mb-[1.5rem] md:my-[3.75rem]">
            <SearchFilter
              tags={allTags}
              filterHandler={(filterText: string) => {
                setFilterText(filterText);
                setCurrentPage(1);
              }}
              isSearch={false}
            />
          </div>
          <div>
            <CardList
              cardData={cardData?.caseStudyLists.data}
              cardType={ICardTypeEnum.CASE_STUDY}
            />
          </div>
          <div className="my-[3.75rem] md:my-[5rem]">
            <Pagination
              currentPage={currentPage}
              totalCount={cardData?.caseStudyLists.meta.pagination.total}
              pageSize={cardsPerPage}
              onPageChange={(page: any) => setCurrentPage(page)}
            />
          </div>
        </section>
      ) : (
        <NotFoundData />
      )}
    </>
  );
};

export default CaseStudyList;
