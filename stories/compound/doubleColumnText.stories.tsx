import { DoubleColumnText } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Double Column Text',
  component: DoubleColumnText,
  argTypes: {
    bgType: {
      options: [
        'default',
        'white',
        'black',
        'gradient_blue',
        'gradient_green',
        'image',
      ],
      control: 'select',
    },

    title: {
      control: 'text',
      description: 'How we’ll work with you',
    },

    subText: {
      control: 'text',
      description: 'Services provided by our 100+ shopify experts',
    },

    firstColumn: {
      control: 'text',
      description: 'this is first column',
    },

    secondColumn: {
      control: 'text',
      description: 'this is first column',
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
  },
} as ComponentMeta<typeof DoubleColumnText>;

const DoubleColumnTextTemplate: ComponentStory<typeof DoubleColumnText> = (
  args
) => (
  <div style={{ padding: '20px' }}>
    <DoubleColumnText {...args} />
  </div>
);

let longString = `

## Overview

* @Follows@ [CommonMark](https://commonmark.org)
* <tg>Optionally follows<tg> [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using dangerouslySetInnerHTML
* Lets you define your <tg>own components<tg> (to render MyHeading instead of h1)
* Has a lot of plugins `;

export const DoubleColumnTextPart = DoubleColumnTextTemplate.bind({});
DoubleColumnTextPart.args = {
  bgType: 'gradient_green',
  title: '<tg>Why Eastside Co?<tg>',
  subText:
    'We’re a diverse collective of hard-working, fun-loving human beings (and occasionally one dog).',
  // column
  firstColumn: longString,
  secondColumn: longString,

  // cta-button
  ctaLink: {
    ctaLink:
      'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    ctaText: 'Let’s start planning',
    // ctaText: '',
    parentBgType: 'black',
  },
};
