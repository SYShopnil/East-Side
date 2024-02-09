import useSWR from 'swr';
import { fetcher } from '@root/apollo-client';
import { EventsQuery } from '@src/query/events';
import {
  ICardList,
  ICardTypeEnum,
  ICarouselBlock,
  IHeroSecondary,
} from '@src/types/compound';
import { IEvents } from '@src/types/pages';
import dynamic from 'next/dynamic';
const HeroSecondary = dynamic<IHeroSecondary>(
  import('@src/components/compound/hero-section/heroSecondary').then(
    (module) => module.HeroSecondary
  )
);
const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);
const CarouselBlock = dynamic<ICarouselBlock>(
  import('@src/components/compound/carousel-block').then(
    (module) => module.CarouselBlock
  )
);
export const Events = ({
  locale = 'en',
  heroProps,
  blogCarouselProps,
}: IEvents) => {
  /* Fetch Upcoming Events */
  const { data: upComingEventsData, error: upComingEventsError } = useSWR(
    EventsQuery(locale, 'upcoming'),
    fetcher
  );

  /* Fetch Past Events */
  const { data: pastEventsData, error: pastEventsError } = useSWR(
    EventsQuery(locale, 'past'),
    fetcher
  );
  return (
    <>
      <section>
        <HeroSecondary {...heroProps} bgType={heroProps.heroSecondaryBgType} />
      </section>
      <section
        className={`mt-[3.125rem] md:mt-[4.6875rem] mb-[4.375rem] md:mb-[6.25rem] md:max-w-[53.375rem] md:mx-auto`}
      >
        <div>
          <CardList
            title="Upcoming Events"
            cardData={upComingEventsData?.events.data}
            cardType={ICardTypeEnum.EVENT}
          />
        </div>
        <div className={`mt-[4.375rem]`}>
          <CardList
            title="Past Events"
            cardData={pastEventsData?.events.data}
            cardType={ICardTypeEnum.EVENT}
          />
        </div>
      </section>
      <section className={`my-[4.375rem] md:my-[6.25rem]`}>
        <CarouselBlock
          cardType="CARD"
          slidersInfo={blogCarouselProps}
          descShowLine={2}
          headingInfo={{
            title:
              'Read our latest articles and insights to stay ahead of what’s happening in the world of ecommerce and Shopify.',
            subTitle: 'from the shopify experts',
            ctaInfo: {
              ctaText: 'eastside co blog hub',
              ctaLink: '/blog',
              showUnderline: true,
              parentBgType: 'default',
            },
          }}
          sliderOptions={{
            haveOffset: true,
            showItems: 'sm_1_2_md_2_lg_2_5_xl_3',
          }}
        />
      </section>
    </>
  );
};
