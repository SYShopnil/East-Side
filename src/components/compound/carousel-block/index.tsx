// Internal Imports
import { ICarouselBlock } from '@src/types/compound';
import { SwiperSlide as SwiperItem } from 'swiper/react';
import { SectionHeading } from '@src/components/compound/section-heading';
import { sectionPaddingClassSelector } from '@src/utils/sectionPaddingClassSelector';
import { cardSelector } from './card-selector';
import dynamic from 'next/dynamic';
import { ISwiperProps } from '@src/types/root';

const Swiper = dynamic<ISwiperProps>(
  import('@src/components/root').then((module) => module.Swiper)
);
// CarouselBlock
export const CarouselBlock = ({
  sectionPadding,
  headingInfo,
  slidersInfo,
  sliderOptions,
  cardType,
  descShowLine,
  isBigCard,
  caseStudyCategory,
}: ICarouselBlock) => {
  return (
    <div
      className={`${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      {headingInfo && (headingInfo.title || headingInfo.subTitle) && (
        <div className="container mb-[1.875rem] lg:mb-[3.125rem]">
          {!!slidersInfo && !!slidersInfo.length && (
            <SectionHeading {...headingInfo} />
          )}
        </div>
      )}
      {!!slidersInfo && !!slidersInfo.length && (
        <Swiper {...sliderOptions}>
          {slidersInfo.map((info, index) => (
            <SwiperItem key={index}>
              {cardSelector(
                info.attributes,
                cardType,
                descShowLine,
                isBigCard,
                caseStudyCategory
              )}
            </SwiperItem>
          ))}
        </Swiper>
      )}
    </div>
  );
};
