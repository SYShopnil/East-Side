import Image from 'next/image';

import { CtaLink } from '@src/components/root/cta-link';
import { IContentBlock } from '@src/types/compound';
import { fontColorSelector } from '@src/utils';
const ContentBlockList = (props: IContentBlock) => {
  const {
    sectionBgType = 'gradient_blue',
    subTitle,
    description,
    ctaLink,
    slug,
    logo,
    logoAlt,
    logoPosition,
    isSlider,
    number,
    isNumber = false,
  } = props;
  const fontColor = fontColorSelector(sectionBgType);
  const logoColor =
    fontColor === '#FFFFFF' ? 'convert-to-white' : 'convert-to-black';
  return (
    <div
      className={`flex items-start gap-[15px] ${
        !isSlider && logoPosition === 'top' ? 'text-center lg:text-left' : null
      } ${logoPosition === 'top' ? 'flex-col w-max max-w-full' : 'flex-row'}`}
      data-testid="content-block-logo-position"
      style={{
        color: fontColor,
        transition: 'all 500ms ',
      }}
    >
      {logo && (
        <div
          className={`relative p-[20px] ${logoColor} ${
            !isSlider && logoPosition === 'top' ? 'w-full lg:w-auto' : null
          } ${logoPosition === 'left' ? 'hidden lg:block' : ''} `}
          data-testid="content-block-logo"
        >
          <Image src={logo!} layout="fill" alt={logoAlt} objectFit="contain" />
        </div>
      )}

      {isNumber && !logo && (
        <div
          className={`relative lg:block pt-[5px] ${
            !isSlider && logoPosition === 'top' ? 'w-full lg:w-auto' : null
          } ${logoPosition === 'left' ? 'hidden lg:block' : ''}  `}
          data-testid="content-block-number"
        >
          <span className="text-[10px]  tracking-[0.1em] ">{`/${
            number! > 9 ? number : `0${number}`
          }`}</span>
        </div>
      )}

      {/* <div className={`flex flex-col ${logoPosition === 'top' ? 'items-center lg:items-start' : 'w-max'}`}> */}
      <div
        className={`flex flex-col ${
          logoPosition === 'top'
            ? !isSlider
              ? 'items-center lg:items-start'
              : null
            : 'w-max'
        } duration-[500ms] ease`}
      >
        {/* <div className={`flex flex-col ${(logoPosition === 'top' && isSlider)? '' : 'items-center lg:items-start w-max'}`}> */}

        <div className="flex items-center duration-[500ms] ease">
          {logo && (
            <div
              className={`relative p-[20px] ${logoColor} ${
                logoPosition === 'left'
                  ? 'block mr-[11px] md:hidden lg:mr-0'
                  : 'hidden'
              } duration-[500ms] ease`}
              // data-testid="content-block-logo"
            >
              <Image
                src={logo!}
                layout="fill"
                alt={logoAlt}
                objectFit="contain"
              />
            </div>
          )}

          {isNumber && !logo && (
            <div
              className={`relative ${
                logoPosition === 'left'
                  ? 'block mr-[11px] md:hidden lg:mr-0'
                  : 'hidden'
              } duration-[500ms] ease`}
              data-testid="content-block-number"
            >
              <span className="text-[10px]  tracking-[0.1em] duration-[500ms] ease">{`/${
                number! > 9 ? number : `0${number}`
              }`}</span>
            </div>
          )}

          <span
            className="text-[20px] font-[500] leading-[30px] duration-[500ms] ease"
            data-testid="content-block-subtitle"
            style={{
              color: fontColorSelector(sectionBgType),
            }}
          >
            {subTitle}
          </span>
        </div>

        {/* <div className="flex items-center">
          <div
            className={`relative p-[20px] hello ${
              logoPosition === 'left' ? 'block mr-[11px]' : 'md:hidden lg:mr-0'
            } ${logoPosition === 'top' ? 'hidden' : ''}`}
            data-testid="content-block-logo"
          >
            <Image src={logo!} layout="fill" alt="logo" objectFit="contain" />
          </div>

          <span
            className="text-[20px] font-[500] leading-[30px]"
            data-testid="content-block-subtitle"
            style={{
              color: fontColorSelector(sectionBgType),
            }}
          >
            {subTitle}
          </span>
        </div> */}

        <p
          className="text-[14px]  mt-[20px] whitespace-pre-wrap duration-[500ms] ease"
          data-testid="content-block-description"
          style={{
            color: fontColorSelector(sectionBgType),
          }}
        >
          {description}
        </p>
        {ctaLink && ctaLink.ctaText && (
          <div
            data-testid="content-block-ctalink"
            className="mt-[19px] lg:mt-[28px] duration-[500ms] ease"
          >
            <CtaLink {...ctaLink} parentBgType={sectionBgType} />
          </div>
        )}
        {slug && (
          <div
            data-testid="content-block-ctalink"
            className="mt-[19px] lg:mt-[28px] duration-[500ms] ease"
          >
            <CtaLink
              ctaLink={`app/${slug}`}
              ctaText="Discover more"
              parentBgType={sectionBgType}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBlockList;
