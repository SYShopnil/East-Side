const textConfig = [
  {
    testElement: 'Contact Number',
    dataTestId: 'footer-address-contact-number',
    expectedText: '020 7856 0270',
  },
  {
    testElement: 'Email Address',
    dataTestId: 'footer-address-email-address',
    expectedText: 'info@eastsideco.com',
  },
  {
    testElement: 'Physical Address',
    dataTestId: 'footer-address-physical-address',
    expectedText: 'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
  },
  {
    testElement: 'Copyright Text',
    dataTestId: 'footer-address-copyright-text',
    expectedText: 'Copyright © 2022 Eastside Co',
  },
];

const logoConfig = [
  {
    testElement: 'Main Logo',
    whiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',
    darkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',

    altText: 'Eastside Co',
  },
  {
    testElement: 'Partner Logo 1',
    whiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
    darkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg',
    altText: 'Sopify Plus',
  },
  {
    testElement: 'Partner Logo 2',
    whiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg',
    darkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-partners-dark.svg',
    altText: 'Shopify Experts',
  },
];

const footerAddressTypes = ['footer', 'mega-menu'];

const parentBgTypes = [
  'default',
  'white',
  'black',
  'gradient_blue',
  'gradient_green',
];

export { footerAddressTypes, textConfig, logoConfig, parentBgTypes };
