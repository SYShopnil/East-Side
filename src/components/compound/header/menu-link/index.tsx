import { MouseEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem } from '@src/types/compound';
import { useIsBrowser, useViewport } from '@src/hooks';
import Styles from '../index.module.scss';
import { ArrowRight } from '../icons/arrow-right';

interface IProps extends IMenuItem {
  onClick: () => void;
}

/**
 *
 * @param {object} IMenuItem
 * @returns JSX.Element
 */
const MenuLink = ({
  menuItemLink,
  menuItemText,
  isMegaMenu,
  onClick,
}: IProps) => {
  const { pathname } = useRouter();
  const { width } = useViewport();
  const isBrowser = useIsBrowser();

  const preventDefaultHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <Link href={`${menuItemLink ? `/${menuItemLink}` : '/'}`} passHref>
      <a
        onClick={
          isMegaMenu && isBrowser && width <= 991
            ? onClick
            : isMegaMenu
            ? preventDefaultHandler
            : undefined
        }
        className={`${Styles['menu-link']} ${
          menuItemLink === pathname ? Styles['menu-link-active'] : ''
        }`}
      >
        <span>{menuItemText}</span>
        {isMegaMenu && (
          <>
            <span className={`hidden max-md:inline-flex max-md:items-center`}>
              <ArrowRight />
            </span>
            {isMegaMenu && <span className={Styles['link-bg']}></span>}
          </>
        )}
      </a>
    </Link>
  );
};

export default MenuLink;
