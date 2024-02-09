import { useIsBrowser } from '@src/hooks';
import { sectionPaddingClassSelector } from '@src/utils';
import { RedirectButton } from '@src/components/root/button/redirect-button';
import { IRichTextWithInfo } from '@src/types/compound';
import { StartIcon } from '../icons/star-icon';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ICtaLink } from '@src/types/root';

const CtaLink = dynamic<ICtaLink>(
  import('@src/components/root/cta-link').then((module) => module.CtaLink)
);
const MarkdownComp = dynamic(() => import('@src/components/root/markdown'));

export const RichTextWithInfo = ({
  sectionPadding,
  firstColumnContent,
  firstColumnButtons,
  appReviewLink,
  appReviewText,
  totalReview,
  secondColumnInfoList,
  secondColumnButtons,
  RichTextCtaInfo,
}: IRichTextWithInfo) => {
  const isBrowser = useIsBrowser();

  return (
    <div
      className={`overflow-hidden ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div className="lg:container">
        <div className="flex flex-col md:flex-row  md:justify-center md:items-center md:gap-[3rem] xl:gap-[5rem]">
          {/* left */}
          <div className={`w-full  md:w-1/2 xl:w-[40%] mb-[52px] md:mb-0`}>
            <div className="container lg:p-0 lg:m-0">
              <div className={`mb-[1.875rem] md:mb-[0] `}>
                {isBrowser && (
                  <div>
                    <MarkdownComp
                      bgType={'default'}
                      content={firstColumnContent}
                    />
                  </div>
                )}
              </div>

              <div className="grid gap-[15px] md:flex  md:gap-[20px] md:flex-col md:items-start w-full lg:w-auto mt-[38px] mr-[200px]">
                {!!firstColumnButtons &&
                  !!firstColumnButtons.length &&
                  firstColumnButtons.map((btn, i) => (
                    <RedirectButton {...btn} key={i} />
                  ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className={`w-full  md:w-1/2 xl:w-[60%] `}>
            <div className="">
              {/* <div className={`${'md:mr-[-45%]  md:ml-[0]  '} bg-white grid`}> */}
              <div className={`${'md:mr-[-45%]  md:ml-[0]'} bg-white grid`}>
                <div className="px-[40px] lg:px-[85px] py-[37px] lg:py-[107px]">
                  {!!secondColumnInfoList &&
                    !!secondColumnInfoList.length &&
                    secondColumnInfoList.map(({ title, subText }, i) => (
                      <div
                        key={i}
                        className={`flex flex-col ${
                          i === 0 ? '' : 'mt-[38px]'
                        }`}
                      >
                        <h2 className={`font-[600] text-[20px] leading-[30px]`}>
                          {title}
                        </h2>
                        <span
                          className={`text-[14px] leading-[23px] mt-[10px] whitespace-pre-wrap`}
                        >
                          {subText}
                        </span>
                      </div>
                    ))}

                  {/* review */}
                  {totalReview && appReviewLink && (
                    <div className={`flex flex-col mt-[38px]`}>
                      <h2 className={`font-[600] text-[20px] leading-[30px]`}>
                        Reviews
                      </h2>
                      <div className={`flex gap-[10px] mt-[10px]`}>
                        {/* star */}
                        <div className="flex ">
                          {[...Array(5)].map((i) => (
                            <div key={Math.random()}>
                              <StartIcon />
                            </div>
                          ))}
                        </div>
                        {/* content*/}
                        <div>
                          <Link href={appReviewLink!}>
                            <a className="underline text-[16px] leading-[24px]">
                              {totalReview} {' reviews'}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* buttons */}
                  <div className="grid gap-[20px] md:flex  md:gap-[25px] md:flex-col md:items-start w-full lg:w-auto mt-[38px] mr-[200px]">
                    {RichTextCtaInfo?.ctaText && (
                      <CtaLink {...RichTextCtaInfo} showUnderline={false} />
                    )}
                    {!!secondColumnButtons &&
                      !!secondColumnButtons.length &&
                      secondColumnButtons.map((btn, i) => (
                        <RedirectButton {...btn} key={i} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
