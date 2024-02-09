import { IHeroService } from '@src/types/compound';
import { fontColorSelector, getStrapiMediaUrl } from '@src/utils';
import colors from '@src/themes/colors';
import Image from 'next/image';

export const HeroService = ({
  bgType,
  bgImage,
  title,
  subTitle,
  subText,
  featuredImage,
  featuredImageAlt,
}: IHeroService) => {
  const titleString: string[] = title ? title.split('<tb>') : [''];
  const subTitleString: string[] = subTitle ? subTitle.split('<tb>') : [''];
  const descriptionString: string[] = subText ? subText.split('<tb>') : [''];
  return (
    <div
      style={{
        backgroundImage: `url(${
          getStrapiMediaUrl(bgImage, 'large' || 'medium').url
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: fontColorSelector(bgType),
      }}
      className="relative mb-[10rem] md:mb-[15rem] lg:mb-[22.5rem]"
      data-testid="hero-service-container"
    >
      <div className="container relative">
        <div className="text-center">
          <div className="py-[6.25rem] md:py-[15rem]">
            <div
              className="text-[1rem] md:text-[1.25rem] leading-[1rem] tracking-[0.1em] uppercase "
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
            </div>
            <h1
              className="text-[1.75rem] md:text-[2.5rem] leading-[3.0625rem] md:leading-[6.1875rem] mt-[0.8125rem] md:mt-0 "
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
            <p
              className="text-[1rem] md:text-[1.25rem] leading-[2rem] mt-[0.5rem] md:mt-0 max-w-full md:max-w-[55%] mx-auto whitespace-pre-line "
              data-testid="description"
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
          </div>

          <div className="translate-y-[50%] mt-[-45%] image-border gradient-border">
            <div className="relative w-full pb-[65%] rounded-[0.9375rem] image-border white-border">
              <Image
                src={getStrapiMediaUrl(featuredImage, 'medium' || 'large').url}
                alt={featuredImageAlt}
                layout="fill"
                objectFit="cover"
                priority={true}
                data-testid="featured-image"
                blurDataURL="/assets/blurred.webp"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
