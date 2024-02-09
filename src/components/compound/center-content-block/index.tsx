import { ICenterContentBlock } from '@src/types/compound';
import { CtaLink, HighlightTextWrapper } from '@src/components/root';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import { sectionPaddingClassSelector } from '@src/utils/sectionPaddingClassSelector';
import { useInView } from 'react-intersection-observer';
import { OnAppearBottomToTopAnimation } from '@src/components/root/onAppearBottomToTopAnimation';

export const CenterContentBlock = ({
  sectionPadding,
  bgType,
  title,
  subText,
  description,
  ctaInfo,
  isRoot = true,
}: ICenterContentBlock) => {
  const bgColor = backgroundClassSelector(bgType);
  const fontColor = fontColorSelector(bgType);
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const Styles = {
    background: bgColor,
    color: fontColor,
    '--bgColor': `${bgColor}`,
  } as React.CSSProperties;

  const descriptionText: string[] = description
    ? description.split('<tg>')
    : [''];

  return (
    <section
      style={Styles}
      data-testid="center-content-container"
      className={`${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(
        sectionPadding?.paddingOff
      )} content-section`}
    >
      <div className="container" ref={ref}>
        <div className="content-wrappper overflow-hidden">
          <OnAppearBottomToTopAnimation isAppear={inView}>
            <div
              className={`flex flex-col justify-center items-center text-center `}
            >
              {title && (
                <h3
                  className="text-[1.375rem] lg:text-[1.625rem] leading-[2.0625rem] lg:leading-[2.4375rem] pb-[1.8125rem] lg:pb-[0.625rem]"
                  data-testid="center-content-title"
                >
                  {title}
                </h3>
              )}
              {subText && (
                <span
                  className="text-sm leading-[1.3125rem] tracking-[0.2em] mb-[2.5rem] max-w-[420px] mx-auto"
                  data-testid="center-content-subtext"
                >
                  {subText}
                </span>
              )}
              <p
                className={`testimonial-quote  ${
                  isRoot
                    ? 'text-[1.125rem] lg:text-[1.875rem]'
                    : 'text-[1.125rem] lg:text-[1.25rem]'
                }  leading-[1.77]  lg:leading-[1.83] ${
                  isRoot ? '' : 'lg:max-w-[88%] mx-auto'
                }`}
                data-testid="center-content-description"
              >
                {!!descriptionText &&
                  !!descriptionText.length &&
                  descriptionText.map((ele, ind) => {
                    if (ind % 2 === 1) {
                      return (
                        <span
                          key={ind}
                          data-testid="center-content-highlighted-text"
                        >
                          <HighlightTextWrapper
                            ind={ind}
                            titleString={descriptionText}
                            bgType={bgType}
                            delay={500}
                          />
                        </span>
                      );
                    } else {
                      return <span key={ind}>{descriptionText[ind]}</span>;
                    }
                  })}
              </p>
              {ctaInfo?.ctaLink && ctaInfo?.ctaText && (
                <div className="mt-[2.3125rem] mt:mb-[3.75rem] ">
                  <CtaLink {...ctaInfo} parentBgType={bgType} />
                </div>
              )}
            </div>
          </OnAppearBottomToTopAnimation>
        </div>
      </div>
    </section>
  );
};
