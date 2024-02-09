import React, { useState } from 'react';
import { IHeroTertiary } from '@src/types/compound';
import { fontColorSelector } from '@src/utils';
import { IVideoFrame } from '@src/types/root';
import dynamic from 'next/dynamic';
const VideoFrame = dynamic<IVideoFrame>(
  import('@src/components/root/video-frame').then((module) => module.VideoFrame)
);
export const HeroTertiary = ({
  bgType,
  title,
  description,
  videoFrame,
}: IHeroTertiary) => {
  /* Moving Gradient Background */
  const [bgGradient, setBgGradient] = useState(
    'linear-gradient(67.96deg, #4229EF -3.51%, #2BB8E4 254.73%)'
  );
  const handleTopLeftDiv = () => {
    setBgGradient('linear-gradient(135deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };
  const handleTopDiv = () => {
    setBgGradient('linear-gradient(180deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };
  const handleTopRightDiv = () => {
    setBgGradient('linear-gradient(225deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };
  const handleBottomLeftDiv = () => {
    setBgGradient('linear-gradient(45deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };
  const handleBottomDiv = () => {
    setBgGradient('linear-gradient(360deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };
  const handleBottomRightDiv = () => {
    setBgGradient('linear-gradient(315deg, #2BB8E4 -27.48%, #00D855 112.24%)');
  };

  const titleString: string[] = title ? title.split('<tb>') : [''];
  const descriptionString: string[] = description
    ? description.split('<tb>')
    : [''];
  return (
    <>
      <section
        style={{
          background: bgGradient,
          color: fontColorSelector(bgType),
        }}
        className="relative pt-[11.25rem] md:pt-[12.5rem] pb-[8.75rem] md:pb-[18.75rem]"
        data-testid="hero-section"
      >
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
        <div className="container relative">
          <div
            className="max-w-[50%] mx-auto md:h-[11.25rem]"
            onMouseEnter={handleTopDiv}
          />
          <div className="text-center">
            <h1
              className="max-w-[100%] md:max-w-[60%] md:mx-auto text-[1.375rem] lg:text-[2.5rem] leading-[2rem] lg:leading-[3.4375rem] whitespace-pre-line line-clamp line-clamp-3"
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
            {description && (
              <p
                className="text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[30px] mt-[1.25rem] md:mt-[1.5rem] max-w-full md:max-w-[75%] md:mx-auto whitespace-pre-line line-clamp line-clamp-3"
                data-testid="hero-description"
              >
                {!!descriptionString &&
                  !!descriptionString.length &&
                  descriptionString.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span key={ind} className="font-semibold">
                          {' ' + descriptionString[ind] + ' '}
                        </span>
                      );
                    } else {
                      return <span key={ind}>{descriptionString[ind]}</span>;
                    }
                  })}
              </p>
            )}
          </div>
          <div
            className={`max-w-[50%] mx-auto md:h-[4.375rem]`}
            onMouseEnter={handleBottomDiv}
          />
        </div>
      </section>
      {videoFrame && videoFrame.videoUrl && (
        <div>
          <VideoFrame {...videoFrame} />
        </div>
      )}
    </>
  );
};
