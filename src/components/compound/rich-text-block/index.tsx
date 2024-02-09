import { useIsBrowser } from '@src/hooks';
import { IRichTextBlock } from '@src/types/compound';
import Image from 'next/image';
import { getStrapiMediaUrl } from '@src/utils';
import { RedirectButton } from '@src/components/root/button/redirect-button';
import { sectionPaddingClassSelector } from '@src/utils/sectionPaddingClassSelector';
import dynamic from 'next/dynamic';
import { ICtaLink } from '@src/types/root';
const CtaLink = dynamic<ICtaLink>(
  import('@src/components/root/cta-link').then((module) => module.CtaLink)
);
const MarkdownComp = dynamic(() => import('@src/components/root/markdown'));
export const RichTextBlock = (props: IRichTextBlock) => {
  const {
    sectionPadding,
    markdown,
    ctaLink,
    button,
    img,
    imageAlt,
    imgPosition,
  } = props;
  const isBrowser = useIsBrowser();
  const { url, alternativeText } = getStrapiMediaUrl(
    img,
    'medium' || 'thumbnail'
  );

  return (
    <div
      className={`overflow-hidden ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div className="container">
        <div className=" flex flex-col md:flex-row  md:justify-center md:items-center gap-[50px] md:gap-[3rem] xl:gap-[5rem]">
          {/* left */}
          <div
            className={`w-full  md:w-1/2 xl:w-[40%] md:mb-0 order-last  ${
              imgPosition === 'left' ? `md:order-last` : 'md:order-first'
            }`}
          >
            <div>
              {isBrowser && (
                <div>
                  <MarkdownComp bgType={'default'} content={markdown} />
                  {/* cta link */}
                  {ctaLink && ctaLink.ctaText && (
                    <div
                      data-testid="content-block-ctalink"
                      className="mt-[19px] lg:mt-[28px]"
                    >
                      <CtaLink
                        ctaLink={ctaLink.ctaLink}
                        ctaText={ctaLink.ctaText}
                      />
                    </div>
                  )}

                  {button && button.buttonText && (
                    <div
                      className="mt-[33px] mx-auto lg:mx-0"
                      data-testid="content-block-button"
                    >
                      <RedirectButton
                        link={button.link}
                        linkOpenNewTab={button.linkOpenNewTab}
                        buttonText={button.buttonText}
                        colorScheme={button.colorScheme}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* right */}
          <div
            className={`${
              !img ? 'hidden lg:block' : ''
            } w-full  md:w-1/2 xl:w-[60%] `}
          >
            {!!url && (
              <div
                className={`${
                  imgPosition === 'left'
                    ? 'ml-[-20%] mr-[-20%] md:mr-[0] md:ml-[-45%]'
                    : 'mr-[-20%] ml-[-20%] md:ml-[0] md:mr-[-45%]'
                } grid image-border gradient-border`}
              >
                <div className="image-border white-border">
                  <Image
                    src={url}
                    alt={imageAlt ? imageAlt : alternativeText}
                    width={750}
                    height={587}
                    layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                    blurDataURL="/assets/blurred.webp"
                    placeholder="blur"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
