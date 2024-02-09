import { ContentListSection } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Content List Section',
  component: ContentListSection,
  argTypes: {
    bgType: {
      control: 'select',
      options: ['gradient_blue', 'gradient_green'],
    },
    contenHead: {
      blockType: {
        table: {
          disable: true,
        },
      },
      title: {
        control: 'text',
      },
      subTitle: {
        control: 'text',
      },
      desciption: {
        control: 'text',
      },
      button: {
        link: {
          control: 'text',
        },
        buttonText: {
          control: 'text',
        },
        colorScheme: {
          control: 'select',
          options: ['white_over_green', 'white_over_blue', 'blue_over_green'],
        },
      },
    },
    isNumber: {
      control: 'boolean',
    },
    number: {
      table: {
        disable: true,
      },
    },
    logoPosition: {
      control: 'select',
      options: ['top', 'left'],
    },
    contentList: [
      {
        blockType: {
          tables: {
            disable: true,
          },
        },
        subTitle: {
          control: 'text',
        },
        desciption: {
          control: 'text',
        },
        ctaLink: {
          ctaText: {
            control: 'text',
          },
          ctaLink: {
            control: 'text',
          },
        },
        logo: {
          control: 'text',
        },
        logoPosition: {
          control: 'select',
          options: ['left', 'top'],
        },
        isSlider: {
          control: 'boolean',
        },
      },
    ],
  },
} as ComponentMeta<typeof ContentListSection>;

const Template: ComponentStory<typeof ContentListSection> = (args) => (
  <ContentListSection {...args} />
);

export const LogoVariation = Template.bind({});
LogoVariation.args = {
  bgType: 'gradient_blue',
  contentHead: {
    blockType: 'head',
    title: 'Services provided by our 100+ shopify experts',
    subTitle: 'How we’ll work with you',
    description:
      'We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing.',
    button: {
      link: 'http://example.com/',
      buttonText: 'explore our services',
      colorScheme: 'white_over_green',
    },
    isSlider: true,
  },
  isNumber: true,
  logoPosition: 'left',
  contentList: [
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
      logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    },
    {
      blockType: 'list',
      subTitle: 'Launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'How to launch',
      },
      isSlider: true,
      logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    },
    {
      blockType: 'list',
      subTitle: 'Grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Reach further than before',
      },
      isSlider: true,
      logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
      logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
      logo: 'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
    },
  ],
};

export const NumberedVariation = Template.bind({});
NumberedVariation.args = {
  bgType: 'gradient_blue',
  contentHead: {
    blockType: 'head',
    title: 'Services provided by our 100+ shopify experts',
    subTitle: 'How we’ll work with you',
    description:
      'We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing.',
    button: {
      link: 'http://example.com/',
      buttonText: 'explore our services',
      colorScheme: 'white_over_green',
    },
    isSlider: true,
  },
  isNumber: true,
  logoPosition: 'left',
  contentList: [
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'How to launch',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Reach further than before',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
  ],
};

export const CleanVariation = Template.bind({});
CleanVariation.args = {
  bgType: 'gradient_blue',
  contentHead: {
    blockType: 'head',
    title: 'Services provided by our 100+ shopify experts',
    subTitle: 'How we’ll work with you',
    description:
      'We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing.',
    button: {
      link: 'http://example.com/',
      buttonText: 'explore our services',
      colorScheme: 'white_over_green',
    },
    isSlider: true,
  },
  isNumber: false,
  contentList: [
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'How to launch',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Reach further than before',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
    {
      blockType: 'list',
      subTitle: 'Plan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa purus, luctus at mollis a, accumsan non purus. Suspendisse potenti. Duis et ultrices magna. Mauris hendrerit turpis at ultricies accumsan. Nullam porttitor tortor quis ex feugiat vehicula. Etiam ut ligula efficitur, vehicula lorem at, convallis felis. Nullam in libero risus. Donec nec lacinia orci, vitae vehicula odio.',
      ctaLink: {
        ctaLink: 'http://example.com/',
        ctaText: 'Let’s start planning',
      },
      isSlider: true,
    },
  ],
};
