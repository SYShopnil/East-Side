// External Imports
import React, { useState, useEffect, useMemo } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// Internal Imports
import { useIsBrowser, useViewport } from '@src/hooks';
import { breakpoints } from '@src/themes/breakpoints';
import { ISwiperProps } from '@src/types/root';
import { findShowItems, findSpaceBetween } from './utils';
import Styles from './index.module.scss';

// Inject Autoplay, Pagination
SwiperCore.use([Autoplay, Pagination]);

// default values
const AUTOPLAY_DELAY = 4; // in seconds;

const Carousel = ({
  vertical = false,
  autoItemCount = false,
  children,
  isLoop = false,
  isCenter = false,
  autoPlay = false,
  pauseOnHover = false,
  haveOffset = false,
  showBleeding = false,
  showPagination = false,
  activeItemIndex,
  onUpdateActiveIndex,
  spaceBetween,
  showItems,
  className = '',
  noMargin = false,
  speed = 800,
}: ISwiperProps): JSX.Element | null => {
  const [swiperData, setSwiperData] = useState<any>(null);
  const { width, container } = useViewport();
  const isBrowser = useIsBrowser();

  const [isDraggging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!swiperData) return;
    swiperData.slideTo(activeItemIndex, 800);
  }, [activeItemIndex, swiperData]);

  const containerOffset = useMemo(
    () => (width - breakpoints[container]) / 2,
    [container, width]
  );

  let itemShowed = findShowItems(showItems)[container || 'xl'];

  if (showBleeding) itemShowed = itemShowed + 0.2;

  // containerDefaultPaddingX - .5rem(8px)
  const containerDefaultPaddingX: number = 8;

  const offset: number | string =
    containerOffset > 0 ? containerOffset + containerDefaultPaddingX : `2rem`;

  const autoplaySettings: any = {
    delay: AUTOPLAY_DELAY * 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: pauseOnHover,
  };
  const paginationSettings: any = {
    type: 'progressbar',
  };

  if (!isBrowser) return null;

  let style = {};
  if (haveOffset) style = { paddingLeft: offset, paddingRight: offset };
  if (noMargin) style = { marginLeft: 0, marginRight: 0 };

  //Space Between
  const SPACE_BETWEEN = findSpaceBetween(
    spaceBetween === 'zero' ? 0 : spaceBetween === 'ten' ? 10 : 20
  );
  return (
    <div
      className={`${Styles['swiper-main-wrapper']}  ${
        isDraggging ? Styles['cursor-dragging'] : Styles['cursor-drag']
      }`}
    >
      <Swiper
        speed={Number(speed)}
        direction={vertical ? 'vertical' : 'horizontal'}
        spaceBetween={SPACE_BETWEEN[container]}
        slidesPerView={autoItemCount ? 'auto' : itemShowed}
        onSwiper={setSwiperData}
        style={style}
        loop={isLoop}
        autoplay={autoPlay && autoplaySettings}
        centeredSlides={isCenter}
        onTouchStart={() => {
          setIsDragging(true);
        }}
        onTouchEnd={() => {
          setIsDragging(false);
        }}
        onSlideChange={(swiperRef: any): void => {
          if (onUpdateActiveIndex) {
            onUpdateActiveIndex(swiperRef.activeIndex);
          }
        }}
        pagination={showPagination && paginationSettings}
        className={`${Styles['swiper-container']} relative ${className}`}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
