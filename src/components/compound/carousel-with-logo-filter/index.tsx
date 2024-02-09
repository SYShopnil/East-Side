import { ICarouselWithLogoFilter } from '@src/types/compound';
import { Swiper as LogoSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useViewport } from '@src/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { getStrapiMediaUrl, sectionPaddingClassSelector } from '@src/utils';
import dynamic from 'next/dynamic';
import { ISwiperProps } from '@src/types/root';
const Swiper = dynamic<ISwiperProps>(
  import('@src/components/root/swiper').then((module) => module.default)
);
// 1. by default all logo-menu are gray using opacity-50 except "activeLogo" from useState
// 2. there is no opcatiy but a border on "active-menu"
// 3. clicking on logo-menu update "activeLogo" useState
// 4. if there is no logos ,  the logo section won't be shown

export const CarouselWithLogoFilter = (props: ICarouselWithLogoFilter) => {
  const { container } = useViewport();
  const [isDraggging, setIsDragging] = useState(false);
  const [activeLogo, setActiveLogo] = useState(0);
  const { logos, images, carouselOptions, sectionPadding } = props;

  // slot
  const cardJsx = (card: { image: string; alt: string }) => {
    const { url, alternativeText, width, height } = getStrapiMediaUrl(
      card.image,
      'medium'
    );
    return (
      <div
        className={`container ${sectionPaddingClassSelector(
          sectionPadding?.paddingY
        )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}  `}
      >
        <div className="image-border gradient-border">
          <div className="image-border white-border">
            <Image
              className="lg:scale-[1.015] lg:transition-all lg:group-hover:scale-[1.15] brightness-75 lg:duration-[1500ms]"
              src={url}
              alt={card.alt ? card.alt : alternativeText}
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
              width={width}
              height={height}
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    );
  };

  const SPACE_BETWEEN = {
    sm: 10,
    md: 20,
    lg: 20,
    xl: 40,
  };

  const SHOW_ITEMS = {
    sm: 3,
    md: 4,
    lg: 6,
    xl: 7,
  };
  return (
    <>
      {!!logos && !!logos.length && (
        <div className="container mb-[40px] md:mb-[65px]">
          <LogoSwiper
            spaceBetween={SPACE_BETWEEN[container]}
            slidesPerView={SHOW_ITEMS[container || 'xl']}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                {/* {cardJsx(card)} */}
                <div className="grid place-items-center ">
                  <div
                    onClick={() => setActiveLogo(index)}
                    className={`pb-[10px] ${
                      index === activeLogo
                        ? 'border-b-[4px] opacity-100'
                        : 'opacity-50'
                    }`}
                  >
                    <Image
                      src={'#'}
                      alt="logo"
                      objectFit="cover"
                      objectPosition="top"
                      width={77}
                      height={24}
                      blurDataURL="/assets/blurred.webp"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </LogoSwiper>
        </div>
      )}

      {/* card carousel */}
      <div>
        <Swiper
          {...carouselOptions}
          // slidesPerView={1.5}
          // centeredSlides={true}
          // loop={true}
          // spaceBetween={SPACE_BETWEEN[container]}
          // onTouchStart={() => {
          //   setIsDragging(true);
          // }}
          // onTouchEnd={() => {
          //   setIsDragging(false);
          // }}
        >
          {!!images &&
            !!images.length &&
            images.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`${
                  isDraggging ? 'esc-cursor-dragging' : 'esc-cursor-drag'
                }`}
              >
                {cardJsx(card)}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
