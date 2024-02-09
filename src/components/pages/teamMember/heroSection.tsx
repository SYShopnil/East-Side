import { IHeroTeamMember } from '@src/types/pages';
import {
  backgroundClassSelector,
  fontColorSelector,
  getStrapiMediaUrl,
} from '@src/utils';
import { LinkedInIcon } from '@src/components/root/icons';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = ({
  bgType,
  subTitle,
  memberName,
  designation,
  linkedInUrl,
  description,
  memberImageUrl,
  memberImageAlt,
}: IHeroTeamMember) => {
  const { url, alternativeText } = getStrapiMediaUrl(
    memberImageUrl,
    'medium' || 'thumbnail'
  );
  return (
    <div
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
      className="relative mb-[60%] md:mb-[5rem]"
      data-testid="hero-team"
    >
      <div
        style={{
          background:
            'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 58.01%)',
        }}
        className={`absolute block w-full h-full translate-y-[-18.4375rem] top-0 bottom-0 left-0 right-0 cursor-default opacity-70`}
      />
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between content-end items-end">
          <div className="max-w-full md:max-w-[50%] mt-[10rem] md:my-[6.125rem]">
            <div className="">
              <div
                className="text-[1rem] md:text-[1.25rem] leading-[1rem] tracking-[0.1em] uppercase "
                data-testid="sub-title"
              >
                {subTitle}
              </div>
              <h1
                className="text-[2.25rem] md:text-[4.375rem] leading-[2.4375rem] md:leading-[4.625rem] mt-[1.25rem] md:mt-[1.125rem] "
                data-testid="member-name"
              >
                {memberName}
              </h1>
              <div
                className="text-[1rem] md:text-[1.25rem] leading-[1rem] md:leading-[1.875rem] tracking-[0.1em] md:tracking-normal mt-[1.25rem] md:mt-[1.125rem] "
                data-testid="designation"
              >
                {designation}
              </div>
              <div className="mt-[1.375rem] md:mt-[2.1875rem]">
                <Link href={linkedInUrl} passHref>
                  <a data-testid="linkedin">
                    <LinkedInIcon />
                  </a>
                </Link>
              </div>
              <p
                className="text-[1rem] leading-[1.5rem] mt-[1.375rem] md:mt-[2.1875rem] "
                data-testid="description"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="max-w-full md:max-w-[50%] translate-y-[55%] mt-[-55%] md:translate-y-[10%] md:mt-[3.75rem]">
            <Image
              src={url}
              alt={memberImageAlt ? memberImageAlt : alternativeText}
              width={500}
              height={650}
              objectFit="cover"
              data-testid="member-image"
              priority={true}
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
