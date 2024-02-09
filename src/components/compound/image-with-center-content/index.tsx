import { CtaLink } from '@src/components/root/cta-link';
import { IImageWithCenterContent } from '@src/types/compound';
import {
  backgroundClassSelector,
  fontColorSelector,
  getStrapiMediaUrl,
} from '@src/utils';
import Image from 'next/image';

export const ImageWithCenterContent = (props: IImageWithCenterContent) => {
  const { bgType, subText, author, description, ctaInfo, imgUrl, imgAlt } =
    props;
  const { url, alternativeText, height } = getStrapiMediaUrl(
    imgUrl.image,
    'medium' || 'thumbnail'
  );
  return (
    <div className="lg:container">
      <div className="flex flex-col md:flex-row">
        {/* left */}

        {imgUrl && (
          <div className={`relative w-[100%] md:w-[45%] pb-[100%] md:pb-[40%]`}>
            <Image
              src={url}
              alt={imgAlt ? imgAlt : alternativeText}
              layout="fill"
              objectFit="cover"
              priority={true}
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
            />
          </div>
        )}

        {/* right */}
        <div
          data-testid="center-content-container"
          className="px-[31px] md:px-[58px] md:w-[55%] grid place-items-center py-[30px] md:py-0"
          style={{
            background: backgroundClassSelector(bgType),
            color: fontColorSelector(bgType),
          }}
        >
          <div
            className={`flex flex-col justify-center items-center text-center`}
          >
            {subText && (
              <span
                className="text-[14px] leading-[21px] tracking-[0.2em] uppercase"
                data-testid="center-content-subtext"
              >
                {subText}
              </span>
            )}

            {author && (
              <h3 className="font-[600] text-[14px] leading-[16px] tracking-[0.2em] mt-[2px] lg:mt-[3px]">
                {author}
              </h3>
            )}
            {description && (
              <p className="text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px] mt-[36px]">
                {description}
              </p>
            )}
            {ctaInfo?.ctaLink && ctaInfo?.ctaText && (
              <div className="mt-[32px]">
                <CtaLink {...ctaInfo} parentBgType={bgType} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
