// External Imports
import Link from 'next/link';
import Image from 'next/image';

// Internal Imports
import { ITeamCard } from '@src/types/root';
import { useState, useEffect } from 'react';
import { getStrapiMediaUrl } from '@src/utils';
import { LinkedInIcon } from '@src/components/root/icons';
import { CardTitle } from '../card-title';
export type IImageDimension = {
  width: number | undefined;
  height: number | undefined;
};

// TeamCard
export const TeamCard = ({
  slug,
  imgSrc,
  imgAlt,
  name,
  designation,
  linkedInLink,
  isBigCard,
}: ITeamCard) => {
  const [variant, setVariant] = useState('primary');
  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      setVariant('secondary');
    }
  }, [variant]);
  let imgDimension: IImageDimension = {
    width: 540,
    height: 695,
  };

  if (variant === 'primary') {
    imgDimension.width = 540;
    imgDimension.height = 695;
  } else {
    imgDimension.width = 418;
    imgDimension.height = 634;
  }

  let contentWrap: string;
  if (variant === 'primary') {
    contentWrap =
      'md:absolute md:p-[30px] md:bottom-0 md:left-0 md:translate-y-0 md:w-full md:z-10 md:transition-transform md:duration-[400ms] md:group-hover:translate-y-[-8px]';
  } else {
    contentWrap =
      'absolute p-[30px] bottom-0 left-0 md:translate-y-0 w-full z-10 md:transition-transform md:duration-[400ms] md:group-hover:translate-y-[-8px]';
  }
  const { url, alternativeText } = getStrapiMediaUrl(imgSrc.image, 'large');
  return (
    <div className="TeamCard grid relative group" data-testid="TeamCard">
      {!!url && (
        <div className="card-img inline-flex overflow-hidden relative">
          <span
            className={`${
              variant === 'primary' ? 'hidden md:block' : 'block'
            }  bg-[linear-gradient(0deg,#00000080_0%,#00000000_100%)] absolute inset-0 z-[1]`}
          ></span>
          <Image
            className="md:scale-100 md:transition-transform md:duration-[400ms] md:group-hover:scale-110"
            src={url}
            alt={imgAlt ? imgAlt : alternativeText}
            {...imgDimension}
            objectFit="cover"
            loading="lazy"
            blurDataURL="/assets/blurred.webp"
            placeholder="blur"
          />
        </div>
      )}
      <div className={contentWrap}>
        {!!isBigCard && (
          <Link href={`${linkedInLink}`} passHref>
            <a
              data-testid="linkedInLink"
              className={`${
                variant === 'primary'
                  ? 'md:text-white  text-body'
                  : 'text-white'
              } text-xl mb-[.625rem] mt-[.875rem] md:mt-[0] block leading-[1]`}
            >
              <LinkedInIcon />
            </a>
          </Link>
        )}
        {name && (
          <h3
            className={`${
              variant === 'primary'
                ? 'text-[1.625rem] md:text-[1.875rem] leading-[1.5] text-body md:text-white  mb-[.3125rem]'
                : 'text-white text-base uppercase'
            } font-semibold`}
          >
            <Link href={`/about/${slug}`} passHref>
              <a>
                <CardTitle text={name} isBlack={false} />
              </a>
            </Link>
          </h3>
        )}
        {designation && (
          <p
            className={`${
              variant === 'primary' ? 'text-body md:text-white' : 'text-white'
            } text-base leading-[1.375] uppercase  tracking-[.1em]`}
          >
            {designation}
          </p>
        )}
      </div>
    </div>
  );
};
