import { IFaq } from '@src/types/root';
import { sectionPaddingClassSelector } from '@src/utils';
import React, { useState } from 'react';
import { MinusIcon, PlushIcon } from '../icons';

export const Faq = (props: IFaq) => {
  const [openIndex, setOpenIndex] = useState<number>();

  const { subTitle, title, faqs, sectionPadding } = props;
  return (
    <section
      className={`${sectionPaddingClassSelector(
        !!sectionPadding?.paddingY ? sectionPadding.paddingY : 'py_120px'
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div className="container">
        {!!title && !!subTitle && (
          <div>
            <p className="text-[14px] leading-[21px] uppercase tracking-[.2em]">
              {subTitle}
            </p>
            <p className="text-[26px] leading-[39px]">{title}</p>
            <div className="border-b border-[#212121]/10 py-[30px]"></div>
          </div>
        )}

        <div>
          {!!faqs &&
            !!faqs.length &&
            faqs.map(({ question, answer }, i) => {
              return (
                <div
                  className="border-b border-[#212121]/10 py-[30px] text-[#212121] cursor-pointer"
                  key={i}
                  onClick={() => {
                    let val = openIndex === i ? undefined : i;
                    setOpenIndex(val);
                  }}
                  data-testid="faq-title"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[20px] leading-[30px]">{question}</p>
                    <span>
                      {openIndex == i ? (
                        <span data-testid="faq-minus-icon">
                          <MinusIcon />
                        </span>
                      ) : (
                        <span data-testid="faq-plus-icon">
                          <PlushIcon />
                        </span>
                      )}
                    </span>
                  </div>
                  {openIndex === i && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="pl-[20px] pt-[20px] text-[14px] leading-[1.5rem] text-justify"
                      data-testid="faq-subText"
                    >
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
