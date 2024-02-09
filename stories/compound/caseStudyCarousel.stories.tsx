import { CaseStudyCarousel } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Case Study Carousel',
  component: CaseStudyCarousel,
  argTypes: {
    bgType: {
      table: {
        disable: true,
      },
    },
    isFullHeight: {
      control: 'boolean',
    },
    carouselCards: {
      control: 'object',
      isWinner: {
        control: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof CaseStudyCarousel>;

const Template: ComponentStory<typeof CaseStudyCarousel> = (args) => (
  <CaseStudyCarousel {...args} />
);

export const TallCards = Template.bind({});
TallCards.args = {
  bgType: 'image',
  isFullHeight: true,
  carouselCards: [
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
      imageAltText: 'Case Study Card 1',
      companyName: 'ROUTE ONE',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'ROUTE ONE',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-2.svg',
      imageAltText: 'Case Study Card 2',
      companyName: 'WILD DEO',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'Shopify plus',
      isWinner: true,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-3.svg',
      imageAltText: 'Case Study Card 3',
      companyName: 'PURE ELECTRIC',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'Custom app development',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
      imageAltText: 'Case Study Card 1',
      companyName: 'ROUTE ONE',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'ROUTE ONE',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-2.svg',
      imageAltText: 'Case Study Card 2',
      companyName: 'WILD DEO',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'Shopify plus',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-3.svg',
      imageAltText: 'Case Study Card 3',
      companyName: 'PURE ELECTRIC',
      title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
      subTitle: 'Custom app development',
      isWinner: true,
    },
  ],
};

export const ShortCards = Template.bind({});
ShortCards.args = {
  bgType: 'image',
  isFullHeight: false,
  carouselCards: [
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
      imageAltText: 'Case Study Card 1',
      companyName: 'ROUTE ONE',
      title: '12% CR up-lift in just 3 months',
      subTitle: 'ROUTE ONE',
      isWinner: true,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-2.svg',
      imageAltText: 'Case Study Card 2',
      companyName: 'WILD DEO',
      title: '12% CR up-lift in just 3 months',
      subTitle: 'Shopify plus',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-3.svg',
      imageAltText: 'Case Study Card 3',
      companyName: 'PURE ELECTRIC',
      title: 'Bespoke designed and built Shopify store',
      subTitle: 'Custom app development',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
      imageAltText: 'Case Study Card 1',
      companyName: 'ROUTE ONE',
      title: '12% CR up-lift in just 3 months',
      subTitle: 'ROUTE ONE',
      isWinner: true,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-2.svg',
      imageAltText: 'Case Study Card 2',
      companyName: 'WILD DEO',
      title: 'Bespoke designed and built Shopify store',
      subTitle: 'Shopify plus',
      isWinner: false,
    },
    {
      redirectLink: 'https://www.example.com/',
      imageUrl:
        'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/51adc91b7abf8828200cf1170e84115902971730/case-study-card-3.svg',
      imageAltText: 'Case Study Card 3',
      companyName: 'PURE ELECTRIC',
      title: 'Bespoke designed and built Shopify store',
      subTitle: 'Custom app development',
      isWinner: true,
    },
  ],
};
