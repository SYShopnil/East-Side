import { IVideoFrame } from '@src/types/root';
import Image from 'next/image';
import { useState } from 'react';
import Styles from './index.module.scss';

export const VideoFrame = (props: IVideoFrame) => {
  const [showVideo, setShowVideo] = useState(false);

  const {
    thumbnail,
    thumbnailAlt,
    videoUrl,
    isOverlappedWithHero = true,
  } = props;

  return (
    <div
      className={`${
        isOverlappedWithHero
          ? 'mt-[-6.25rem] mb-[-10rem] pb-[10rem] md:mt-[-20rem]'
          : 'my-[2rem] md:my-[4rem]'
      }`}
    >
      {/* video-thumbnail */}
      <div className="container">
        <div
          className={`${Styles['cursor-play']} max-w-[854px] mx-auto`}
          onClick={() => setShowVideo(true)}
          data-testid="video-frame-thumbnail"
        >
          <Image
            src={!!thumbnail ? thumbnail : ''}
            alt={thumbnailAlt}
            layout="responsive"
            objectFit="cover"
            loading="lazy"
            width={854}
            height={480}
            blurDataURL="/assets/blurred.webp"
            placeholder="blur"
          />
        </div>
      </div>

      {showVideo && (
        <>
          {/* overlay */}
          <div
            className="fixed z-10 inset-0 bg-slate-900/80   overflow-y-auto h-full w-full"
            onClick={() => setShowVideo(false)}
            data-testid="video-frame-backdrop"
          />

          {/* video-modal*/}
          {/*modal content*/}
          <div
            className="fixed z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto border  shadow-lg rounded-md bg-white w-[80%] lg:w-[60%]"
            data-testid="video-frame-modal"
          >
            <div className="relative w-full h-full pb-[56%]">
              <iframe
                className="w-full h-full absolute top-0 left-0 ring-0 bottom-0"
                src={videoUrl}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
