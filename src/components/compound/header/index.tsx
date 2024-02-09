import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import colors from '@src/themes/colors';
import { IMenu } from '@src/types/compound';
import { RedirectButton } from '@src/components/root/button/redirect-button';
import MenuLink from './menu-link';
import ServiceMegaMenu from './megamenu';
import { FooterAddress } from '@src/components/root/footer-address';
import Styles from './index.module.scss';
import { MenuToggler } from './menu-toggler';
import { useIsBrowser, useViewport } from '@src/hooks';

/**
 * Tailwind & Module Classess
 */
const onlyShowLgDevice = 'hidden lg:block';
const onlyShowMdDevice = 'block lg:hidden';
const logoStyle = Styles['header-logo'];

// dynamic imports with ssr false
const LanguageSwitch = dynamic(() => import('./language-switcher'), {
  ssr: false,
});

// Header
const Header = ({
  globalInfo,
  menuItemColor,
  menuItemHoverColor,
  megaMenuActiveColor,
  megaMenuActiveBg,
  menuItemActiveColor,
}: IMenu) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [megaMenuToggle, setMegaMenuToggle] = useState(false);
  const [megaMenuOpenDesktop, setMegaMenuOpenDesktop] = useState(false);
  const [scroll, setScroll] = useState(false);

  const isBrowser = useIsBrowser();
  const { width: windowWidth } = useViewport();

  /**
   * Sticky Header
   * TODO: Need check before merge
   */
  let lastScrollTop = 0;
  // const handleScroll =
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // down
      setScroll(false);
    } else if (scrollTop < 900) {
      // up less than 900
      setScroll(false);
    } else {
      // up
      setScroll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  /**
   * configuration colors (color, hoverColor, bg, hoverBg, activeColor, activeBg)
   */

  // menu item color
  const color = menuItemColor || colors?.menuItem?.color;
  const hoverColor = menuItemHoverColor || colors?.menuItem?.hoverColor;

  // mega menu item background color
  const megaMenuBg = megaMenuActiveBg
    ? megaMenuActiveBg
    : colors?.menuItem?.megaMenuActiveBg;

  /**
   * module classess
   * */
  const headerClass = ` ${Styles['header']} ${
    menuToggle ? Styles['overlay-active'] : ' '
  } ${scroll ? Styles['sticky'] : ''}`;

  return (
    <header className={headerClass}>
      {/* it work only tab or less device */}
      <div className={Styles['header-overlay']}></div>
      <div className="container">
        <div className="flex items-center justify-between relative">
          {/* logo here  */}
          <div className="leading-[1]">
            <Link href={'/'}>
              <a className="inline-flex items-center">
                <span className="hidden lg:inline-flex items-center">
                  <Image
                    className={logoStyle}
                    width={178}
                    height={23}
                    src={`https://res.cloudinary.com/dktw59lc2/image/upload/v1669642837/EastSide-dev/images/Group_1050_49f2689987.png`}
                    alt="eastside"
                  />
                </span>
                <span className="lg:hidden inline-flex items-center">
                  <Image
                    className={logoStyle}
                    width={52}
                    height={22}
                    src={`https://res.cloudinary.com/dktw59lc2/image/upload/v1669642837/EastSide-dev/images/Group_1050_49f2689987.png`}
                    alt="eastside"
                  />
                </span>
              </a>
            </Link>
          </div>

          {/* menu here  */}
          <div className="flex items-center gap-8">
            <div
              className={`${
                menuToggle
                  ? Styles['main-menu-open'] +
                    ' ' +
                    'max-md:visible max-md:opacity-[1]'
                  : 'max-md:invisible max-md:opacity-0'
              } ${
                Styles['main-menu-area']
              }  max-md:block max-md:absolute max-md:w-full max-md:top-full max-md:left-0 max-md:pt-[40px]`}
            >
              <ul
                style={
                  {
                    '--color': color,
                    '--hover-color': hoverColor,
                    '--mega-menu-active-color':
                      megaMenuActiveColor || hoverColor,
                    '--mega-menu-active-bg': megaMenuBg,
                    '--active-color': menuItemActiveColor || hoverColor,
                  } as React.CSSProperties
                }
                data-testid="menu"
                className={
                  Styles['menu'] +
                  ' ' +
                  'flex lg:flex-row flex-col lg:items-center gap-[48px] lg:gap-[0]'
                }
              >
                {!!globalInfo.menuItems &&
                  !!globalInfo.menuItems.length &&
                  globalInfo.menuItems.map((menuItem) => (
                    <li
                      // (onMouseLeave, onMouseEnter)  only for desktop menu megaMenu
                      onMouseLeave={
                        menuItem?.isMegaMenu
                          ? () => setMegaMenuOpenDesktop(false)
                          : undefined
                      }
                      onMouseEnter={
                        menuItem?.isMegaMenu
                          ? () => setMegaMenuOpenDesktop(true)
                          : undefined
                      }
                      key={menuItem?.menuItemId}
                      className={`${Styles['menu-item']} lg:static ${
                        menuItem?.isMegaMenu ? Styles['megamenu'] : ''
                      } ${megaMenuToggle ? Styles['megamenu-open'] : ''} ${
                        megaMenuOpenDesktop
                          ? Styles['megamenu-open-desktop']
                          : ''
                      }`}
                    >
                      <MenuLink
                        {...menuItem}
                        onClick={() => setMegaMenuToggle(true)}
                      />
                      {menuItem?.isMegaMenu && (
                        <ServiceMegaMenu
                          isOpen={megaMenuToggle}
                          onClick={() => setMegaMenuToggle((prev) => !prev)}
                          footerInfo={globalInfo}
                        />
                      )}
                    </li>
                  ))}
              </ul>
              {/* show only tab to less device  */}
              {isBrowser && windowWidth <= 991 && (
                <div className={onlyShowMdDevice + ' ' + 'mt-[40px]'}>
                  <FooterAddress
                    bgType="gradient_blue"
                    footerAddressType="mega-menu"
                    phone={globalInfo.phone}
                    mail={globalInfo.mail}
                    address={globalInfo.address}
                    partnerLogos={globalInfo.partnerLogos}
                  />
                  <div className="my-[18px]">
                    <LanguageSwitch />
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center lg:gap-[30px] gap-[20px]">
              <div>
                <RedirectButton
                  buttonText="let’s talk"
                  link="/contact"
                  colorScheme="white_over_green"
                />
              </div>
              {/* show only large to above device  */}
              {isBrowser && windowWidth >= 992 && (
                <div className={onlyShowLgDevice}>
                  <LanguageSwitch />
                </div>
              )}
              {/* show only tab to less device  */}
              {isBrowser && windowWidth <= 991 && (
                <div className={onlyShowMdDevice}>
                  <MenuToggler
                    onClick={() => setMenuToggle((prev) => !prev)}
                    isOpen={menuToggle}
                    isWhite
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
