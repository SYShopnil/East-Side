/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card as MainCard } from '@src/components/root';
import { cardData } from '@src/components/root/card/data';

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
    <div style={{ maxWidth: '278px' }}>
      <MainCard {...args} />
    </div>
  </div>
);

/**
 * Card
 */
export const Card = Template.bind({});
Card.args = {
  slug: cardData?.slug,
  imgSrc: cardData?.imgSrc,
  imgAlt: cardData?.imgAlt,
  title: cardData?.title,
  description: cardData?.description,
  descShowLine: cardData?.descShowLine,
};
