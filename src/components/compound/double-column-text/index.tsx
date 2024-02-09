import {
  backgroundClassSelector,
  fontColorSelector,
  highlightedTextStyleSelector,
  sectionPaddingClassSelector,
} from '@src/utils';
import { IDoubleColumnText } from '@src/types/compound';
import { useIsBrowser } from '@src/hooks';
import { CtaLink } from '@src/components/root/cta-link';
import dynamic from 'next/dynamic';
const MarkdownComp = dynamic(() => import('@src/components/root/markdown'));

// const columnWidth = 'lg:flex-[0_0_50%]';

export const DoubleColumnText = (props: IDoubleColumnText) => {
  const {
    bgType,
    title,
    subText,
    firstColumn,
    secondColumn,
    ctaLink,
    sectionPadding,
    ctaShowinFirstColumns = false,
  } = props;
  const isBrowser = useIsBrowser();

  const highlightedTextStyle = highlightedTextStyleSelector(bgType);
  const titleArr: string[] = title ? title.split('<tg>') : [''];
  return (
    <div
      className={`${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)} `}
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
    >
      <div className="flex flex-col container">
        {/* head */}
        <div className="flex flex-col items-center">
          {title && (
            <h2
              className={`text-center  ${
                titleArr.length === 3
                  ? 'text-transparent bg-clip-text text-[30px] lg:text-[40px] leading-[45px] lg:leading-[60px] font-[500]'
                  : 'text-[22px] lg:text-[26px] leading-[33px] lg:leading-[39px]'
              }`}
              data-testid="double-column-title"
              style={{
                color: `${
                  titleArr.length === 1 ? fontColorSelector(bgType) : null
                }`,
                backgroundImage: `${
                  titleArr.length === 3 ? highlightedTextStyle : null
                }`,
              }}
            >
              {titleArr.length === 3 ? titleArr[1] : titleArr[0]}
            </h2>
          )}
          {subText && (
            <span
              className="text-center max-w-[542px] text-[16px] leading-[28px] mt-[15px] lg:mt-[17px]"
              data-testid="double-column-subText"
              style={{
                color: fontColorSelector(bgType),
              }}
            >
              {subText}
            </span>
          )}
        </div>
        {/* body */}
        {isBrowser && (
          <div
            className={`grid ${
              secondColumn ? 'lg:grid-cols-2 gap-[28px] lg:gap-[58px]' : ''
            }   ${
              (!!title && !!title.length) || (!!subText && !!subText.length)
                ? 'mt-[16px] lg:mt-[43px]'
                : 'mt-[0px] lg:mt-[0px]'
            } `}
          >
            {/* col 1 */}
            <div data-testid="double-column-first">
              <MarkdownComp bgType={bgType} content={firstColumn} />
              {ctaShowinFirstColumns && !!ctaLink && !!ctaLink.ctaText && (
                <div
                  data-testid="content-block-ctalink"
                  className="mt-[19px] lg:mt-[28px]"
                >
                  <CtaLink
                    ctaLink={ctaLink.ctaLink}
                    ctaText={ctaLink.ctaText}
                    parentBgType={bgType}
                  />
                </div>
              )}
            </div>

            {/* col 2 */}
            <div data-testid="double-column-second">
              <MarkdownComp bgType={bgType} content={secondColumn} />
              {!ctaShowinFirstColumns && !!ctaLink && !!ctaLink.ctaText && (
                <div
                  data-testid="content-block-ctalink"
                  className="mt-[19px] lg:mt-[28px]"
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
        )}
      </div>
    </div>
  );
};
