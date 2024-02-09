// External Imports
import Link from 'next/link';
import Image from 'next/image';

// Internal Imports
import { ICard } from '@src/types/root';
import { getStrapiMediaUrl } from '@src/utils';
import { CardTitle } from '../card-title';
import { useIsBrowser, useViewport } from '@src/hooks';

// LocationCard
export const LocationCard = ({
  slug,
  imgSrc,
  imgAlt,
  title,
  description,
}: ICard) => {
  const isBrowser = useIsBrowser();
  const { width } = useViewport();
  const { url, alternativeText } = getStrapiMediaUrl(imgSrc, 'large');
  return (
    <div
      className="locationCard grid relative group"
      data-testid="locationCard"
    >
      {!!url && (
        <div className="card-img inline-flex overflow-hidden relative">
          <span className="md:bg-[linear-gradient(0deg,#00000080_0%,#00000000_100%)] md:absolute md:inset-0 md:z-[1] hidden md:block"></span>
          <Image
            className="md:scale-100 md:transition-transform md:duration-[400ms] md:group-hover:scale-110"
            src={url}
            alt={imgAlt ? imgAlt : alternativeText}
            width={570}
            height={730}
            loading="lazy"
            blurDataURL="/assets/blurred.webp"
            placeholder="blur"
          />
        </div>
      )}
      <div className="md:absolute md:p-[30px_30px_40px_30px] md:bottom-0 md:left-0 md:translate-y-0 md:w-full md:z-10 md:transition-transform md:duration-[400ms] md:group-hover:translate-y-[-8px]">
        {title && (
          <h3 className="font-semibold text-[22px] md:text-[26px] leading-[1.5] text-body md:text-white md:my-[0] md:mb-[6px] my-[12px]">
            <Link href={`/${slug}`} passHref>
              <a>
                <CardTitle
                  text={title}
                  isBlack={isBrowser && width <= 767 ? true : false}
                />
              </a>
            </Link>
          </h3>
        )}
        {description && (
          <p
            className={`text-base leading-[1.375] text-body md:text-white whitespace-pre-line tracking-[.1em]`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
