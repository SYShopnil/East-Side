import { HeroTertiary } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Hero Section/Tertiary',
  component: HeroTertiary,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    bgType: {
      table: {
        disable: true,
      },
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof HeroTertiary>;

const Template: ComponentStory<typeof HeroTertiary> = (args) => (
  <HeroTertiary {...args} />
);

export const PodcastPage = Template.bind({});
PodcastPage.args = {
  bgType: 'gradient_blue',
  title: 'Episode 1\n<tb>Preparing for Black Friday and Christmas Sales<tb>',
  videoFrame: {
    isOverlappedWithHero: true,
    thumbnail:
      'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/9f6188605ce037afcb51d4b40468a6054aec08ad/featured-podcast.svg',
    thumbnailAlt: 'Featured podcast',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
};

export const CareersPage = Template.bind({});
CareersPage.args = {
  bgType: 'gradient_blue',
  title: '<tb>Let’s work together!<tb>',
  description:
    'Join Eastside Co’s thriving, passionate and driven team of Shopify and ecommerce experts. Take a tour around our office and meet some of the team.',
  videoFrame: {
    isOverlappedWithHero: true,
    thumbnail:
      'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ce12e81898cf909f7bac4a67dae72e1e8a443529/hero-careers.svg',
    thumbnailAlt: 'Career Featured Image',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
};

export const EventsPage = Template.bind({});
EventsPage.args = {
  bgType: 'gradient_blue',
  title: '<tb>Events<tb>',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus et lectus laoreet, id iaculis lacus pulvinar. In non pulvinar nisl.',
  videoFrame: {
    isOverlappedWithHero: true,
    thumbnail:
      'https://gist.githubusercontent.com/Salman-Badhon/0645175510a74fbb8a95016bb2e45f3a/raw/ce12e81898cf909f7bac4a67dae72e1e8a443529/hero-events.svg',
    thumbnailAlt: 'Featured Event',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
};
