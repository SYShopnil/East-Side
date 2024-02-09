import React, { useState } from 'react';
import Link from 'next/link';
import { IFooterColumn } from '@src/types/compound';
import { RightArrowIcon } from '@src/components/root/icons';

export const FooterColumn = ({ columnItems }: IFooterColumn) => {
  const [footerColumnToggle, setFooterColumnToggle] = useState(false);
  const handleFooterColumnToggler = () => {
    setFooterColumnToggle((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col" data-testid="footer-column">
      <div className={`flex flex-col`}>
        {!!columnItems &&
          !!columnItems.length &&
          columnItems.map((item, index) => {
            if (index === 0) {
              return (
                <div
                  className={`flex flex-row justify-between items-center duration-700 cursor-pointer lg:cursor-default ${
                    footerColumnToggle ? 'mb-[1.125rem]' : 'mb-0'
                  } lg:mb-[1.125rem]`}
                  key={index}
                >
                  <Link href={`/${item.itemUrl}` || '#'} passHref>
                    <a
                      className="text-[0.75rem] leading-[1rem] tracking-[0.2em] font-semibold uppercase"
                      data-testid="footer-column-title"
                    >
                      {item.itemText}
                    </a>
                  </Link>
                  <span
                    className={`lg:hidden duration-700 ${
                      footerColumnToggle ? 'rotate-90' : 'rotate-45'
                    }`}
                    onClick={handleFooterColumnToggler}
                  >
                    <RightArrowIcon iconType="normal" iconFill={'#FFFFFF'} />
                  </span>
                </div>
              );
            } else {
              return (
                <div
                  className={`flex flex-col ${
                    footerColumnToggle ? 'contents' : 'hidden'
                  } lg:contents`}
                  key={index}
                >
                  <Link href={`/${item.itemUrl}` || '#'} passHref>
                    <a
                      className={`text-[0.75rem] leading-[1rem] tracking-[0.2em] my-[1rem] uppercase ${
                        item.itemUrl
                          ? 'cursor-pointer'
                          : 'cursor-default pointer-events-none'
                      } `}
                      data-testid={`footer-item-${index}`}
                    >
                      {item.itemText}
                    </a>
                  </Link>
                </div>
              );
            }
          })}
      </div>
      <span className="w-full h-[1px] bg-[#FFFFFF] opacity-10 my-[1.875rem] lg:hidden"></span>
    </div>
  );
};
