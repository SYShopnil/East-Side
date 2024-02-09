import React from 'react';
import Styles from './index.module.scss';

interface ICardTitle {
  text: string;
  isBlack: boolean;
  isLocation?: boolean;
}

export const CardTitle = ({ text, isBlack, isLocation }: ICardTitle) => {
  return (
    <span
      data-text={text}
      className={`${Styles['title']} ${
        isBlack ? Styles['black'] : Styles['white']
      } inline-flex items-center gap-[.375rem]`}
    >
      <span className={Styles['title-inner']}>
        {isLocation ? (
          <>
            <span>Eastside CO</span>
            <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
            <span>{text}</span>
          </>
        ) : (
          text
        )}
      </span>
    </span>
  );
};
