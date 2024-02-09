// External Imports
import Link from 'next/link';
import Image from 'next/image';
import { useReadingTime } from 'react-hook-reading-time';

// Internal Imports
import { IArticle } from '@src/types/root';
import { formatDate } from '@src/utils';
import { MetaTag } from '../meta-tag';
import Styles from './index.module.scss';
import { CardTitle } from '../card-title';

// ArticleCard - Blog Card & Podcast Card
export const ArticleCard = ({
  /* Common Props */
  slug,
  imgSrc,
  imgAlt,
  title,
  description,
  descShowLine,
  publishedDate,

  /* Blog Props */
  authorAvatar,
  authorAvatarAlt,
  authorName,
  authorSlug,
  metaTags,
  contentBlock,

  /* Podcast Props */
  videoLength,
}: IArticle) => {
  const titleText: string[] = title ? title.split('<tb>') : [''];

  const { text: readingTime } = useReadingTime(
    contentBlock ? contentBlock : ''
  );

  const rootPath = videoLength ? `/podcast` : '/blog';

  return (
    <div className="grid">
      <Link href={`${rootPath}/${slug}`} passHref>
        <a
          data-testid="ArticleCard"
          className={`${Styles['card-cover-wrap']} inline-grid`}
        >
          {imgSrc && (
            <div className={`overflow-hidden relative inline-grid `}>
              <span className="bg-[linear-gradient(0deg,#00000080_0%,#00000000_100%)] absolute inset-0 z-[1] block"></span>
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={542}
                height={360}
                loading="lazy"
                blurDataURL="/assets/blurred.webp"
                placeholder="blur"
              />
              {/* written by and published date part  */}
              <div className={`absolute bottom-[1.25rem] z-10 left-[1.375rem]`}>
                {/* written by part wrapper */}
                {authorName && authorAvatar && (
                  <Link href={`/about/${authorSlug}`} passHref>
                    <a>
                      <div
                        className={`block items-center flex-wrap gap-[10px] mt-5 space-y-[0.5rem]`}
                      >
                        <div className="relative w-[38px] h-[38px]  rounded-[100vmax] overflow-hidden">
                          <Image
                            src={authorAvatar}
                            alt={authorAvatarAlt}
                            width={38}
                            height={38}
                            objectFit="cover"
                          />
                        </div>
                        <div className="text-[#FFFF]">
                          <span className={`${Styles['card-title']}`}>
                            Written by: <span>{authorName}</span>
                          </span>
                        </div>
                        {/* info published date part */}
                        {!!publishedDate && (
                          <div className="text-[#FFFF] inline-flex items-center flex-wrap gap-[.375rem] ">
                            <span>{formatDate(publishedDate, false)}</span>
                            {!!readingTime && !!contentBlock && (
                              <>
                                <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
                                <span>{readingTime}</span>
                              </>
                            )}
                            {!!videoLength && (
                              <>
                                <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
                                <span>{videoLength + ` min`}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          )}
        </a>
      </Link>
      <div>
        <div>
          {/* show meta tag part */}
          {!!metaTags && !!metaTags.length && (
            <div className="flex items-center flex-wrap gap-[10px] mt-[1.5rem]">
              {metaTags.map((metaTag, index) => (
                <span key={index}>
                  <MetaTag metaTag={metaTag} />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* description part */}
        <Link href={`${rootPath}/${slug}`} passHref>
          <a>
            {title && (
              <h3
                className={`text-[1rem] leading-[1.5] mt-[.8125rem] mb-[.8125rem] line-clamp line-clamp-2`}
              >
                {!!titleText.length &&
                  titleText.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span
                          key={ind}
                          className="font-medium "
                          data-testid="title-highlighted-text"
                        >
                          {' ' +
                            (
                              <>
                                <CardTitle
                                  text={titleText[ind]}
                                  isBlack={true}
                                />
                              </>
                            ) +
                            ' '}
                        </span>
                      );
                    } else if (ele) {
                      return (
                        <>
                          <CardTitle text={titleText[ind]} isBlack={true} />
                        </>
                      );
                    }
                  })}
              </h3>
            )}
            {description && (
              <p
                className={`${
                  descShowLine ? `line-clamp line-clamp-${descShowLine}` : ``
                }`}
              >
                {description}
              </p>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};
