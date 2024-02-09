import { JobCard } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/JobCard',
  component: JobCard,
  argTypes: {
    bgType: {
      options: ['black', 'gradient_blue', 'gradient_green'],
      control: 'select',
    },

    title: {
      control: 'text',
      description: 'How we’ll work with you',
    },

    subTitle: {
      control: 'text',
      description: 'Services provided by our 100+ shopify experts',
    },
  },
} as ComponentMeta<typeof JobCard>;

const JobCardTemplate: ComponentStory<typeof JobCard> = (args) => (
  <div
    style={{
      background:
        'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
    }}
  >
    <JobCard {...args} />
  </div>
);

export const JobCardPart = JobCardTemplate.bind({});

JobCardPart.args = {
  bgType: 'black',
  title: 'Need help with your app?',
  subTitle: 'SUPPORT',
};
