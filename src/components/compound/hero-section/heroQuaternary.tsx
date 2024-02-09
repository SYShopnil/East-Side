import { IHeroQuaternary } from '@src/types/compound';
import {
  backgroundClassSelector,
  fontColorSelector,
  getStrapiMediaUrl,
} from '@src/utils';
import Image from 'next/image';

export const HeroQuaternary = ({
  bgType,
  bgImageUrl,
  hasTopOverlay = true,
  fontColorBlack = false,
  title,
  subTitle,
  logoUrl,
  logoAlt,
  featuredImageUrl,
  featuredImageAlt,
}: IHeroQuaternary) => {
  const bgImage = getStrapiMediaUrl(bgImageUrl, 'large');
  const featuredImage = getStrapiMediaUrl(featuredImageUrl, 'large');
  const logo = getStrapiMediaUrl(logoUrl, 'large');
  const heroBackground =
    bgType !== 'image'
      ? backgroundClassSelector(bgType)
      : hasTopOverlay
      ? `url(${bgImage.url})`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0) 31.15%, rgba(0, 0, 0, 0.7) 100%), url(${bgImage.url})`;

  const heroFontColor = fontColorBlack ? '#212121' : fontColorSelector(bgType);

  const titleString: string[] = title ? title.split('<tb>') : [''];
  const subTitleString: string[] = subTitle ? subTitle.split('<tb>') : [''];

  return (
    <div
      style={{
        backgroundImage: heroBackground,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: heroFontColor,
      }}
      className={`relative mb-[10rem] md:mb-[20rem] ${
        !!featuredImage && !!featuredImage.url
          ? 'min-h-[26.25rem] md:min-h-[52.5rem] '
          : 'min-h-[26.25rem] md:min-h-[32.5rem] '
      } `}
      data-testid="hero-section"
    >
      {/* Applies Overlay Effect */}
      {hasTopOverlay && (
        <div
          style={{
            background:
              'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 58.01%)',
          }}
          className={`absolute block w-full h-full translate-y-[-4.5rem] md:translate-y-[-18.4375rem] inset-0 cursor-default opacity-70`}
        />
      )}

      {/* Hero Container */}
      <div className="container relative text-center pt-[10rem] pb-[0.5rem] md:pb-[5rem] ">
        <div>
          {!!logo && !!logo.url && (
            <div
              className={`relative w-full pb-[2.25rem] md:pb-[3.5rem] mb-[1.875rem] ${
                heroFontColor === '#FFFFFF' ? 'convert-to-white' : ''
              }`}
            >
              <Image
                src={logo.url}
                alt={logoAlt ? logoAlt : logo.alternativeText}
                layout="fill"
                objectFit="contain"
                priority={true}
                data-testid="logo"
              />
            </div>
          )}
          {title && (
            <h1
              className="text-[1.375rem] md:text-[2.5rem] leading-[2rem] md:leading-[3.4375rem] whitespace-pre-line"
              data-testid="title"
            >
              {!!titleString &&
                !!titleString.length &&
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
          )}
          {subTitle && (
            <p
              className="text-[0.875rem] md:text-[1.25rem] leading-[1.3125rem] md:leading-[1rem] tracking-[0.2em] md:tracking-[0.1em] uppercase mt-[1rem] md:mt-[1.5rem] whitespace-pre-line "
              data-testid="sub-title"
            >
              {subTitleString.map((ele, ind) => {
                if (ind % 2 === 1) {
                  return (
                    <span key={ind} className="font-semibold">
                      {' ' + subTitleString[ind] + ' '}
                    </span>
                  );
                } else {
                  return <span key={ind}>{subTitleString[ind]}</span>;
                }
              })}
            </p>
          )}
        </div>
        {!!featuredImage && !!featuredImage.url && (
          <div className="translate-y-[50%] mt-[-25%] mb-[5rem] image-border gradient-border">
            <div className="relative w-full pb-[65%] rounded-[0.9375rem] image-border white-border">
              <Image
                src={featuredImage.url}
                alt={
                  featuredImageAlt
                    ? featuredImageAlt
                    : featuredImage.alternativeText
                }
                layout="fill"
                objectFit="cover"
                priority={true}
                data-testid="featured-image"
                blurDataURL="/assets/blurred.webp"
                placeholder="blur"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
