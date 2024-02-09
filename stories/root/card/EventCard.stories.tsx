/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventCard as MainCard } from '@src/components/root';
import { eventCardData } from '@src/components/root/card/data';

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
    <div style={{ maxWidth: '271px' }}>
      <MainCard {...args} />
    </div>
  </div>
);

/**
 * EventCard
 */
export const EventCard = Template.bind({});
EventCard.args = {
  slug: eventCardData?.slug,
  imgSrc: eventCardData?.imgSrc,
  imgAlt: eventCardData?.imgAlt,
  title: eventCardData?.title,
  description: eventCardData?.description,
  descShowLine: eventCardData?.descShowLine,
  eventDate: eventCardData?.eventDate,
  eventLocation: eventCardData?.eventLocation,
  eventTime: eventCardData?.eventTime,
};
