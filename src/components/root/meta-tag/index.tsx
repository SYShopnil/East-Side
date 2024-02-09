import React from 'react';
import Styles from './index.module.css';

interface IMetaTag {
  metaTag: string;
}

export const MetaTag = ({ metaTag }: IMetaTag) => {
  return (
    <span
      className={`p-[4px_11px] min-h-[30px] bg-[#f9f9f9]  backdrop-blur-[2px] cursor-pointer rounded-[4px] inline-flex items-center justify-center hover:text-[#FFFF] ${
        Styles[`metaTag-animation`]
      }`}
    >
      {metaTag}
    </span>
  );
};
