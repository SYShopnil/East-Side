import { CenterContentBlock } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Center Content Block',
  component: CenterContentBlock,
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
    },
    subText: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    ctaLink: {
      ctaLink: {
        control: 'text',
      },
      ctaText: {
        control: 'text',
      },
    },
  },
} as ComponentMeta<typeof CenterContentBlock>;

const Template: ComponentStory<typeof CenterContentBlock> = (args) => (
  <div style={{ background: '#E5E5E5' }}>
    <CenterContentBlock {...args} />
  </div>
);

export const WhiteBackground = Template.bind({});
WhiteBackground.args = {
  bgType: 'white',
  title: 'Shopify stores we work with',
  description:
    'We’re proud to bring our expert Shopify knowledge to our work with some of the world’s biggest brands, including Carex, Chelsea Football Club and Volkswagen. Check out some of the clients we’ve worked with recently and see some of our case studies, including platform migrations, full web builds, web design projects and results-driven marketing strategies.',
  ctaInfo: {
    ctaLink: 'http://example.com/',
    ctaText: 'visit what we have done for others',
  },
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  bgType: 'black',
  subText: 'WHY SHOPIFY PLUS?',
  description:
    'Shopify Plus is an enterprise platform that powers the world’s fastest growing brands. It gives merchants a multi-channel platform with unmatched scalability so you can concentrate on running your business, while it takes care of areas such as order management, complex discounting, payment gateways and other features that rapidly scaling retailers need. As well as this, Shopify Plus has unrivalled security and can handle limitless volumes of traffic and sales.',
  ctaInfo: {
    ctaLink: 'http://example.com/',
    ctaText: 'find out more about shopify plus',
  },
};

export const GradientBackground = Template.bind({});
GradientBackground.args = {
  bgType: 'gradient_blue',
  subText: 'WHY SHOPIFY PLUS?',
  description:
    'Shopify Plus is an enterprise platform that powers the world’s fastest growing brands. It gives merchants a multi-channel platform with unmatched scalability so you can concentrate on running your business, while it takes care of areas such as order management, complex discounting, payment gateways and other features that rapidly scaling retailers need. As well as this, Shopify Plus has unrivalled security and can handle limitless volumes of traffic and sales.',
  ctaInfo: {
    ctaLink: 'http://example.com/',
    ctaText: 'find out more about shopify plus',
  },
};

export const HighlightedText = Template.bind({});
HighlightedText.args = {
  bgType: 'default',
  description:
    'Our expert strategists, marketers and user experience architects analyse data, user behaviour and devise workshops to innovate and optimise your ecommerce performance. <tg>This is Performance Thinking.<tg>',
  ctaInfo: {
    ctaLink: 'http://example.com/',
    ctaText: 'explore our work',
  },
};
