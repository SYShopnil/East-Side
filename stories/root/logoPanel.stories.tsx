import { LogoPanel } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Logo Panel',
  component: LogoPanel,
  argTypes: {
    isWidthFull: {
      control: 'boolean',
    },
    logos: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof LogoPanel>;

const ClientTemplate: ComponentStory<typeof LogoPanel> = (args) => (
  <LogoPanel {...args} />
);

const PartnerTemplate: ComponentStory<typeof LogoPanel> = (args) => (
  <LogoPanel {...args} />
);

export const Client = ClientTemplate.bind({});
Client.args = {
  isFullWidth: true,
  logos: [
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/AbsoluteCollagen.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Absolute Collagen',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Hera.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Hera',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Motel.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Motel',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/NHS.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'NHS',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Nike',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Origin.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Origin',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/OS.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Oliver Sweeny',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/PureScooters.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Pure Scooters',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RenSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Ren Skin Care',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RouteOne.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Route One',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Solar.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Solar',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/TattyDevine.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Tatty Devine',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/TropicSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Tropic',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Uniliver.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Uniliver',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/VitaCoCo.svg',
      altText: 'Vita Coco',
    },
  ],
};

export const Partner = PartnerTemplate.bind({});
Partner.args = {
  isFullWidth: false,
  logos: [
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/AbsoluteCollagen.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Absolute Collagen',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Hera.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Hera',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Motel.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Motel',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/NHS.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'NHS',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Nike.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Nike',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/Origin.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Origin',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/OS.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Oliver Sweeny',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/PureScooters.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Pure Scooters',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RenSkinCare.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Ren Skin Care',
    },
    {
      srcUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/7ffda6074f2d4924d2e3082a15556002/raw/d7885268f891dc3bd446d55edac7140e34b3148b/RouteOne.svg',
      redirectUrl: 'https://www.example.com/',
      altText: 'Route One',
    },
  ],
};
