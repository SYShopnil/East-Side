import { LogoBlock } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Logo Block',
  component: LogoBlock,
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
    sectionHeading: {
      subTitle: {
        control: 'text',
      },
      title: {
        control: 'text',
      },
      isCenterMobileView: {
        control: 'boolean',
      },
      ctaInfo: {
        ctaLink: {
          control: 'text',
        },
        ctaText: {
          control: 'text',
        },
      },
    },
    isWidthFull: {
      control: 'boolean',
    },
    logos: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof LogoBlock>;

const ClientTemplate: ComponentStory<typeof LogoBlock> = (args) => (
  <div style={{ background: '#E5E5E5' }}>
    <LogoBlock {...args} />
  </div>
);

const PartnerTemplate: ComponentStory<typeof LogoBlock> = (args) => (
  <div style={{ background: '#E5E5E5' }}>
    <LogoBlock {...args} />
  </div>
);

export const ClientLogo = ClientTemplate.bind({});
ClientLogo.args = {
  bgType: 'default',
  isFullWidth: true,
  sectionHeading: {
    subTitle: 'TRUSTED BY 300+ BRANDS',
    title: "We've designed and built over 500 Shopify Stores.",
    ctaInfo: {
      ctaLink: 'http://example.com/',
      ctaText: 'join our family',
    },
    isCenterMobileView: true,
  },
  logos: [
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/AbsoluteCollagen.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Absolute Collagen',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Hera.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Hera',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Motel.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Motel',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/NHS.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'NHS',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Nike',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Origin.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Origin',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Nike',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Solar.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Solar',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RenSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Ren Skin Care',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RouteOne.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Route One',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Solar.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Solar',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/TattyDevine.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Tatty Devine',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/TropicSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Tropic',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Uniliver.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Uniliver',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/VitaCoCo.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Vita Coco',
    },
  ],
};

export const PartnerLogo = PartnerTemplate.bind({});
PartnerLogo.args = {
  bgType: 'default',
  isFullWidth: false,

  logos: [
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/AbsoluteCollagen.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Absolute Collagen',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Hera.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Hera',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Motel.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Motel',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/NHS.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'NHS',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Nike',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Origin.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Origin',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Nike',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Solar.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Solar',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RenSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Ren Skin Care',
    },
    {
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RouteOne.svg',
      redirectUrl: 'https://www.example.com/',
      logoAlt: 'Route One',
    },
  ],
};
