import React from 'react';
import ModuleStyle from './index.module.css';

interface IOnAppearBottomToTopAnimation {
  children: React.ReactElement;
  isAppear: boolean;
  isFunctional?: boolean;
}

export const OnAppearBottomToTopAnimation = ({
  children,
  isAppear,
  isFunctional = true,
}: IOnAppearBottomToTopAnimation) => {
  return (
    <div
      className={`${
        isFunctional &&
        isAppear &&
        ModuleStyle['center-content-block-inner-wrapper']
      } ${isFunctional && 'invisible'}`}
    >
      {children}
    </div>
  );
};
