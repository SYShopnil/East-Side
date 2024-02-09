import React, { useState } from 'react';
import { IHeroSecondary } from '@src/types/compound';
import {
  backgroundClassSelector,
  fontColorSelector,
  getStrapiMediaUrl,
} from '@src/utils';
import { CtaLink } from '@src/components/root/cta-link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IVideoFrame } from '@src/types/root';
const VideoFrame = dynamic<IVideoFrame>(
  import('@src/components/root/video-frame').then((module) => module.VideoFrame)
);
export const HeroSecondary = ({
  bgType,
  title,
  subText,
  ctaArray,
  logos,
  videoFrame,
}: IHeroSecondary) => {
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
  const [initialBgZIndex, setInitialBgZIndex] = useState(0);
  const [gradient1Opacity, setGradient1Opacity] = useState(0);
  const [gradient2Opacity, setGradient2Opacity] = useState(0);
  const [gradient3Opacity, setGradient3Opacity] = useState(0);
  const [gradient4Opacity, setGradient4Opacity] = useState(0);
  const [gradient5Opacity, setGradient5Opacity] = useState(0);
  const [gradient6Opacity, setGradient6Opacity] = useState(0);
  const handleTopLeftDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(100);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleTopDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(0);
    setGradient2Opacity(100);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleTopRightDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(100);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleBottomLeftDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(100);
    setGradient5Opacity(0);
    setGradient6Opacity(0);
  };
  const handleBottomDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(100);
    setGradient6Opacity(0);
  };
  const handleBottomRightDiv = () => {
    setInitialBgZIndex(-101);
    setGradient1Opacity(0);
    setGradient2Opacity(0);
    setGradient3Opacity(0);
    setGradient4Opacity(0);
    setGradient5Opacity(0);
    setGradient6Opacity(100);
  };

  /* Bold Title & SubText */
  const titleString: string[] = title ? title.split('<tb>') : [''];
  const subTextString: string[] = subText ? subText.split('<tb>') : [''];

  return (
    <div>
      <div
        style={{
          color: fontColorSelector(bgType),
        }}
        className="relative section-padding-primary"
        data-testid="hero-secondary-section"
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
            backgroundImage: `linear-gradient(345deg, ${heroBackground?.startColor} ${heroBackground?.startColorPosition}, ${heroBackground?.endColor} ${heroBackground?.endColorPosition})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: gradient6Opacity,
            transitionDuration: bgTransitionDuration,
            transitionTimingFunction: bgTransitionTimingFunction,
          }}
          className={`absolute block w-full h-full inset-0 cursor-default z-[-99]`}
        />
        <div
          className={`hidden absolute w-full h-full inset-0 cursor-default bg-transparent md:flex flex-col`}
        >
          <div className="flex flex-row justify-between min-h-[50%]">
            <div
              className="flex-none w-[25%]"
              onMouseEnter={handleTopLeftDiv}
            />
            <div
              className="flex-none w-[25%]"
              onMouseEnter={handleTopRightDiv}
            />
          </div>
          <div className="flex flex-row justify-between min-h-[50%]">
            <div
              className="flex-none w-[33%]"
              onMouseEnter={handleBottomLeftDiv}
            />
            <div
              className="flex-none w-[33%]"
              onMouseEnter={handleBottomRightDiv}
            />
          </div>
        </div>
        <div
          className={`relative container min-h-[17.5rem] md:min-h-[15rem] mt-[2.5rem] md:mt-0 md:mb-[7.5rem] `}
        >
          <div
            className="max-w-[50%] mx-auto md:h-[7.5rem]"
            onMouseEnter={handleTopDiv}
          />
          <div
            className={`flex flex-col text-center items-center ${
              !!ctaArray && ctaArray.length
                ? 'relative overflow-x-scroll hide-overflow-scrollbar'
                : ''
            }`}
          >
            <div
              className={`w-full ${
                !!ctaArray && ctaArray.length ? 'sticky left-0 top-0' : ''
              }`}
            >
              <h1
                className="max-w-[100%] text-[1.375rem] lg:text-[2.5rem] leading-[1.9375rem] lg:leading-[3.4375rem] whitespace-pre-line "
                data-testid="hero-title"
              >
                {title &&
                  titleString.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span key={ind} className="font-semibold">
                          {' ' + titleString[ind] + ' '}
                        </span>
                      );
                    } else {
                      return <span key={ind}>{titleString[ind]}</span>;
                    }
                  })}
              </h1>
              <p
                className={`md:max-w-[70%] mx-auto text-[1rem] lg:text-[1.25rem] leading-[1.5rem] lg:leading-[1.875rem] mt-[1.375rem] lg:mt-[2.8125rem] whitespace-pre-line ${
                  !!ctaArray || !!logos ? '' : 'md:mb-[3.5rem]'
                } `}
                data-testid="hero-subText"
              >
                {subText &&
                  subTextString.map((ele, ind) => {
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
            </div>
            {!!ctaArray && !!ctaArray.length && (
              <div className="flex flex-row flex-nowrap gap-x-[2.1875rem] lg:gap-x-[2.5rem] w-full sm:justify-center mt-[2rem] mb-[5rem] md:my-[3.125rem] ">
                {ctaArray.map((ctaInfo, ind) => (
                  <CtaLink key={ind} {...ctaInfo} parentBgType={bgType} />
                ))}
              </div>
            )}
            {!!logos && !!logos.data && !!logos.data.length && (
              <div className="flex flex-row gap-x-[1.25rem] lg:gap-x-[1.75rem] mt-[2rem] mb-[5rem] md:my-[3.125rem] ">
                {logos.data.map(
                  (
                    logo: { attributes: any },
                    ind: React.Key | null | undefined
                  ) => (
                    <span key={ind}>
                      <Image
                        src={logo?.attributes.url}
                        alt={logo?.attributes.alternativeText}
                        width={logo?.attributes.width}
                        height={logo?.attributes.height}
                      />
                    </span>
                  )
                )}
              </div>
            )}
          </div>
          <div
            className={`max-w-[50%] mx-auto md:h-[4.375rem]`}
            onMouseEnter={handleBottomDiv}
          />
        </div>
      </div>
      {!!videoFrame && !!videoFrame.videoSource && (
        <div className={`md:max-w-[53.375rem] md:mx-auto`}>
          <VideoFrame
            {...videoFrame}
            videoUrl={videoFrame.videoSource}
            thumbnail={
              getStrapiMediaUrl(
                videoFrame.videoThumbnail,
                'medium' || 'thumbnail'
              ).url
            }
          />
        </div>
      )}
    </div>
  );
};
