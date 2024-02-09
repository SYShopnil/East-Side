/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocationCard as MainCard } from '@src/components/root';
import { locationCardData } from '@src/components/root/card/data';

export default {
  title: 'Components/Root/Cards',
  component: MainCard,
  argTypes: {
    descShowLine: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
  },
} as ComponentMeta<typeof MainCard>;

/**
 * Template
 */
const Template: ComponentStory<typeof MainCard> = (args) => (
  <div
    style={{
      padding: '40px 20px',
      background: '#E5E5E5',
    }}
  >
    <div style={{ maxWidth: '380px' }}>
      <MainCard {...args} />
    </div>
  </div>
);

/**
 * LocationCard
 */
export const LocationCard = Template.bind({});
LocationCard.args = {
  slug: locationCardData?.slug,
  imgSrc: locationCardData?.imgSrc,
  imgAlt: locationCardData?.imgAlt,
  title: locationCardData?.title,
  description: locationCardData?.description,
  descShowLine: locationCardData?.descShowLine,
};
