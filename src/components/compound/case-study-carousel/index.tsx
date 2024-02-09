import { ICaseStudyCarousel } from '@src/types/compound';
import { CaseStudyCard } from '@src/components/root/case-study-card';
import { SwiperSlide as SwiperItem } from 'swiper/react';
import dynamic from 'next/dynamic';
import { ISwiperProps } from '@src/types/root';

const Swiper = dynamic<ISwiperProps>(
  import('@src/components/root').then((module) => module.Swiper)
);
export const CaseStudyCarousel = ({
  bgType,
  carouselCards,
  isFullHeight,
}: ICaseStudyCarousel) => {
  return (
    <Swiper showItems={'sm_1_1_md_1_5_lg_2_25_xl_3_25'}>
      {carouselCards.map((card, index) => (
        <SwiperItem key={index}>
          <CaseStudyCard
            {...card}
            parentBgType={bgType}
            fullHeight={isFullHeight}
          />
        </SwiperItem>
      ))}
    </Swiper>
  );
};
