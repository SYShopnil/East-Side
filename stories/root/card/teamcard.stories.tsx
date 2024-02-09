/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeamCard as MainCard } from '@src/components/root';
import {
  teamCardData,
  teamSecondaryCardData,
} from '@src/components/root/card/data';

export default {
  title: 'Components/Root/Cards/TeamCard',
  component: MainCard,
  argTypes: {},
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
    <div style={{ maxWidth: '362px' }}>
      <MainCard {...args} />
    </div>
  </div>
);
/**
 * TemplateSecondary
 */
const TemplateSecondary: ComponentStory<typeof MainCard> = (args) => (
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
 * Primary
 */
export const Primary = Template.bind({});
Primary.args = {
  slug: teamCardData?.slug,
  imgSrc: teamCardData?.imgSrc,
  imgAlt: teamCardData?.imgAlt,
  name: teamCardData?.name,
  designation: teamCardData?.designation,
  linkedInLink: teamCardData?.linkedInLink,
  variant: 'primary',
};
/**
 * Secondary
 */
export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  slug: teamSecondaryCardData?.slug,
  imgSrc: teamSecondaryCardData?.imgSrc,
  imgAlt: teamSecondaryCardData?.imgAlt,
  name: teamSecondaryCardData?.name,
  designation: teamSecondaryCardData?.designation,
  variant: 'secondary',
};
