import { Testimonial } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Testimonial',
  component: Testimonial,
  argTypes: {
    bgType: {
      options: ['default', 'white', 'black', 'gradient_blue', 'gradient_green'],
      control: 'select',
    },
    subTitle: {
      control: 'text',
    },
    partnerLogoUrl: {
      control: 'text',
    },
    partnerLogoAlt: {
      control: 'text',
    },
    quote: {
      control: 'text',
    },
    quoteeName: {
      control: 'text',
    },
    quoteeDesignation: {
      control: 'text',
    },
    quoteeCompanyLogoUrl: {
      control: 'text',
    },
    companyLogoAlt: {
      control: 'text',
    },
    quoteeHeaderImageUrl: {
      control: 'text',
    },
    quoteeHeaderImageAlt: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => (
  <div style={{ background: '#E5E5E5' }}>
    <Testimonial {...args} />
  </div>
);

export const DefaultBackground = Template.bind({});
DefaultBackground.args = {
  quote:
    '“Migrating to Shopify Plus from Magento, and designing and developing a brand new store without disrupting our existing ecommerce performance was a huge undertaking - but we were delighted with how Eastside Co worked with us through the entire process, and results have been brilliant.”',
  quoteeName: 'Oliver Sweeney',
  quoteeDesignation: 'oliversweeney.com',
  quoteeCompanyLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/98298c22e0ed98257884bad849ee3638ccef3681/os-dark.svg',
  bgType: 'default',
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  subTitle:
    'HAND IN HAND PARTNERSHIPS LEADING TO BEING AN AWARD WINNING AGENCY',
  partnerLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/98298c22e0ed98257884bad849ee3638ccef3681/yotpo-white.svg',
  quote:
    "“From the way we work together, to the way referred business grows both companies’ portfolios, we always collaborate to ensure mutual clients have the best possible experience. It's all about collaboration: the end result is better business for Eastside Co, for Yotpo, and for our clients, and a positive, fun, and productive partnership between us.”",
  quoteeName: 'Jason Stokes',
  quoteeDesignation: 'Founder and CEO, Eastside co',
  quoteeCompanyLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/98298c22e0ed98257884bad849ee3638ccef3681/esc.svg',
  bgType: 'black',
};

export const GradientBackground = Template.bind({});
GradientBackground.args = {
  subTitle:
    'HAND IN HAND PARTNERSHIPS LEADING TO BEING AN AWARD WINNING AGENCY',
  partnerLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/98298c22e0ed98257884bad849ee3638ccef3681/recharge.svg',
  quote:
    "“From the way we work together, to the way referred business grows both companies’ portfolios, we always collaborate to ensure mutual clients have the best possible experience. It's all about collaboration: the end result is better business for Eastside Co, for Yotpo, and for our clients, and a positive, fun, and productive partnership between us.”",
  quoteeName: 'Jason Stokes',
  quoteeDesignation: 'Founder and CEO, Eastside co',
  quoteeCompanyLogoUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/98298c22e0ed98257884bad849ee3638ccef3681/wild.svg',
  bgType: 'gradient_green',
};

export const QuoteeImage = Template.bind({});
QuoteeImage.args = {
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna ut condimentum suscipit. Pellentesque ut sem vitae ipsum dapibus varius. “',
  quoteeName: 'Charles Bunn',
  quoteeDesignation: 'HR Manager',
  bgType: 'gradient_blue',
  quoteeHeaderImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/3f0667de6b126fb62c72a6968d2a4dd14d74e1c9/header-image.svg',
};
