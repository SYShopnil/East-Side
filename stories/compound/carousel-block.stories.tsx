/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { CarouselBlock } from '@src/components/compound';
import {
  // blog
  blogCarouselheadingInfo,
  blogCarouselSliderOptions,
  blogCarouselCardType,
  articles,

  // case study
  caseStudiesCarouselheadingInfo,
  caseStudyCarouselCardType,
  caseStudyCarouselSliderOptions,
  caseStudiesTallCards,
  caseStudiesShortCards,

  // team
  teamCarouselheadingInfo,
  teamCarouselCardType,
  teamCarouselSliderOptions,
  teamSecondaryCarouselSliderOptions,
  teamsPrimary,
  teamsSecondary,

  // location
  locationCarouselheadingInfo,
  locationCarouselCardType,
  locationCarouselSliderOptions,
  locations,
} from '@src/components/compound/carousel-block/data';

export default {
  title: 'Components/Compound/CarouselBlock',
  component: CarouselBlock,
  argTypes: {
    headingInfo: {
      control: {
        disable: true,
      },
    },
    sliderOptions: {
      control: {
        disable: true,
      },
    },
    cardType: {
      control: {
        disable: true,
      },
    },
    slidersInfo: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CarouselBlock>;

/**
 * Template
 */
const Template: ComponentStory<typeof CarouselBlock> = (args) => (
  <div style={{ padding: '80px 0', background: '#E5E5E5' }}>
    <CarouselBlock {...args} />
  </div>
);

/**
 * CaseStudyPrimaryCarousel
 */
export const CaseStudyPrimaryCarousel = Template.bind({});
CaseStudyPrimaryCarousel.args = {
  cardType: caseStudyCarouselCardType,
  slidersInfo: caseStudiesTallCards,
  sliderOptions: caseStudyCarouselSliderOptions,
};
/**
 * CaseStudyPrimaryCarouselWithHeading
 */
export const CaseStudyPrimaryCarouselWithHeading = Template.bind({});
CaseStudyPrimaryCarouselWithHeading.args = {
  headingInfo: caseStudiesCarouselheadingInfo,
  cardType: caseStudyCarouselCardType,
  slidersInfo: caseStudiesTallCards,
  sliderOptions: {
    ...caseStudyCarouselSliderOptions,
    haveOffset: true,
    showItems: 'sm_1_2_md_2_lg_2_5_xl_3',
  },
};
/**
 * CaseStudySecondaryCarousel
 */
export const CaseStudySecondaryCarousel = Template.bind({});
CaseStudySecondaryCarousel.args = {
  cardType: caseStudyCarouselCardType,
  slidersInfo: caseStudiesShortCards,
  sliderOptions: caseStudyCarouselSliderOptions,
};

/**
 * BlogCarousel
 */
export const BlogCarousel = Template.bind({});
BlogCarousel.args = {
  headingInfo: blogCarouselheadingInfo,
  cardType: blogCarouselCardType,
  slidersInfo: articles,
  sliderOptions: blogCarouselSliderOptions,
};
/**
 * TeamPrimaryCarousel
 */
export const TeamPrimaryCarousel = Template.bind({});
TeamPrimaryCarousel.args = {
  headingInfo: teamCarouselheadingInfo,
  cardType: teamCarouselCardType,
  slidersInfo: teamsPrimary,
  sliderOptions: teamCarouselSliderOptions,
};
/**
 * TeamSecondaryCarousel
 */
export const TeamSecondaryCarousel = Template.bind({});
TeamSecondaryCarousel.args = {
  headingInfo: teamCarouselheadingInfo,
  cardType: teamCarouselCardType,
  slidersInfo: teamsSecondary,
  sliderOptions: teamSecondaryCarouselSliderOptions,
};
/**
 * LocationCarousel
 */
export const LocationCarousel = Template.bind({});
LocationCarousel.args = {
  headingInfo: locationCarouselheadingInfo,
  cardType: locationCarouselCardType,
  slidersInfo: locations,
  sliderOptions: locationCarouselSliderOptions,
};
