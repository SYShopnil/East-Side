import { ContactBlock } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Contact Block',
  component: ContactBlock,
  argTypes: {
    bgType: {
      options: ['black', 'gradient_blue', 'gradient_green'],
      control: 'select',
    },

    isRightAlign: {
      control: 'boolean',
    },

    title: {
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

    emailAddress: {
      control: 'text',
      description: 'This is email address',
    },

    contactNumber: {
      control: 'text',
      description: 'this is contact number',
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

    buttonOne: {
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

    buttonTwo: {
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
} as ComponentMeta<typeof ContactBlock>;

const ContactBlockTemplate: ComponentStory<typeof ContactBlock> = (args) => (
  <ContactBlock {...args} />
);

export const ContactBlockPart = ContactBlockTemplate.bind({});
ContactBlockPart.args = {
  bgType: 'gradient_green',
  title: 'Need help with your app?',
  subTitle: 'SUPPORT',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nisl et diam vestibulum pellentesque. Maecenas accumsan vel mi non sodales. Nulla gravida sed sem sed iaculis. ',

  // address
  // emailAddress: 'support@eastsideco.com',
  // contactNumber: '+44 (0) 121 7940 199',
  emailAddress: '',
  contactNumber: '',

  // cta-button
  ctaLink: {
    ctaLink:
      'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    ctaText: 'Let’s start planning',
    // ctaText: '',
    parentBgType: 'black',
  },

  // redirect-button
  buttonOne: {
    link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
    linkOpenNewTab: false,
    buttonText: 'explore our services',
    // buttonText: '',
    colorScheme: 'white_over_green',
  },

  buttonTwo: {
    link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
    linkOpenNewTab: false,
    // buttonText: 'explore our services Two',
    buttonText: '',
    colorScheme: 'white_over_green',
  },
  isRightAlign: true,

  // buttonTwo: {
  //   link: 'https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react',
  //   linkOpenNewTab: false,
  // buttonText: 'explore our services',
  //   colorScheme: 'white_over_green',
  // },
};
