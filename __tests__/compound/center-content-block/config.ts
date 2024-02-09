import { title } from 'process';

const textConfig = [
  {
    testElement: 'Title',
    dataTestId: 'center-content-title',
    expectedText: 'Shopify stores we work with',
  },
  {
    testElement: 'Subtext',
    dataTestId: 'center-content-subtext',
    expectedText: 'WHY SHOPIFY PLUS?',
  },
  {
    testElement: 'Description',
    dataTestId: 'center-content-description',
    expectedText:
      'Shopify Plus is an enterprise platform that powers the world’s fastest growing brands. It gives merchants a multi-channel platform with unmatched scalability so you can concentrate on running your business, while it takes care of areas such as order management, complex discounting, payment gateways and other features that rapidly scaling retailers need. As well as this, Shopify Plus has unrivalled security and can handle limitless volumes of traffic and sales.',
  },
];

const backgroundConfig = [
  {
    bgType: 'default',
    expectedStyle: 'background: transparent',
  },
  {
    bgType: 'white',
    expectedStyle: 'background: #FFFFFF',
  },
  {
    bgType: 'black',
    expectedStyle: 'background: #000000',
  },
  {
    bgType: 'gradient_blue',
    expectedStyle:
      'background: linear-gradient(305.63deg, #4229EF 10.49%, #2BB8E4 129.23%)',
  },
  {
    bgType: 'gradient_green',
    expectedStyle:
      'background: linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)',
  },
];

export { textConfig, backgroundConfig };
