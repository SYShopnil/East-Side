import Image from 'next/image';
import { ITestimonial } from '@src/types/compound';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import { getStrapiMediaUrl } from '@src/utils/strapi';
import { sectionPaddingClassSelector } from '@src/utils/sectionPaddingClassSelector';
import { OnAppearBottomToTopAnimation } from '@src/components/root/onAppearBottomToTopAnimation';
import { useInView } from 'react-intersection-observer';

export const Testimonial = ({
  sectionPadding,
  bgType,
  quote,
  quoteeName,
  partnerLogoAlt,
  partnerLogoUrl,
  quoteeCompanyLogoAlt,
  quoteeCompanyLogoUrl,
  quoteeDesignation,
  quoteeHeaderImageAlt,
  quoteeHeaderImageUrl,
  subTitle,
  isRoot = true,
  isLogoPanelWithTestimonial = false,
  isAnimated = true,
}: ITestimonial) => {
  const bgColor = backgroundClassSelector(bgType);
  const fontColor = fontColorSelector(bgType);

  /**
   *
   * Control the on appear part base on view port
   *
   */
  const { ref, inView }: any = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const Styles = {
    background: bgColor,
    color: fontColor,
    '--bgColor': `${bgColor}`,
    // minHeight: isLogoPanelWithTestimonial && '68.5rem',
    display: isLogoPanelWithTestimonial && 'flex',
    justifyContent: isLogoPanelWithTestimonial && 'center',
    alignItems: isLogoPanelWithTestimonial && 'center',
  } as React.CSSProperties;

  let partnerLogoInfo = getStrapiMediaUrl(partnerLogoUrl);
  let companyLogoInfo = getStrapiMediaUrl(quoteeCompanyLogoUrl);
  let quoteeImageInfo = getStrapiMediaUrl(quoteeHeaderImageUrl);
  let hasQuoteeHeaderImage = quoteeImageInfo.width === 0 ? false : true;
  return (
    <div
      className={`${hasQuoteeHeaderImage ? 'lg:container' : null} `}
      ref={isAnimated && ref}
    >
      <div
        className={`${
          hasQuoteeHeaderImage ? 'flex flex-col lg:flex-row' : null
        } `}
      >
        {/* Quotee Header Image */}
        {hasQuoteeHeaderImage && (
          <div className={`relative w-[100%] lg:w-[90%] pb-[100%] lg:pb-[25%]`}>
            <Image
              src={quoteeImageInfo.url}
              alt={
                quoteeHeaderImageAlt
                  ? quoteeHeaderImageAlt
                  : quoteeImageInfo.alternativeText
              }
              layout="fill"
              objectFit="cover"
              priority={true}
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
            />
          </div>
        )}

        {/* Testimonial */}
        <div
          className={`content-section ${sectionPaddingClassSelector(
            sectionPadding?.paddingY
          )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)} ${
            isLogoPanelWithTestimonial && 'min-h-0 lg:min-h-[68.5rem]'
          }`}
          style={Styles}
        >
          <OnAppearBottomToTopAnimation
            isAppear={isAnimated && inView}
            isFunctional={isAnimated}
          >
            <div className={`container`} data-testid="quote-container">
              <div className="content-wrappper text-center">
                {subTitle && (
                  <span
                    className={`max-w-[420px] block sub-title text-sm leading-[1.3125rem] tracking-[0.2em]  mx-auto`}
                    data-testid="testimonial-sub-title"
                  >
                    {subTitle}
                  </span>
                )}

                {partnerLogoInfo.url && (
                  <div
                    className={`partner-logo relative mb-[3.3125rem] lg:mb-[2.5rem] mt-[2.4375rem] lg:mt-[3.125rem] mx-auto ${
                      fontColor === '#FFFFFF' ? 'convert-to-white' : ''
                    }`}
                  >
                    <Image
                      src={partnerLogoInfo.url}
                      alt={
                        partnerLogoAlt
                          ? partnerLogoAlt
                          : partnerLogoInfo.alternativeText
                      }
                      width={partnerLogoInfo.width}
                      height={partnerLogoInfo.height}
                      blurDataURL="/assets/blurred.webp"
                      placeholder="blur"
                    />
                  </div>
                )}

                <p
                  className={`testimonial-quote  ${
                    isRoot && !hasQuoteeHeaderImage
                      ? 'text-[1.125rem] lg:text-[1.875rem]'
                      : 'text-[1.125rem] lg:text-[1.25rem]'
                  }  leading-[1.77]  lg:leading-[1.83] mb-[2.5rem] lg:mb-[1.75rem]  lg:max-w-[88%] mx-auto text-center`}
                  data-testid="testimonial-quote"
                >
                  {quote}
                </p>

                <span
                  className="quotee-name block font-semibold leading-4 tracking-[0.2em] mb-[0.375rem] text-center"
                  data-testid="testimonial-quotee-name"
                >
                  {quoteeName}
                </span>

                <span
                  className="quotee-designation block text-xs leading-4 tracking-[0.2em] uppercase text-center"
                  data-testid="testimonial-quotee-designation"
                >
                  {quoteeDesignation}
                </span>

                {companyLogoInfo.url && (
                  <div
                    className={`relative quotee-company-logo mt-[1.5rem] ${
                      fontColor === '#FFFFFF' ? 'convert-to-white' : ''
                    }`}
                  >
                    <Image
                      src={companyLogoInfo.url}
                      alt={
                        quoteeCompanyLogoAlt
                          ? quoteeCompanyLogoAlt
                          : companyLogoInfo.alternativeText
                      }
                      width={companyLogoInfo.width}
                      height={companyLogoInfo.height}
                      blurDataURL="/assets/blurred.webp"
                      placeholder="blur"
                    />
                  </div>
                )}
              </div>
            </div>
          </OnAppearBottomToTopAnimation>
        </div>
      </div>
    </div>
  );
};
