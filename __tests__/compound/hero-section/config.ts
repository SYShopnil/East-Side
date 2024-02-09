const primaryProps = {
  bgType: 'gradient_blue',
  contentWidth: 'hundred_percent',
  title:
    'The Shopify Agency who <tb>transform brands<tb> through the <tb>power of commerce<tb>',
  subTitle: 'We are eastside co',
  subText:
    "Tell us what you're interested in and we'll get right back to you. That said, if you want to speak to us now...",
  backgroundImageUrl:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
};

const bgTypes = ['gradient_blue', 'image'];

const primaryTextConfig = [
  {
    elementName: 'Title',
    testId: 'hero-title',
    expectedText:
      'The Shopify Agency who transform brands through the power of commerce',
  },
  {
    elementName: 'Sub Title',
    testId: 'hero-subTitle',
    expectedText: 'We are eastside co',
  },
  {
    elementName: 'Sub Text',
    testId: 'hero-subText',
    expectedText:
      "Tell us what you're interested in and we'll get right back to you. That said, if you want to speak to us now...",
  },
];

const secondaryProps = {
  bgType: 'gradient_blue',
  title:
    '<tb>Planning strategies, solutions, run\n workshops and scope to accelerate growth<tb>',
  subText:
    'Balancing scale and growth with beautiful design, \n<tb>we create engaging online retail experiences.<tb>',
};

const secondaryTextConfig = [
  {
    elementName: 'Title',
    testId: 'hero-title',
    expectedText:
      'Planning strategies, solutions, run workshops and scope to accelerate growth',
  },
  {
    elementName: 'Sub Text',
    testId: 'hero-subText',
    expectedText:
      'Balancing scale and growth with beautiful design, we create engaging online retail experiences.',
  },
];

const servicesProps = {
  bgType: 'image',
  backgroundImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/0d4b66753abca1edf92ba433c5b435546538a6a1/service-single-1.svg',
  title: 'Shopify Web Design',
  subTitle: 'UX. Design. Content.',
  description:
    'Beautiful ecommerce sites from the world’s most trusted Shopify Plus agency. From themes to bespoke builds, we create compelling, results-driven online solutions.',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/0d4b66753abca1edf92ba433c5b435546538a6a1/service-featured-1.svg',
  featuredImageAlt: 'Featured Service Image',
};

const servicesTextConfig = [
  {
    elementName: 'Title',
    testId: 'title',
    expectedText: 'Shopify Web Design',
  },
  {
    elementName: 'Sub Title',
    testId: 'sub-title',
    expectedText: 'UX. Design. Content.',
  },
];

const tertiaryProps = {
  bgType: 'gradient_blue',
  title: '<tb>Events<tb>',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus et lectus laoreet, id iaculis lacus pulvinar. In non pulvinar nisl.',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ce12e81898cf909f7bac4a67dae72e1e8a443529/hero-events.svg',
  featuredImageAlt: 'Featured Event',
};

const tertiaryTextConfig = [
  {
    elementName: 'Title',
    testId: 'hero-title',
    expectedText: 'Events',
  },
  {
    elementName: 'Description',
    testId: 'hero-description',
    expectedText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus et lectus laoreet, id iaculis lacus pulvinar. In non pulvinar nisl.',
  },
];

const quaternaryProps = {
  bgType: 'image',
  bgImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ce12e81898cf909f7bac4a67dae72e1e8a443529/case-study-wild.svg',

  logoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/fbadc3941559091de06b376f14a81fbc651e2d54/Wild.svg',
  logoAlt: 'Wild Logo',
  title: 'Cart Convert',
  subTitle: 'Product Upsell & Cross sell',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/da9abbf82f9643b094a7254e295fcc72e9bc86af/service-featured-1.svg',
  featuredImageAlt: 'Wild Featured Image',
};

const quaternaryTextConfig = [
  {
    elementName: 'Title',
    testId: 'title',
    expectedText: 'Cart Convert',
  },
  {
    elementName: 'Sub Title',
    testId: 'sub-title',
    expectedText: 'Product Upsell & Cross sell',
  },
];

const quaternaryImageConfig = [
  {
    elementName: 'Logo',
    testId: 'logo',
    expectedUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/fbadc3941559091de06b376f14a81fbc651e2d54/Wild.svg',
    expectedAlt: 'Wild Logo',
  },
  {
    elementName: 'Featured Image',
    testId: 'featured-image',
    expectedUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/da9abbf82f9643b094a7254e295fcc72e9bc86af/service-featured-1.svg',
    expectedAlt: 'Wild Featured Image',
  },
];

export {
  primaryProps,
  bgTypes,
  primaryTextConfig,
  secondaryProps,
  secondaryTextConfig,
  servicesProps,
  servicesTextConfig,
  quaternaryProps,
  quaternaryTextConfig,
  quaternaryImageConfig,
  tertiaryProps,
  tertiaryTextConfig,
};
