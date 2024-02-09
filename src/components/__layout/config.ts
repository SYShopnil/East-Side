// Internal Imports
import { IContactBlock } from '@src/types/compound';

// headerArgs
export const headerArgs = {
  menuItems: [],
  menuItemColor: '#ffffff',
  menuItemHoverColor: '#0AD176',
  megaMenuActiveColor: '#0AD176',
  megaMenuActiveBg: '#F3FDF8',
  menuItemActiveColor: '#F3FDF8',
};

export const contactBlockArgs: IContactBlock = {
  isSmall: true,
  isRightAlign: true,
  bgType: 'gradient_green',
  title: 'Eastside Co career opportunites',
  // subTitle: 'SUPPORT',
  description:
    'Come and join our family of Shopify experts building Shopify ecommerce websites.',

  // address
  // emailAddress: 'support@eastsideco.com',
  // contactNumber: '+44 (0) 121 7940 199',
  emailAddress: '',
  contactNumber: '',

  // cta-button
  ctaLink: {
    ctaLink: '/career',
    ctaText: 'work with us',
    // ctaText: '',
    parentBgType: 'gradient_green',
  },

  // redirect-button
  buttonOne: {
    link: '/career',
    linkOpenNewTab: false,
    // buttonText: 'explore our services',
    buttonText: 'current vacancies',
    colorScheme: 'green_over_white',
  },
};
