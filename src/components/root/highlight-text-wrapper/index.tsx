import { IFooter } from '@src/types/compound';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './index.module.css';

interface IHighlightTextWrapper extends Pick<IFooter, 'bgType'> {
  ind: number;
  titleString: string[];
  delay?: number;
}
export const HighlightTextWrapper = ({
  ind,
  titleString,
  bgType,
  delay = 100,
}: IHighlightTextWrapper) => {
  const { ref: highlightTextRef, inView: isShowAnimation } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    trackVisibility: true,
    delay: delay,
  });
  const text = `${' ' + titleString[ind] + ' '}`;
  return (
    <span
      ref={highlightTextRef}
      key={ind}
      className={`font-bold ${isShowAnimation && Styles['parentSpan']} ${
        Styles[bgType]
      } lg:leading-[4.1rem] relative`}
    >
      {text}
      <span
        className={`${isShowAnimation && Styles['child-span-animation']} ${
          Styles['childSpan']
        } lg:leading-[4.1rem]`}
      >
        {text}
      </span>
    </span>
  );
};
