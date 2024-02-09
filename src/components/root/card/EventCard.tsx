// External Imports
import Link from 'next/link';
import Image from 'next/image';

// Internal Imports
import { IEventCard } from '@src/types/root';
import { formatTime, formatDate } from '@src/utils';
import { CardTitle } from '../card-title';

// EventCard
export const EventCard = ({
  slug,
  imgSrc,
  imageAlt,
  title,
  description,
  descShowLine,
  eventDate,
  eventPlace,
  eventTime,
}: IEventCard) => {
  const titleText: string[] = title ? title.split('<tb>') : [''];

  return (
    <Link href={`/event/${slug}`} passHref>
      <a className="grid" data-testid="EventCard">
        {imgSrc && (
          <div className="inline-flex overflow-hidden">
            <Image
              src={imgSrc}
              alt={imageAlt}
              width={542}
              height={360}
              objectFit="cover"
              loading="lazy"
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
            />
          </div>
        )}
        <div>
          <div className={`flex flex-col mt-[1.125rem]`}>
            {eventDate && (
              <div className="flex items-center flex-wrap gap-[10px] mt-0 md:mt-[0.8125rem] order-1 md:order-2">
                <span className="p-[4px_11px] min-h-[30px] bg-[#f9f9f9] backdrop-blur-[2px] rounded-[4px] inline-flex items-center justify-center">
                  {formatDate(eventDate)}
                </span>
              </div>
            )}
            {eventPlace && eventTime && (
              <div className="text-body/[.6] inline-flex items-center flex-wrap gap-[.375rem] mt-[0.8125rem] md:mt-0 order-2 md:order-1">
                {eventPlace && <span>{eventPlace}</span>}
                {eventTime && (
                  <>
                    <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
                    <span>{formatTime(eventTime)}</span>
                  </>
                )}
              </div>
            )}
          </div>

          {title && (
            <h3 className="text-[1rem] leading-[1.5] mt-[.8125rem] mb-[.8125rem] line-clamp line-clamp-2">
              {!!titleText &&
                !!titleText.length &&
                titleText.map((ele, ind) => {
                  if (ind % 2 === 1) {
                    return (
                      <span
                        key={ind}
                        className="font-medium"
                        data-testid="title-highlighted-text"
                      >
                        {' ' +
                          (
                            <>
                              <CardTitle text={titleText[ind]} isBlack={true} />
                            </>
                          ) +
                          ' '}
                      </span>
                    );
                  } else if (ele) {
                    return (
                      <span key={ind}>
                        <CardTitle text={titleText[ind]} isBlack={true} />
                      </span>
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
        </div>
      </a>
    </Link>
  );
};
