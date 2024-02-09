import { ContentBlock } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Content Block',
  component: ContentBlock,
  argTypes: {
    // sectionBgType: {
    //   options: [
    //     'default',
    //     'white',
    //     'black',
    //     'gradient_blue',
    //     'gradient_green',
    //     'image',
    //   ],
    //   control: 'select',
    // },

    blockType: {
      control: 'select',
      options: ['list', 'head'],
      description: 'Select display section',
    },

    title: {
      if: {
        arg: 'blockType',
        eq: 'head',
      },
      control: 'text',
      description: 'How we’ll work with you',
    },

    subTitle: {
      control: 'text',
      description: 'Services provided by our 100+ shopify experts',
    },

    description: {
      control: 'text',
      description:
        'We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing.',
    },

    logo: {
      if: {
        arg: 'blockType',
        eq: 'list',
      },
      control: 'text',
      description: 'Main Logo Url',
    },

    logoPosition: {
      if: {
        arg: 'blockType',
        eq: 'list',
      },
      control: 'select',
      options: ['left', 'top'],
      description: 'Select logo position',
    },
    ctaLink: {
      if: {
        arg: 'blockType',
        eq: 'list',
      },
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
      if: {
        arg: 'blockType',
        eq: 'head',
      },
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
    isSlider: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof ContentBlock>;

// creating variants
const ContentBlockTemplate: ComponentStory<typeof ContentBlock> = (args) => (
  <div
    style={{
      background:
        'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
      padding: '100px 0',
    }}
  >
    <div className="container">
      <div style={{ maxWidth: '465px' }}>
        <ContentBlock {...args} />
      </div>
    </div>
  </div>
);

export const ContentBlockPart = ContentBlockTemplate.bind({});
ContentBlockPart.args = {
  // sectionBgType: "default",
  blockType: 'list',
  title: 'Services provided by our 100+ shopify experts',
  subTitle: 'How we’ll work with you',
  description:
    'We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing.',
  logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
  // logo: '',
  // logoPosition: 'top',
  logoPosition: 'left',
  // cta-button
  ctaLink: {
    ctaLink:
      'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    ctaText: 'Let’s start planning',
    parentBgType: 'black',
  },

  // redirect-button
  button: {
    link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
    linkOpenNewTab: false,
    buttonText: 'explore our services',
    colorScheme: 'white_over_blue',
  },
  isSlider: false,
  // isNumber: true,
  number: 1,
};
