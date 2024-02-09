// External Imports
import Image from 'next/image';
import Link from 'next/link';

// Internal Imports
import { IFeaturedArticle } from '@src/types/compound';
import { getStrapiMediaUrl, sectionPaddingClassSelector } from '@src/utils';

// cardType
const cardType = 'CARD';

export const FeaturedArticle = ({
  sectionPadding,
  featuredArticle: { slug, title, subText, bannerImage, bannerImageAlt },
}: IFeaturedArticle) => {
  const bannerImageInfo = getStrapiMediaUrl(bannerImage, 'large');

  return (
    <div
      className={`overflow-hidden ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div className="container">
        <div className=" md:flex  md:justify-center md:items-center md:gap-[3rem] xl:gap-[5rem]">
          <div className="w-full  md:w-1/2 xl:w-[40%]">
            <div className="mb-[1.875rem] md:mb-[0]">
              {title && (
                <Link href={`blog/${slug}`} passHref>
                  <a>
                    <h2 className="text-[1.125rem] leading-[1.5] mb-[.625rem] md:mb-[1.25rem] md:text-[1.25rem] md:font-semibold">
                      {title}
                    </h2>
                  </a>
                </Link>
              )}
              {subText && (
                <p
                  className={`text-base leading-[1.75] line-clamp line-clamp-3`}
                >
                  {subText}
                </p>
              )}
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-[60%]">
            {bannerImage && (
              <div className="md:mr-[-45%] md:ml-[0] mr-[-20%] ml-[-20%] grid">
                <Image
                  src={bannerImageInfo.url}
                  alt={
                    bannerImageAlt
                      ? bannerImageAlt
                      : bannerImageInfo.alternativeText
                  }
                  width={bannerImageInfo.width}
                  height={bannerImageInfo.height}
                  objectFit="cover"
                  loading="lazy"
                  blurDataURL="/assets/blurred.webp"
                  placeholder="blur"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
