import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IHeroPrimary } from '@src/types/compound';
import { RedirectButton } from '@src/components/root/button/redirect-button';
import { fontColorSelector } from '@src/utils';
import { getStrapiMediaUrl } from '@src/utils/strapi';
import Styles from './index.module.css';
// import Styles from './testIndex.module.css';

export const HeroPrimary = ({
  bgType,
  contentWidth,
  title,
  subTitle,
  subText,
  backgroundImageUrl,
  logos,
  redirectButton,
  footerAddress,
}: IHeroPrimary) => {
  /* Handle Moving Gradient Background */
  const bgTransitionDuration = '1s';
  const bgTransitionTimingFunction = 'ease';
  const bgPropsSelector = (bgType: string) => {
    switch (bgType) {
      case 'gradient_blue':
        return {
          backGroundImage: `linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)`,
          startColor: '#4229EF',
          startColorPosition: '-27.48%',
          endColor: '#2BB8E4',
          endColorPosition: '112.24%',
        };
      case 'gradient_green':
        return {
          backGroundImage: `linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)`,
          startColor: '#2BB8E4',
          startColorPosition: '21.35%',
          endColor: '#00D855',
          endColorPosition: '72.02%',
        };
    }
  };
  const heroBackground = bgPropsSelector(bgType);
  const [initialBgZIndex, setInitialBgZIndex] = useState(-99);
  const [gradient1Opacity, setGradient1Opacity] = useState(0);
  const [gradient2Opacity, setGradient2Opacity] = useState(0);
  const [gradient3Opacity, setGradient3Opacity] = useState(0);
  const [gradient4Opacity, setGradient4Opacity] = useState(0);
  const [gradient5Opacity, setGradient5Opacity] = useState(0);
  const [gradient6Opacity, setGradient6Opacity] = useState(0);
  const handleTopLeftDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(100);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleTopDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(0);
    setGradient2Opacity(100);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleTopRightDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(100);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleBottomLeftDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(100);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleBottomDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(100);
    setGradient6Opacity(0);
  };
  const handleBottomRightDiv = () => {
    setInitialBgZIndex(-100);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(100);
  };

  const [isAnimate, setIsAnimate] = useState(true);
  const isHome = contentWidth === 'hundred_percent';

  const fontColor = fontColorSelector(bgType);
  const sectionBackground =
    bgType === 'image' && backgroundImageUrl
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 44.15%, rgba(0, 0, 0, 0.7) 100%), url(${backgroundImageUrl})`
      : '';

  const titleString: string[] = title ? title.split('<tb>') : [''];
  const subTextString: string[] = subText ? subText.split('<tb>') : [''];
  // useEffect(() => {
  //   if (isHome) {
  //     setTimeout(() => {
  //       setIsAnimate(false);
  //     }, 5000);
  //   }
  // }, [isHome]);

  const animationContainerStyle =
    isAnimate && isHome ? `flex ${Styles['main-wrapper']} ` : `hidden`;
  const animationShapeOneStyle =
    isAnimate && isHome && `${Styles['shape-one']} flex-auto w-[35%]`;
  const animationShapeTwoStyle =
    isAnimate && isHome && `flex-auto  w-[25%] ${Styles['shape-two']}`;
  const animationShapeThreeStyle =
    isAnimate && isHome && `flex-auto  w-[47%] ${Styles['shape-three']}`;
  return (
    <section
      style={
        isAnimate && isHome
          ? {
              background: 'black',
            }
          : {
              backgroundImage: sectionBackground,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              color: fontColor,
              transition: 'all 0.2s ease',
            }
      }
      className={`relative overflow-hidden`}
      data-testid="hero-section"
    >
      <div
        style={{
          background:
            'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 58.01%)',
        }}
        className={`absolute block w-full h-full translate-y-[-18.4375rem] top-0 bottom-0 left-0 right-0 cursor-default opacity-70`}
      />
      <div
        style={{
          backgroundImage: heroBackground?.backGroundImage,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: initialBgZIndex,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(135deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient1Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient2Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(225deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient3Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(45deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient4Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(360deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient5Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(315deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: gradient6Opacity,
          transitionDuration: bgTransitionDuration,
          transitionTimingFunction: bgTransitionTimingFunction,
        }}
        className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
      />
      {bgType !== 'image' && (
        <div
          className={`hidden absolute w-full h-full top-0 bottom-0 left-0 right-0 cursor-default bg-transparent lg:flex flex-col`}
        >
          <div className="flex flex-row justify-between min-h-[50%]">
            <div
              className="flex-none w-[30%]"
              onMouseEnter={handleTopLeftDiv}
            />
            <div
              className="flex-none w-[30%]"
              onMouseEnter={handleTopRightDiv}
            />
          </div>
          <div className="flex flex-row justify-between min-h-[50%]">
            <div
              className="flex-none w-[30%]"
              onMouseEnter={handleBottomLeftDiv}
            />
            <div
              className="flex-none w-[30%]"
              onMouseEnter={handleBottomRightDiv}
            />
          </div>
        </div>
      )}

      <div className="container relative min-h-[37.5rem] lg:min-h-[52.5rem]">
        <div className="absolute bottom-0 w-fit">
          <div
            className={`${
              contentWidth === 'hundred_percent'
                ? 'lg:max-w-full'
                : contentWidth === 'seventy_percent'
                ? 'lg:max-w-[70%]'
                : 'lg:max-w-[50%]'
            } flex flex-col max-w-[90%] text-left`}
          >
            <div
              className="w-[70%] h-[2.5rem] lg:h-[10rem] self-center"
              onMouseEnter={handleTopDiv}
            />
            <span
              className={`text-[1rem] lg:text-[1.25rem] leading-[1rem] tracking-[0.1em] mb-[1.375rem] lg:mb-[1.875rem] uppercase ${
                isAnimate && isHome && `invisible`
              }`}
              data-testid="hero-subTitle"
            >
              {subTitle}
            </span>
            {/* hero section title part wrapper */}
            <div className={`relative overflow-hidden`}>
              <h1
                className={`overflow-hidden text-[2.25rem] whitespace-pre-line ${
                  contentWidth === 'hundred_percent'
                    ? 'lg:text-[5rem] leading-[2.4375rem] lg:leading-[6.1875rem]'
                    : contentWidth === 'seventy_percent'
                    ? 'lg:text-[3.125rem] leading-[2.25rem] lg:leading-[4.3125rem] '
                    : 'lg:text-[3.75rem] leading-[2.875rem] lg:leading-[4.375rem]'
                } ${isAnimate && isHome && Styles['primary-title-wrapper']}`}
                data-testid="hero-title"
              >
                {!!titleString &&
                  !!titleString.length &&
                  titleString.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span key={ind} className="font-bold">
                          {' ' + titleString[ind] + ' '}
                        </span>
                      );
                    } else {
                      return <span key={ind}>{titleString[ind]}</span>;
                    }
                  })}
              </h1>
              {/* animation shape part */}
              <div className={`${animationContainerStyle}`}>
                <div className={` ${animationShapeOneStyle} `}></div>
                <div className={` ${animationShapeTwoStyle} `}></div>
                <div className={`${animationShapeThreeStyle}`}></div>
              </div>
            </div>

            {subText && (
              <p
                className={`text-[1rem] lg:text-[1.25rem] ${
                  footerAddress
                    ? 'mt-[1.875rem] lg:mt-[1.625rem]'
                    : 'mt-[1rem] lg:mt-[3.25rem] whitespace-pre-line'
                } `}
                data-testid="hero-subText"
              >
                {subTextString.map((ele, ind) => {
                  if (ind % 2 === 1) {
                    return (
                      <span key={ind} className="font-semibold">
                        {' ' + subTextString[ind] + ' '}
                      </span>
                    );
                  } else {
                    return <span key={ind}>{subTextString[ind]}</span>;
                  }
                })}
              </p>
            )}
            {!!logos && !!logos.length && (
              <div
                className={`flex flex-row gap-x-[1.5rem] lg:gap-x-[1.75rem] ${
                  contentWidth == '50%'
                    ? 'mt-[1.125rem] lg:mt-[2.5rem]'
                    : 'mt-[1.5rem] lg:mt-[1.625rem]'
                }  `}
              >
                {!!logos &&
                  !!logos.length &&
                  logos.map((logo, index) => {
                    let imageInfo = getStrapiMediaUrl(logo.image);
                    return (
                      <span
                        key={index}
                        className={`${
                          isAnimate && isHome && 'invisible'
                        } convert-to-white`}
                      >
                        <Image
                          src={imageInfo.url}
                          alt={logo.alt}
                          width={imageInfo.width}
                          height={imageInfo.height}
                        />
                      </span>
                    );
                  })}
              </div>
            )}
            {!!redirectButton && redirectButton.buttonText && (
              <div
                className={`mt-[1.25rem] lg:mt-[2.5rem] ${
                  isAnimate && isHome && 'invisible'
                }`}
              >
                <RedirectButton {...redirectButton} />
              </div>
            )}
            <div
              className={`w-[70%] h-[2.5rem] ${
                contentWidth === 'hundred_percent'
                  ? 'lg:h-[10rem]'
                  : contentWidth === 'seventy_percent'
                  ? 'lg:h-[8rem]'
                  : 'lg:h-[6.375rem]'
              } self-center`}
              onMouseEnter={handleBottomDiv}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
