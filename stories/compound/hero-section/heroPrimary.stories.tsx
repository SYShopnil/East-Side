import { HeroPrimary } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Hero Section/Primary',
  component: HeroPrimary,
  argTypes: {
    bgType: {
      options: ['image', 'gradient_blue'],
      control: 'select',
    },
    contentWidth: {
      control: 'select',
      options: ['hundred_percent', 'seventy_percent', 'fifty_percent'],
    },
    backgroundImageUrl: {
      if: {
        arg: 'bgType',
        eq: 'image',
      },
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
    subText: {
      control: 'text',
    },
    logos: {
      control: 'object',
      logo: [
        {
          url: {
            control: 'text',
          },
          altText: {
            control: 'text',
          },
        },
      ],
    },
    redirectButton: {
      link: {
        control: 'text',
      },
      buttonText: {
        control: 'text',
      },
      colorScheme: {
        control: 'select',
        options: ['white_over_blue', 'white_over_green', 'blue_over_green'],
      },
    },
    footerAddress: {
      footerAddressType: {
        table: {
          disable: true,
        },
      },
      contactNumber: {
        control: 'text',
        description: 'Contact Number',
      },
      emailAddress: {
        control: 'text',
        description: 'Email Address',
      },
      physicalAddress: {
        control: 'text',
        description: 'Physical Address',
      },
      partnerLogo1DarkUrl: {
        control: 'text',
        description: 'Partner Dark Logo Url',
      },
      partnerLogo1WhiteUrl: {
        control: 'text',
        description: 'Partner White Logo Url',
      },
      partnerLogo1Alt: {
        control: 'text',
        description: 'Partner Logo Alt Text',
      },
      partnerLogo2DarkUrl: {
        control: 'text',
        description: 'Partner Dark Logo Url',
      },
      partnerLogo2WhiteUrl: {
        control: 'text',
        description: 'Partner White Logo Url',
      },
      partnerLogo2Alt: {
        control: 'text',
        description: 'Partner Logo Alt Text',
      },
    },
  },
} as ComponentMeta<typeof HeroPrimary>;

const Template: ComponentStory<typeof HeroPrimary> = (args) => (
  <HeroPrimary {...args} />
);

export const GradientVariationA = Template.bind({});
GradientVariationA.args = {
  bgType: 'gradient_blue',
  contentWidth: 'hundred_percent',
  title:
    'The Shopify Agency who <tb>transform brands<tb> through the <tb>power of commerce<tb>',
  subTitle: 'We are eastside co',
  logos: [
    {
      image:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
      alt: 'Shopify Plus Logo',
    },
  ],
  redirectButton: {
    link: '/services',
    buttonText: 'explore our services',
    colorScheme: 'white_over_green',
  },
};

export const GradientVariationB = Template.bind({});
GradientVariationB.args = {
  bgType: 'gradient_green',
  contentWidth: '',
  title: 'Talk to our <tb>team of experts<tb>',
  subTitle: 'Come and say hello',
  subText:
    "Tell us what you're interested in and we'll get right back to you. That said, if you want to speak to us now...",
  footerAddress: {
    footerAddressType: 'hero',
    contactNumber: '020 7856 0270',
    emailAddress: 'info@eastsideco.com',
    physicalAddress:
      'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
    partnerLogo1DarkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg',
    partnerLogo1WhiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
    partnerLogo1Alt: 'Sopify Plus',
    partnerLogo2DarkUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/58fa16be0a15ec76ef06da45df7c44ddb6fdbcf7/shopify-partners-dark.svg',
    partnerLogo2WhiteUrl:
      'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg',
    partnerLogo2Alt: 'Shopify Experts',
  },
};

export const ImageVariationA = Template.bind({});
ImageVariationA.args = {
  bgType: 'image',
  contentWidth: 'seventy_percent',
  title: 'The fastest growing <tb>Shopify agency in the UK<tb>',
  subTitle: 'About us',
  backgroundImageUrl:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1667199469/EastSide-dev/About%20us%20hero/about-us-hero-1_t1fmw8.jpg',
  logos: [
    {
      image:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
      alt: 'Shopify Plus Logo',
    },
  ],
};

export const ImageVariationB = Template.bind({});
ImageVariationB.args = {
  bgType: 'image',
  contentWidth: '',
  title: 'The Ultimate Guide to <tb>Boosting Ecommerce Sales<tb>',
  subTitle: 'Download your guide',
  subText: `<tb>Includes an actionable checklist to improve your conversion rates.<tb>\nPrinter Friendly Format.`,
  backgroundImageUrl:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1667199469/EastSide-dev/About%20us%20hero/about-us-hero-1_t1fmw8.jpg',
  logos: [
    {
      image:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg',
      alt: 'Shopify Plus Logo',
    },
    {
      image:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg',
      alt: 'Shopify Experts Logo',
    },
  ],
};
