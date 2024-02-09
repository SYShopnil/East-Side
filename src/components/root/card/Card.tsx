// External Imports
import Link from 'next/link';
import Image from 'next/image';

// Internal Imports
import { ICard } from '@src/types/root';
import { getStrapiMediaUrl } from '@src/utils/strapi';
import { CardTitle } from '../card-title';

// Card
export const Card = ({
  slug,
  imgSrc,
  imgAlt,
  title,
  description,
  descShowLine,
  cardItem,
}: ICard) => {
  let imageInfo = getStrapiMediaUrl(imgSrc);
  let isApp = cardItem === 'App';
  let isLocation = cardItem === 'Location';
  let customPath;
  switch (cardItem) {
    case 'App':
      customPath = `/app/${slug}`;
      break;
    case 'Podcast':
      customPath = `/podcast/${slug}`;

      break;
    case 'Article':
      customPath = `/blog/${slug}`;
      break;
    case 'Location':
      customPath = `/${slug}`;
      break;
  }
  return (
    <div className="main-card grid" data-testid="main-card">
      {imgSrc && (
        <div
          className={`card-img inline-flex overflow-hidden bg-primaryGradient content-center ${
            isApp ? 'p-10' : ''
          }`}
        >
          <Image
            className={`${isApp ? 'convert-to-white' : ''}`}
            src={imageInfo.url}
            alt={imgAlt ? imgAlt : imageInfo.alternativeText}
            objectFit={`${isApp ? 'contain' : 'cover'}`}
            width={560}
            height={560}
            loading="lazy"
            blurDataURL="/assets/blurred.webp"
            placeholder="blur"
          />
        </div>
      )}
      <div>
        {title && customPath && (
          <h3
            className={`font-medium text-[1rem] leading-[1.5] mt-[.875rem] mb-[.375rem] line-clamp line-clamp-2`}
          >
            <Link href={customPath} passHref>
              <a>
                <CardTitle
                  text={title}
                  isBlack={true}
                  isLocation={isLocation}
                />
              </a>
            </Link>
          </h3>
        )}
        {description && (
          <p
            className={`line-clamp whitespace-pre-line ${
              descShowLine ? `line-clamp-${descShowLine}` : ``
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
