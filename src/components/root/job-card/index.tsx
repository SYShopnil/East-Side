import Link from 'next/link';
import { IJobCard } from '@src/types/root';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import { LinkedInIcon } from '../icons/linkedin-icon';

export const JobCard = ({
  attributes: { linkedInLink, slug, title, subTitle },
  bgType,
}: IJobCard) => {
  return (
    <div
      className="flex flex-col gap-[12px] px-[25px] py-[44px] lg:px-[50px] lg:py-[55px]  lg:gap-[18px]"
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
    >
      <div className="flex items-center">
        <Link href={linkedInLink} passHref>
          <a>
            <LinkedInIcon />
          </a>
        </Link>
        <p
          className="text-[12px]  leading-[16px] font-[500] tracking-[0.1em] uppercase lg:text-[16px] ml-[10px]"
          data-testid="job-card-subTitle"
          style={{ color: fontColorSelector(bgType) }}
        >
          {subTitle}
        </p>
      </div>
      <div>
        <Link href={`careers/${slug}`}>
          <a>
            <h2
              className="font-[600] text-[22px] leading-[33px] lg:text-[30px] lg:leading-[38px]"
              data-testid="job-card-title"
              style={{ color: fontColorSelector(bgType) }}
            >
              {title}
            </h2>
          </a>
        </Link>
      </div>
    </div>
  );
};
