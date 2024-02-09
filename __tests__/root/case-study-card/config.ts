const testProps = {
  parentBgType: 'image',
  redirectLink: 'https://www.example.com/',
  imageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
  imageAltText: 'Case Study Card 1',
  companyName: 'ROUTE ONE',
  title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
  subTitle: 'Platform migration',
  isFeatured: false,
  isWinner: false,
};

const textConfig = [
  {
    elementName: 'Company Name',
    elementId: 'company-name',
    expectedText: 'ROUTE ONE',
  },
  {
    elementName: 'Card Title',
    elementId: 'card-title',
    expectedText:
      'Uniting commerce & culture to deliver a shopify plus ux strategy',
  },
  {
    elementName: 'Card Subtitle',
    elementId: 'card-subtitle',
    expectedText: 'Platform migration',
  },
];

const featuredConfig = [true, false];

const winnerConfig = [true, false];

export { testProps, textConfig, featuredConfig, winnerConfig };
