import React, { useEffect, useState } from 'react';
import { IContentListSection } from '@src/types/compound';
import { ContentBlock } from '../content-block';
import {
  fontColorSelector,
  getStrapiMediaUrl,
  sectionPaddingClassSelector,
} from '@src/utils';
import Styles from './index.module.css';
import { useInView } from 'react-intersection-observer';

export const ContentListSection = ({
  bgType,
  sectionPadding,
  contentHead,
  isNumber = false,
  logoPosition = 'left',
  contentList,
}: IContentListSection) => {
  // this will control the view port visible part
  const { inView: sectionInView, ref: sectionRef } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [isChangeBackground, setIsChangeBackground] = useState(false);
  const [bgThemeType, setBgThemeType] = useState('default');

  // control the inview tracking part
  useEffect(() => {
    (isChangeBackground || sectionInView) && setBgThemeType(bgType);
  }, [isChangeBackground, sectionInView, bgType]);
  return (
    <div
      style={{
        color: fontColorSelector(bgType),
      }}
      onMouseEnter={() => setIsChangeBackground(true)}
      className={` ${Styles['section']} ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <span className={`${Styles[bgType]}`}>
        <span
          className={`${Styles['section-hover-bg']} ${
            (isChangeBackground || sectionInView) && Styles['section-hover']
          }`}
        ></span>
      </span>
      <div
        ref={sectionRef}
        className="container flex flex-col lg:flex-row justify-between "
      >
        <div className="w-full lg:max-w-[50%]">
          <div className="sticky top-[120px]">
            <ContentBlock {...contentHead} sectionBgType={bgThemeType} />
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-x-[2.5rem] lg:gap-y-[5rem] lg:max-w-[39%]  overflow-x-scroll hide-overflow-scrollbar mt-[3.125rem] lg:mt-0">
          {!!contentList &&
            !!contentList.length &&
            contentList.map((listProps, ind) => {
              const logoData = getStrapiMediaUrl(listProps.logo);
              return (
                <div key={ind} className="w-[73%] lg:w-full">
                  <ContentBlock
                    {...listProps}
                    ctaLink={{
                      ctaLink: listProps.contentCtaLink,
                      ctaText: listProps.contentCtaText,
                      parentBgType: bgThemeType,
                    }}
                    logo={logoData.url}
                    logoAlt={
                      listProps.logoAlt
                        ? listProps.logoAlt
                        : logoData.alternativeText
                    }
                    isNumber={isNumber}
                    number={ind + 1}
                    logoPosition={logoPosition}
                    sectionBgType={bgThemeType}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
