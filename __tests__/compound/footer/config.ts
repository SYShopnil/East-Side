import { buttonInfo, formFields } from "@src/components/root/form/data";

const testConfig = {
  bgType: 'black',

  footerHeader: {
    subTitle: 'Come and say hello',
    title: 'Want help to <tb>implement Yotpo?<tb>',
    description:
      "Tell us what you're interested in and we'll get right back to you. That said, if you want to speak to us now...",
    form: {
      formFields: formFields,
      buttonInfo: buttonInfo,
    },
  },
  subscriptionForm: {
    subscriptionSubTitle: 'GET IN TOUCH',
    subscriptionTitle:
      'Let us transform your brand through the <tg>power of commerce<tg>',
    subscriberNamePlaceholder: 'YOUR NAME',
    subscriberEmailAddressPlaceholder: 'EMAIL ADDRESS',
    subscriptionButtonText: 'subscribe today',
    subscriptionButtonSubmitUrl: '/',
  },
  footerAddress: {
    footerAddressType: 'footer',
    mainLogoUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',
    mainLogoAlt: 'Eastside Co',
    contactNumber: '020 7856 0270',
    emailAddress: 'info@eastsideco.com',
    physicalAddress:
      'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
    partnerLogo1DarkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg',
    partnerLogo1WhiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
    partnerLogo1Alt: 'Sopify Plus',
    partnerLogo2DarkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/58fa16be0a15ec76ef06da45df7c44ddb6fdbcf7/shopify-partners-dark.svg',
    partnerLogo2WhiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg',
    partnerLogo2Alt: 'Shopify Experts',
    copyrightText: 'Copyright © 2022 Eastside Co',
  },
  footerColumnOneTitle: 'GET IN TOUCH',
  footerColumnOneItems: [
    {
      itemText: 'SHOPIFY APPS',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'BLOG',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY WEB DESIGN',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'ECOMMERCE STRATEGY',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'OUR WORK',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY MIGRATION GUIDE',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY ACADEMY',
      itemUrl: 'https://www.example.com/',
    },
  ],
  footerColumnTwoTitle: 'ABOUT US',
  footerColumnTwoItems: [
    {
      itemText: 'CAREERS',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY PLUS AGENCY',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'MAGENTO VS SHOPIFY',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'PRIVACY POLICY',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY SEO',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'PODCAST',
      itemUrl: 'https://www.example.com/',
    },
    {
      itemText: 'SHOPIFY MIGRATION',
      itemUrl: 'https://www.example.com/',
    },
  ],
  footerColumnThreeTitle: 'OUR OFFICES',
  footerColumnThreeItems: [
    {
      itemText: 'LONDON',
      itemSubtext: '+44 (0)20 7856 0270',
    },
    {
      itemText: 'BIRMINGHAM',
      itemSubtext: '+44 (0)121 794 0199',
    },
    {
      itemText: 'HAMBURG',
      itemSubtext: '+49 699 678 228',
    },
    {
      itemText: 'NEW YORK',
      itemSubtext: '844 257 0365',
    },
  ],
};

const formConfig = [
  {
    elementName: 'Title',
    dataTestid: 'subscription-form-title',
    expectedText: 'Let us transform your brand through the power of commerce',
  },
  {
    elementName: 'Subtitle',
    dataTestid: 'subscription-form-subTitle',
    expectedText: 'GET IN TOUCH',
  },
];

const columnConfig = [
  {
    index: 0,
    elementName: 'Footer Column One',
    dataTestId: 'footer-column-one',
    expectedTitle: 'GET IN TOUCH',
    expecteditems: {
      numberOfItems: 7,
      itemTexts: [
        'SHOPIFY APPS',
        'BLOG',
        'SHOPIFY WEB DESIGN',
        'ECOMMERCE STRATEGY',
        'OUR WORK',
        'SHOPIFY MIGRATION GUIDE',
        'SHOPIFY ACADEMY',
      ],
    },
  },
  {
    index: 1,
    elementName: 'Footer Column Two',
    dataTestId: 'footer-column-two',
    expectedTitle: 'ABOUT US',
    expecteditems: {
      numberOfItems: 7,
      itemTexts: [
        'CAREERS',
        'SHOPIFY PLUS AGENCY',
        'MAGENTO VS SHOPIFY',
        'PRIVACY POLICY',
        'SHOPIFY SEO',
        'PODCAST',
        'SHOPIFY MIGRATION',
      ],
    },
  },
  {
    index: 2,
    elementName: 'Footer Column Three',
    dataTestId: 'footer-column-three',
    expectedTitle: 'OUR OFFICES',
    expecteditems: {
      numberOfItems: 4,
      itemTexts: ['LONDON', 'BIRMINGHAM', 'HAMBURG', 'NEW YORK'],
    },
  },
];

export { testConfig, formConfig, columnConfig };
