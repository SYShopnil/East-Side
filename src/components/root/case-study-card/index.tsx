import Link from 'next/link';
import Image from 'next/image';
import { ICaseStudyCard } from '@src/types/root';
import { fontColorSelector } from '@src/utils/fontColorSelector';
import { getStrapiMediaUrl } from '@src/utils';

export const CaseStudyCard = ({
  companyName,
  imageAltText,
  imageUrl,
  isFeatured = false,
  isWinner = false,
  fullHeight,
  redirectLink,
  subTitle,
  title,
  parentBgType = 'image',
}: ICaseStudyCard) => {
  const fontColor = fontColorSelector(parentBgType!);
  const imageInfo = getStrapiMediaUrl(imageUrl, 'large');
  const titleText: string[] = title ? title.split('<tb>') : [''];
  return (
    <div className="relative group">
      <span className="relative">
        <Image
          className="lg:scale-[1.015] lg:transition-all lg:group-hover:scale-[1.15] brightness-75 lg:duration-[1500ms]"
          src={imageInfo.url}
          alt={imageAltText ? imageAltText : imageInfo.alternativeText}
          layout="responsive"
          objectFit="cover"
          width={`100%`}
          height={fullHeight ? '128%' : '74.5%'}
          blurDataURL="/assets/blurred.webp"
          placeholder="blur"
        />
      </span>
      <Link href={`/case-study/${redirectLink}`} passHref>
        <a style={{ color: fontColor }}>
          {isWinner && (
            <span
              className="w-[7.3125rem] h-[1.875rem] bg-secondaryGradient absolute left-0 top-[1.875rem] rounded-r-[50px] flex items-center justify-end pr-[0.8125rem] pointer-events-none"
              data-testid="winner-tag"
            >
              WINNER
            </span>
          )}

          <span className="flex flex-col absolute left-[1.875rem] lg:left-[3.75rem] bottom-[0] lg:bottom-[2.8125rem] max-w-[80%]">
            <span
              className={`flex flex-col mb-0 lg:mb-[-1.125rem] lg:group-hover:mb-[1.125rem] duration-[800ms]`}
            >
              <span
                className={`text-[1rem] leading-[1rem] tracking-[0.1em] font-medium `}
                data-testid="company-name"
              >
                {companyName}
              </span>
              {!!titleText && titleText.length && (
                <h3
                  className={`text-[1.5rem] lg:text-[1.875rem] line-clamp line-clamp-3 leading-[1.3] lg:leading-[1.26]} mt-[1.125rem]`}
                  data-testid="card-title"
                >
                  {titleText.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span key={ind} className="font-semibold">
                          {' ' + titleText[ind] + ' '}
                        </span>
                      );
                    } else {
                      return <span key={ind}>{titleText[ind]}</span>;
                    }
                  })}
                </h3>
              )}
            </span>
            <span
              className={`opacity-0 lg:group-hover:opacity-[1] duration-700 text-[1rem] leading-[1rem] tracking-[0.1em] font-medium`}
              data-testid="card-subtitle"
            >
              {subTitle}
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
};
