import Link from 'next/link';
import { useReadingTime } from 'react-hook-reading-time';
import { IFeaturedBlog } from '@src/types/pages';
import { sectionPaddingClassSelector, formatDate } from '@src/utils';
import Image from 'next/image';
import Styles from './index.module.css';
import { MetaTag } from '@src/components/root/meta-tag';

export const FeaturedBlog = ({
  sectionPadding,
  featuredBlog,
  isOverlappedWithHero,
}: IFeaturedBlog) => {
  const {
    authorSlug,
    authorAvatar,
    authorAvatarAlt,
    authorName,
    publishedDate,
    contentBlock,
    videoLength,
  } = featuredBlog;
  const { text: readingTime } = useReadingTime(featuredBlog.contentBlock);
  return (
    <section
      className={`${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div
        className={`${
          isOverlappedWithHero
            ? 'translate-y-[-7.5rem] md:translate-y-[-12rem] mb-[-7.5rem] md:mb-[-12rem]'
            : 'mt-[7.5rem]'
        } `}
      >
        <div className="container">
          <div className={`md:max-w-[53.375rem] md:mx-auto `}>
            <div className={`relative ${Styles[`card-cover-wrap`]}`}>
              {!!featuredBlog && featuredBlog.imgSrc && (
                <Link href={`/blog/${featuredBlog.slug}`} passHref>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${featuredBlog.imgSrc})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                    className={`relative w-full pb-[55%] md:pb-[50%] `}
                    title={featuredBlog.imgAlt}
                  ></div>
                </Link>
              )}
              {/* blog writer information part */}
              <div
                className={`hidden md:block md:absolute md:max-w-[53.375rem] md:bottom-0 md:left-0 md:pl-[2.5rem] pb-[2.0625rem] 
                `}
              >
                {!!featuredBlog && featuredBlog.title && (
                  <div>
                    {/* blog writer information */}
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

                    <h3 className="md:text-[1.25rem] md:leading-[1.875rem] md:font-semibold text-[#FFFFFF] mt-[0.625rem]">
                      <Link href={`/blog/${featuredBlog.slug}`} passHref>
                        <a>{featuredBlog.title}</a>
                      </Link>
                    </h3>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-[2.9375rem] md:mt-[1.125rem]">
              <div className="flex flex-col items-start md:items-end md:order-2">
                <div className="flex items-center flex-wrap gap-[10px] order-1 md:order-2 md:mt-[0.375rem]">
                  {!!featuredBlog.metaTags &&
                    !!featuredBlog.metaTags &&
                    featuredBlog.metaTags.map((ele: any, index: number) => (
                      <span key={index}>
                        <MetaTag metaTag={ele.attributes.tag} />
                      </span>
                    ))}
                </div>
                {!!featuredBlog &&
                  featuredBlog.publishedDate &&
                  readingTime && (
                    <div className="text-body/[.6] inline-flex items-center flex-wrap gap-[.375rem] mt-[0.9375rem] md:mt-0 order-2 md:order-1">
                      <span>
                        {formatDate(featuredBlog.publishedDate, true)}
                      </span>
                      <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
                      <span>{readingTime}</span>
                    </div>
                  )}
              </div>
              <div className="block md:hidden md:absolute mt-[0.8125rem]">
                {!!featuredBlog && featuredBlog.title && (
                  <h3 className="text-[1.375rem] md:leading-[2.1875rem] text-[#212121]">
                    <Link href={`/blog/${featuredBlog.slug}`} passHref>
                      <a>{featuredBlog.title}</a>
                    </Link>
                  </h3>
                )}
              </div>
              <div className="mt-[0.9375rem] md:mt-0 md:order-1 max-w-full md:max-w-[55%]">
                {featuredBlog.description && (
                  <p className="text-[1.125rem] leading-[1.75rem] text-[#212121] line-clamp line-clamp-2">
                    <Link href={`/blog/${featuredBlog.slug}`} passHref>
                      <a> {featuredBlog.description} </a>
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
