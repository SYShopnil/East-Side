import { HeroQuaternary } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Hero Section/Quaternary',
  component: HeroQuaternary,
  argTypes: {
    bgType: {
      options: ['image', 'gradient_blue'],
      control: 'select',
    },
    bgImageUrl: {
      if: {
        arg: 'bgType',
        eq: 'image',
      },
      control: 'text',
    },
    fontColorBlack: {
      control: 'boolean',
    },
    hasTopOverlay: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
    logoUrl: {
      control: 'text',
    },
    logoAlt: {
      control: 'text',
    },
    featuredImageUrl: {
      control: 'text',
    },
    featuredImageAlt: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof HeroQuaternary>;

const Template: ComponentStory<typeof HeroQuaternary> = (args) => (
  <HeroQuaternary {...args} />
);

export const CaseStudy = Template.bind({});
CaseStudy.args = {
  bgType: 'image',
  fontColorBlack: true,
  bgImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ce12e81898cf909f7bac4a67dae72e1e8a443529/case-study-wild.svg',

  logoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/fbadc3941559091de06b376f14a81fbc651e2d54/Wild.svg',
  logoAlt: 'Wild Logo',
  title:
    'With the help of Recharge and our internal team of experts we launched the most talked-about sustainable deodorant brand',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/da9abbf82f9643b094a7254e295fcc72e9bc86af/service-featured-1.svg',
  featuredImageAlt: 'Wild Featured Image',
};

export const Partner = Template.bind({});
Partner.args = {
  bgType: 'gradient_blue',
  logoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/ec1b545574d6f9f4d13cd8f684ec1b273cd10756/recharge-white.svg',
  logoAlt: 'Recharge Logo',
  title: 'Turn transactions into\nrelationships',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/da9abbf82f9643b094a7254e295fcc72e9bc86af/service-featured-1.svg',
  featuredImageAlt: 'Wild Featured Image',
};

export const App = Template.bind({});
App.args = {
  bgType: 'gradient_blue',
  logoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/35d7e5e08e17536dc0cf81b878de8f15e769cf1f/cart-white.svg',
  logoAlt: 'Cart Icon',
  title: 'Cart Convert',
  subTitle: 'Product Upsell & Cross sell',
  featuredImageAlt: 'Featured App',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ac8b1096f08110724d6ef35157c0f554cb76e3c8/featured-app.svg',
};

export const JobListing = Template.bind({});
JobListing.args = {
  bgType: 'image',
  hasTopOverlay: false,
  bgImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/da9abbf82f9643b094a7254e295fcc72e9bc86af/hero-job-listing.svg',
  title: '<tb>Front end Developer<tb>',
  subTitle: 'FRONT END | WEBSITE | DEVELOPER',
};
