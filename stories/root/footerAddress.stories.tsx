import { FooterAddress } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Footer Address',
  component: FooterAddress,
  argTypes: {
    footerAddressType: {
      control: 'select',
      options: ['footer', 'mega-menu', 'hero'],
      description: 'Select display section',
    },
    parentBgType: {
      table: {
        disable: true,
      },
    },
    mainLogoUrl: {
      control: 'text',
      if: {
        arg: 'footerAddressType',
        eq: 'footer',
      },
      description: 'Main Logo Url',
    },
    mainLogoAlt: {
      control: 'text',
      if: {
        arg: 'footerAddressType',
        eq: 'footer',
      },
      description: 'Main Logo Alt Text',
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
    copyrightText: {
      control: 'text',
      if: {
        arg: 'footerAddressType',
        eq: 'footer',
      },
      description: 'Copyright Text',
    },
  },
} as ComponentMeta<typeof FooterAddress>;

const FooterTemplate: ComponentStory<typeof FooterAddress> = (args) => (
  <div
    style={{
      background: '#000000',
      padding: '2rem',
    }}
  >
    <FooterAddress {...args} />
  </div>
);

const MegaMenuWhiteTemplate: ComponentStory<typeof FooterAddress> = (args) => (
  <div
    style={{
      padding: '2rem',
    }}
  >
    <FooterAddress {...args} />
  </div>
);

const MegaMenuGradientTemplate: ComponentStory<typeof FooterAddress> = (
  args
) => (
  <div
    style={{
      padding: '2rem',
      background: 'linear-gradient(67.96deg, #4229EF -3.51%, #2BB8E4 254.73%)',
    }}
  >
    <FooterAddress {...args} />
  </div>
);

export const Footer = FooterTemplate.bind({});
Footer.args = {
  footerAddressType: 'footer',
  parentBgType: 'black',
  mainLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',
  mainLogoAlt: 'Eastside Co',
  contactNumber: '020 7856 0270',
  emailAddress: 'info@eastsideco.com',
  physicalAddress: 'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
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
  copyrightText: 'Copyright © 2022 Eastside Co',
};

export const MegaMenuWhiteBackground = MegaMenuWhiteTemplate.bind({});
MegaMenuWhiteBackground.args = {
  footerAddressType: 'mega-menu',
  parentBgType: 'white',
  mainLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',
  mainLogoAlt: 'Eastside Co',
  contactNumber: '020 7856 0270',
  emailAddress: 'info@eastsideco.com',
  physicalAddress: 'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
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
};

export const MegaMenuGradientBackground = MegaMenuGradientTemplate.bind({});
MegaMenuGradientBackground.args = {
  footerAddressType: 'mega-menu',
  parentBgType: 'gradient_blue',
  mainLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg',
  mainLogoAlt: 'Eastside Co',
  contactNumber: '020 7856 0270',
  emailAddress: 'info@eastsideco.com',
  physicalAddress: 'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
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
};

export const HeroSection = MegaMenuGradientTemplate.bind({});
HeroSection.args = {
  footerAddressType: 'hero',
  parentBgType: 'gradient_blue',
  contactNumber: '020 7856 0270',
  emailAddress: 'info@eastsideco.com',
  physicalAddress: 'Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK',
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
};

/*
Footer Main Logo Url
ESC [White]: https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg

Partner Logo Urls
Shopify Plus [White]: https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg
Shopify Plus [Dark]: https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg
Shopify Partners [White]: https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg
Shopify Partners [Dark]:https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/58fa16be0a15ec76ef06da45df7c44ddb6fdbcf7/shopify-partners-dark.svg
*/
