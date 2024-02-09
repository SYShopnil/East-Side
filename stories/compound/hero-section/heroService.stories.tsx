import { HeroService } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Hero Section/Single Type/Service Single',
  component: HeroService,
  argTypes: {
    bgType: {
      table: {
        disable: true,
      },
    },
    backgroundImageUrl: {
      if: {
        arg: 'bgType',
        eq: 'image',
      },
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof HeroService>;

const Template: ComponentStory<typeof HeroService> = (args) => (
  <HeroService {...args} />
);

export const ServiceSingle = Template.bind({});
ServiceSingle.args = {
  bgType: 'image',
  backgroundImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/0d4b66753abca1edf92ba433c5b435546538a6a1/service-single-1.svg',
  title: '<tb>Shopify Web Design<tb>',
  subTitle: 'UX. Design. Content.',
  description:
    'Beautiful ecommerce sites from the world’s most trusted Shopify Plus agency. From themes to bespoke builds, we create compelling, results-driven online solutions.',
  featuredImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/0d4b66753abca1edf92ba433c5b435546538a6a1/service-featured-1.svg',
  featuredImageAlt: 'Featured Service Image',
};
