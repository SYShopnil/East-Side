import { HeroSecondary } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Hero Section/Secondary',
  component: HeroSecondary,
  argTypes: {
    bgType: {
      table: {
        disable: true,
      },
    },
    title: {
      control: 'text',
    },
    subText: {
      control: 'text',
    },
    ctaArray: {
      control: 'object',
    },
    logos: {
      control: 'object',
      logo: [
        {
          url: {
            control: 'text',
          },
          altText: {
            control: 'text',
          },
        },
      ],
    },
  },
} as ComponentMeta<typeof HeroSecondary>;

const Template: ComponentStory<typeof HeroSecondary> = (args) => (
  <HeroSecondary {...args} />
);

export const VariationA = Template.bind({});
VariationA.args = {
  bgType: 'gradient_blue',
  title:
    '<tb>Planning strategies, solutions, run\n workshops and scope to accelerate growth<tb>',
  subText:
    'Delivering actionable experiences need insights from all angles to fully understand what you need to grow.',
  ctaArray: [
    {
      ctaLink: 'https://www.example.com/',
      ctaText: 'Audits',
    },
    {
      ctaLink: 'https://www.example.com/',
      ctaText: 'Workshops',
    },
    {
      ctaLink: 'https://www.example.com/',
      ctaText: 'Scoping',
    },
  ],
};

export const VariationB = Template.bind({});
VariationB.args = {
  bgType: 'gradient_blue',
  title: '<tb>Ecommerce Exchange Podcast<tb>',
  subText:
    "Welcome to 'Ecommerce Exchange', the <tb>monthly podcast<tb> from Eastside Co. We talk to the <tb>experts and big names<tb> in ecommerce to exchange the <tb>latest insights, tips, advice and news.<tb>",
};

export const VariationC = Template.bind({});
VariationC.args = {
  bgType: 'gradient_blue',
  title: 'Eastside Co \n<tb>Shopify Plus Agency<tb>',
  subText:
    'Balancing scale and growth with beautiful design, \n<tb>we create engaging online retail experiences.<tb>',
  logos: {
    data: [
      {
        attributes: {
          url: 'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
          alternativeText: 'Shopify Plus Logo',
        },
      },
      {
        attributes: {
          url: 'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg',
          alternativeText: 'Shopify Experts Logo',
        },
      },
    ],
  },
};
