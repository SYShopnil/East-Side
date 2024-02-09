import React, { useState } from 'react';
import Link from 'next/link';
import { RightArrowIcon } from '@src/components/root/icons';
import { ICtaLink } from '@src/types/root';
import { fontColorSelector } from '@src/utils';
import Styles from './ctalink.module.css';

export const CtaLink = ({
  ctaLink,
  ctaText,
  parentBgType = 'default',
  showUnderline = true,
}: ICtaLink) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const ctaColor = fontColorSelector(parentBgType!);

  const iconColorType = isHover
    ? parentBgType === 'gradient_blue'
      ? 'gradient_green'
      : 'gradient_blue'
    : 'normal';

  return (
    <Link href={ctaLink ? ctaLink : '/'} passHref>
      <a
        style={{ color: isHover ? '' : ctaColor }}
        className={`esc-cta-link ${
          Styles['esc-cta-link']
        } relative inline-flex items-center gap-[1.125rem] text-base leading-6 font-semibold group bg-clip-text hover:text-[#000]/[0] ${
          iconColorType === 'gradient_green'
            ? 'bg-primaryGradient'
            : 'bg-secondaryGradient'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="mb-[0.4375rem]">{ctaText}</span>
        <span
          className={`mb-[0.4375rem] esc-cta-link-icon ${Styles['esc-cta-link-icon']}`}
        >
          <RightArrowIcon
            iconType={iconColorType}
            iconFill={ctaColor || '#212121'}
          />
        </span>
        {showUnderline && (
          <span
            style={{
              background: isHover ? '' : ctaColor,
            }}
            className={`absolute bottom-0 left-0 w-full h-[2px] ${
              iconColorType === 'gradient_green'
                ? 'group-hover:bg-primaryGradient'
                : 'group-hover:bg-secondaryGradient'
            }`}
          ></span>
        )}
      </a>
    </Link>
  );
};
