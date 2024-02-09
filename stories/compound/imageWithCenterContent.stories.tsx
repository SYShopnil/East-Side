/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { SectionHeading } from '@src/components/compound';
import { sectionHeadingData } from '@src/components/compound/section-heading/data';
import { ImageWithCenterContent } from '@src/components/compound/image-with-center-content';

export default {
  title: 'Components/Compound/Image With Center Content',
  component: ImageWithCenterContent,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    isCenterMobileView: {
      control: 'boolean',
    },
    ctaInfo: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ImageWithCenterContent>;

/**
 * Template
 */
const Template: ComponentStory<typeof ImageWithCenterContent> = (args) => (
  <ImageWithCenterContent {...args} />
);

/**
 * WithCtaLink SectionHeading
 */
export const Primary = Template.bind({});

Primary.args = {
  bgType: 'gradient_blue',
  subText: 'The Author',
  author: 'Louis Thompson',
  description:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna ut condimentum suscipit. Pellentesque ut sem vitae ipsum dapibus varius. “',
  ctaInfo: {
    ctaLink: 'http://example.com/',
    ctaText: 'explore our work',
  },
  imgUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/3f0667de6b126fb62c72a6968d2a4dd14d74e1c9/header-image.svg',
  imgAlt: 'author',
};
