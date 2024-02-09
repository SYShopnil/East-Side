/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { SectionHeading } from '@src/components/compound';
import { sectionHeadingData } from '@src/components/compound/section-heading/data';

export default {
  title: 'Components/Compound/SectionHeading',
  component: SectionHeading,
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
} as ComponentMeta<typeof SectionHeading>;

/**
 * Template
 */
const Template: ComponentStory<typeof SectionHeading> = (args) => (
  <div style={{ padding: '80px 0', background: '#E5E5E5' }}>
    <div className="container">
      <SectionHeading {...args} />
    </div>
  </div>
);

/**
 * WithCtaLink SectionHeading
 */
export const WithCtaLink = Template.bind({});
WithCtaLink.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  ctaInfo: sectionHeadingData?.ctaInfo,
  isCenterMobileView: false,
};
/**
 * WithCtaLinkMobileViewCenter SectionHeading
 */
export const WithCtaLinkMobileViewCenter = Template.bind({});
WithCtaLinkMobileViewCenter.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  ctaInfo: sectionHeadingData?.ctaInfo,
  isCenterMobileView: true,
};
/**
 * WithCtaLinkAndDescription SectionHeading
 */
export const WithCtaLinkAndDescription = Template.bind({});
WithCtaLinkAndDescription.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  description: sectionHeadingData?.description,
  ctaInfo: sectionHeadingData?.ctaInfo,
};

/**
 * WithOutCtaLink SectionHeading
 */
export const WithOutCtaLink = Template.bind({});
WithOutCtaLink.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  isCenterMobileView: false,
};
