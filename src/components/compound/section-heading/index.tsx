//  Internal Imports
import { ISectionHeading } from '@src/types/compound';
import { CtaLink } from '@src/components/root/cta-link';

//SectionHeading
export const SectionHeading = ({
  title,
  subTitle,
  description,
  ctaInfo,
  isCenterMobileView,
}: ISectionHeading) => {
  return (
    <div
      className={`grid gap-5 lg:flex lg:justify-between lg:items-center lg:flex-wrap  ${
        isCenterMobileView ? 'max-md:text-center' : ''
      }`}
    >
      <div className="lg:flex-1 lg:max-w-[70%]">
        {subTitle && (
          <span className="block uppercase text-sm tracking-[.2em] mb-1">
            {subTitle}
          </span>
        )}
        {title && (
          <h2 className="text-[1.375rem] lg:text-[1.625rem] font-normal leading-[1.5]">
            {title}
          </h2>
        )}
        {description && <p className="leading-[1.75rem] mt-5">{description}</p>}
      </div>
      {ctaInfo && ctaInfo.ctaText && (
        <div>
          <CtaLink
            ctaLink={ctaInfo?.ctaLink}
            parentBgType={ctaInfo?.parentBgType}
            ctaText={ctaInfo?.ctaText}
          />
        </div>
      )}
    </div>
  );
};
