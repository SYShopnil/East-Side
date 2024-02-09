import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@root/apollo-client';
import { PodcastsQuery } from '@src/query/podcasts';
import { ICardList, ICardTypeEnum, IHeroSecondary } from '@src/types/compound';
import { IPodcasts } from '@src/types/pages';
import { Pagination } from '@src/components/root/pagination';
import dynamic from 'next/dynamic';
const HeroSecondary = dynamic<IHeroSecondary>(
  import('@src/components/compound/hero-section/heroSecondary').then(
    (module) => module.HeroSecondary
  )
);
const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);

export const Podcasts = ({ locale = 'en', heroProps }: IPodcasts) => {
  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  /* Fetch Cards */
  const { data: cardData, error } = useSWR(
    PodcastsQuery(locale, currentPage, cardsPerPage),
    fetcher
  );
  const totalCards = cardData?.podcasts.meta.pagination.total;

  return (
    <>
      <section>
        <HeroSecondary {...heroProps} bgType={heroProps.heroSecondaryBgType} />
      </section>
      <section className={`section-padding-primary`}>
        <div>
          <CardList
            cardData={cardData?.podcasts.data}
            cardType={ICardTypeEnum.PODCAST}
          />
        </div>
        {totalCards > cardsPerPage && (
          <div className="mt-[3.75rem] md:mt-[5rem]">
            <Pagination
              currentPage={currentPage}
              totalCount={totalCards}
              pageSize={cardsPerPage}
              onPageChange={(page: any) => setCurrentPage(page)}
            />
          </div>
        )}
      </section>
    </>
  );
};
