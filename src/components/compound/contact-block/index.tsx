import React, { useEffect, useState } from 'react';
import { IContactBlock } from '@src/types/compound';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import { ContactNumber } from '../icons/contact-number';
import { EmailAddress } from '../icons/email-address';
import Styles from './index.module.css';
import { ICtaLink, IRedirectButton } from '@src/types/root';
import dynamic from 'next/dynamic';
import { useViewport } from '@src/hooks';
const CtaLink = dynamic<ICtaLink>(
  import('@src/components/root/cta-link').then((module) => module.CtaLink)
);
const RedirectButton = dynamic<IRedirectButton>(
  import('@src/components/root/button/redirect-button').then(
    (module) => module.RedirectButton
  )
);
export const ContactBlock = (props: IContactBlock) => {
  const {
    isSmall,
    isRightAlign,
    bgType,
    subTitle,
    title,
    description,
    emailAddress,
    contactNumber,
    ctaLink,
    buttonOne,
    buttonTwo,
    isAnimated = false,
  } = props;
  const { width: screenInnerWidth } = useViewport();
  const background = backgroundClassSelector(bgType);
  const [isHover, setIsHover] = useState(false);
  const rootStyle = isAnimated
    ? { color: fontColorSelector(bgType) }
    : { background: background, color: fontColorSelector(bgType) };
  /**
   *
   * This useEffect will set the screen width dynamically in global.css file
   */
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--screen-size',
      `${screenInnerWidth}px`
    );
  }, [screenInnerWidth]);
  return (
    <div
      className={`${
        isSmall ? 'py-[34px] lg:py-[28px]' : 'py-[60px] lg:py-[100px]'
      } ${Styles['contactBlockWrapper']} overflow-hidden `}
      style={rootStyle}
    >
      <div
        className={`container ${isAnimated && Styles['contactBlockContainer']}`}
      >
        <div
          className={`flex flex-col lg:flex-row gap-[22px] lg:gap-[84px] lg:items-center  ${
            isRightAlign ? 'justify-between' : ''
          }`}
        >
          {/* left */}
          <div
            className={`flex flex-col ${
              isSmall ? 'xl:max-w-[680px]' : 'lg:max-w-[566px]'
            }`}
          >
            {subTitle && (
              <span
                className="text-[14px] leading-[16px] uppercase tracking-[0.2em]"
                data-testid="contact-block-subtitle"
                style={{ color: fontColorSelector(bgType) }}
              >
                {subTitle}
              </span>
            )}

            <h3
              className={`${
                isSmall
                  ? 'text-[1.125rem] leading-[1.5]'
                  : 'text-[26px] leading-[39px] mt-[11px]'
              }`}
              data-testid="contact-block-title"
              style={{ color: fontColorSelector(bgType) }}
            >
              {title}
            </h3>

            <p
              className={`${
                isSmall
                  ? 'text-sm mt-[.5rem]'
                  : 'text-[16px] leading-[28px] mt-[18px]'
              } `}
              data-testid="contact-block-description"
              style={{ color: fontColorSelector(bgType) }}
            >
              {description}
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col">
            {/* top */}
            <div
              className={`flex flex-col ${
                (!emailAddress || !contactNumber) && 'hidden'
              }`}
            >
              {/* email */}
              <div className="flex flex-wrap gap-[8px] lg:gap-[12px] items-center">
                <span>
                  <EmailAddress />
                </span>
                <span
                  className="text-[16px] lg:text-[18px] leading-[28px]"
                  data-testid="contact-block-email"
                  style={{ color: fontColorSelector(bgType) }}
                >
                  {emailAddress}
                </span>
              </div>
              {/* phone */}

              <div className="mt-[25px] lg:mt-[41px] flex flex-wrap gap-[8px] lg:gap-[12px] items-center">
                <span>
                  <ContactNumber />
                </span>
                <span
                  className="text-[16px] lg:text-[18px] leading-[28px]"
                  data-testid="contact-block-number"
                  style={{ color: fontColorSelector(bgType) }}
                >
                  {contactNumber}
                </span>
              </div>
            </div>

            {/* bottom */}
            <div
              className={`flex flex-wrap flex-col lg:flex-row lg:items-center ${
                (buttonOne || buttonTwo) && 'gap-[25px]'
              } ${(emailAddress || contactNumber) && 'mt-[30px]'}`}
            >
              {/* left */}
              <div className="content-block-buttons grid gap-[22px] lg:gap-[34px]  w-full lg:w-auto">
                {/* top */}
                {buttonOne && (
                  <div
                    className={`grid `}
                    data-testid="contact-block-button-one"
                  >
                    <div className={`relative inline-block`}>
                      <div
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                      >
                        <RedirectButton {...buttonOne} isFooter={true} />
                      </div>

                      {isAnimated && (
                        <span
                          className={`${Styles['contactAnimatedBgWrapper']} ${
                            isHover
                              ? Styles['contactAnimatedBgWrapperOnHover']
                              : Styles['contactAnimatedBgWrapperHoverOut']
                          }`}
                        ></span>
                      )}
                    </div>
                  </div>
                )}

                {/* bottom */}
                {buttonTwo && (
                  <div className="grid " data-testid="contact-block-button-two">
                    <div>
                      <RedirectButton {...buttonTwo} />
                    </div>
                  </div>
                )}
              </div>
              {/* right */}
              <div className="w-full lg:w-auto">
                {!!ctaLink && ctaLink.ctaText && (
                  <div
                    className="mx-auto lg:mx-0 text-center lg:text-left"
                    data-testid="contact-block-button-ctalink"
                  >
                    <CtaLink
                      ctaLink={ctaLink.ctaLink}
                      ctaText={ctaLink.ctaText}
                      parentBgType={bgType}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
