import React, { useState } from 'react';
import { IFooter } from '@src/types/compound';
import { RightArrowIcon } from '@src/components/root/icons';

export const LocationColumn = ({ locations }: Pick<IFooter, 'locations'>) => {
  const [footerColumnToggle, setFooterColumnToggle] = useState(false);

  const handleFooterColumnToggler = () => {
    setFooterColumnToggle((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col" data-testid="footer-location-column">
      <div
        className={`flex flex-row justify-between items-center duration-700 cursor-pointer lg:cursor-default ${
          footerColumnToggle ? 'mb-[1.125rem]' : 'mb-0'
        } lg:mb-[1.125rem]`}
      >
        <span
          className="text-[0.75rem] leading-[1rem] tracking-[0.2em] font-semibold uppercase"
          data-testid="footer-column-title"
        >
          {'Our Offices'}
        </span>
        <span
          className={`lg:hidden duration-700 ${
            footerColumnToggle ? 'rotate-90' : 'rotate-45'
          }`}
          onClick={handleFooterColumnToggler}
        >
          <RightArrowIcon iconType="normal" iconFill={'#FFFFFF'} />
        </span>
      </div>

      <div
        className={`flex flex-col ${
          footerColumnToggle ? 'contents' : 'hidden'
        } lg:contents`}
        data-testid="column-items"
      >
        {locations.map(({ attributes }, index) => (
          <span key={index} className="my-[1rem] flex flex-col">
            <div
              className={`text-[0.75rem] leading-[1rem] tracking-[0.2em] uppercase `}
              data-testid="item-text"
            >
              {attributes.city}
            </div>

            <a
              href={`tel:${attributes.phone}`}
              className="text-[0.75rem] leading-[1rem] tracking-[0.2em]"
            >
              {attributes.phone}
            </a>
          </span>
        ))}
      </div>
      <span className="w-full h-[1px] bg-[#FFFFFF] opacity-10 my-[1.875rem] lg:hidden"></span>
    </div>
  );
};
