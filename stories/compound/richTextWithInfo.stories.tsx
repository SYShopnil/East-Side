import { RichTextWithInfo } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Rich Text With Info',
  component: RichTextWithInfo,
  argTypes: {},
} as ComponentMeta<typeof RichTextWithInfo>;

// creating variants
const Template: ComponentStory<typeof RichTextWithInfo> = (args) => (
  <div>
    <div>
      <RichTextWithInfo {...args} />
    </div>
  </div>
);

let longString = `

## Overview

* @Follows@ [CommonMark](https://commonmark.org)
* <tg>Optionally follows<tg> [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using dangerouslySetInnerHTML
* Lets you define your <tg>own components<tg> (to render MyHeading instead of h1)
* Has a lot of plugins `;

export const Primary = Template.bind({});

Primary.args = {
  firstColumnContent: longString,
  totalReview: 10,
  appReviewLink: 'demo link',

  secondColumnInfoList: [
    {
      title: 'Awards & Recognistions',
      subText: 'Coming soon...',
    },

    {
      title: 'Contact',
      subText: `info@eastsideco.com \n +44 (0) 20 7856 0270`,
    },
  ],

  // redirect-button
  firstColumnButtons: [
    {
      link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
      linkOpenNewTab: false,
      buttonText: 'explore our services',
      colorScheme: 'blue_over_green',
    },
    {
      link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
      linkOpenNewTab: false,
      buttonText: 'explore our services',
      colorScheme: 'blue_over_green',
    },
  ],
  secondColumnButtons: [
    {
      link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
      linkOpenNewTab: false,
      buttonText: 'explore our services',
      colorScheme: 'blue_over_green',
    },
    {
      link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
      linkOpenNewTab: false,
      buttonText: 'explore our services',
      colorScheme: 'blue_over_green',
    },
  ],
  RichTextCtaInfo: {
    ctaLink:
      'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    ctaText: 'Let’s start planning',
    parentBgType: 'white',
  },
};

// const data = {

//   reviews: {
//     totalReview: 10,
//     linkText: 'this is link',
//     link: 'demo link',
//   },

//   lists: [
//     {
//       title: 'Awards & Recognistions',
//       subText: 'Coming soon...',
//     },

//     {
//       title: 'Contact',
//       subText: `info@eastsideco.com /n +44 (0) 20 7856 0270
//       `,
//     },
//   ],

// };
