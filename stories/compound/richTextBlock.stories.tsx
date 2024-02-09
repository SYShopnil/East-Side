/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { menuItems } from '@src/components/compound/header/data';
import { RichTextBlock } from '@src/components/compound';

export default {
  title: 'Components/Compound/Rich Text Block',
  component: RichTextBlock,
  argTypes: {
    img: {
      control: 'text',
      description: 'Main Logo Url',
    },
    sectionPadding: {
      paddinY: {
        options: ['py_120px', 'py_160px', 'py_200px'],
      },
      paddinOff: {
        options: ['top', 'bottom'],
      },
    },
    imgPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Select logo position',
    },
    ctaLink: {
      ctaLink: {
        control: 'text',
        description: 'this is cta link',
      },
      ctaText: {
        control: 'text',
        description: 'Let’s start planning',
      },
    },

    button: {
      link: {
        control: 'text',
        description: 'this button link',
      },
      linkOpenNewTab: {
        control: 'boolean',
      },
      buttonText: {
        control: 'text',
        description: 'Let’s start planning',
      },
      colorScheme: {
        control: 'select',
        options: ['white_over_blue', 'white_over_green', 'blue_over_green'],
        description: 'Select button variants',
      },
    },
  },
} as ComponentMeta<typeof RichTextBlock>;

/**
 * Template
 */
const Template: ComponentStory<typeof RichTextBlock> = (args) => (
  <div
  // style={{
  //   position: 'relative',
  //   padding: '0 0 400px 0',
  //   background:
  //     'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
  // }}
  >
    <RichTextBlock {...args} />
  </div>
);

/**
 * Primary Header
 */

let longString = `

## Overview

* @Follows@ [CommonMark](https://commonmark.org)
* <tg>Optionally follows<tg> [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using dangerouslySetInnerHTML
* Lets you define your <tg>own components<tg> (to render MyHeading instead of h1)
* Has a lot of plugins `;

export const Primary = Template.bind({});

Primary.args = {
  sectionPadding: {
    paddingY: '120_px',
    paddingOff: null,
  },
  markdown: longString,
  img: 'https://res.cloudinary.com/dktw59lc2/image/upload/v1666531951/EastSide-dev/images/article/feature-article-1_lsxy9h.jpg',
  imgPosition: '',

  // cta-button
  ctaLink: {
    ctaLink:
      'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    ctaText: 'Let’s start planning',
    parentBgType: 'white',
  },

  // redirect-button
  // button: {
  //   link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
  //   linkOpenNewTab: false,
  //   buttonText: 'explore our services',
  //   colorScheme: 'blue_over_green',
  // },
};
