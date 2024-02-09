// External Imports
import Link from 'next/link';

// Internal Imports
import { IRedirectButton } from '@src/types/root';
import Styles from './button.module.css';
import { useEffect, useRef, useState } from 'react';
// RedirectButton
export const RedirectButton = ({
  link,
  linkOpenNewTab = false,
  buttonText,
  colorScheme = 'blue_over_green',
  isFooter = false,
}: IRedirectButton) => {
  const buttonWrapper = useRef<any>(null);
  const [buttonWidth, setButtonWidth] = useState<string>('');
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
  /**
   * This will set the button wrapper inner width dynamically depends on hover action
   * When user will hover on these particular button then it will set the inner button element width so that the animation part of overlay contains the full width and height dynamically
   */
  useEffect(() => {
    const btn_width = buttonWrapper?.current?.offsetWidth;
    setButtonWidth(btn_width + 15);
  }, [isButtonHover]);
  const setOverlayHeightAndWidth = isButtonHover
    ? {
        height: buttonWidth,
        width: buttonWidth,
      }
    : {};
  return (
    <Link href={link ? link : ''} passHref>
      <a
        target={linkOpenNewTab ? '_blank' : '_self'}
        className={`${isFooter && Styles['footerButton']} esc-button ${
          Styles['esc-button']
        } ${
          colorScheme ? Styles[`${colorScheme}`] : ''
        }  relative overflow-hidden inline-flex items-center justify-center backdrop-blur-[2px] font-semibold text-sm p-[9px_20px] min-h-[40px] rounded-[4px] `}
        ref={buttonWrapper}
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
      >
        {buttonText}
        <span
          style={setOverlayHeightAndWidth}
          data-testid="esc-btn-bg"
          className={`${Styles['esc-button-bg']}`}
        ></span>
      </a>
    </Link>
  );
};
