import { CaseStudyCard } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Case Study Card',
  component: CaseStudyCard,
  argTypes: {
    isWinner: {
      control: 'boolean',
    },
    isFeatured: {
      control: 'boolean',
    },
    redirectLink: {
      control: 'text',
    },
    imageUrl: {
      control: 'text',
    },
    imageAltText: {
      control: 'text',
    },
    companyName: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
    parentBgType: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CaseStudyCard>;

const DesktopTemplate: ComponentStory<typeof CaseStudyCard> = (args) => (
  <div style={{ width: '44%' }}>
    <CaseStudyCard {...args} />
  </div>
);

const MobileTemplate: ComponentStory<typeof CaseStudyCard> = (args) => (
  <CaseStudyCard {...args} />
);

export const DesktopView = DesktopTemplate.bind({});
DesktopView.args = {
  parentBgType: 'image',
  redirectLink: 'https://www.example.com/',
  imageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
  imageAltText: 'Case Study Card 1',
  companyName: 'ROUTE ONE',
  title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
  subTitle: 'Platform migration',
  isFeatured: false,
  isWinner: true,
};

export const MobileView = MobileTemplate.bind({});
MobileView.args = {
  parentBgType: 'image',
  redirectLink: 'https://www.example.com/',
  imageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/71ac51d82546fe10f1ead85425d8ee233e554d1b/case-study-card-1.svg',
  imageAltText: 'Case Study Card 1',
  companyName: 'ROUTE ONE',
  title: 'Uniting commerce & culture to deliver a shopify plus ux strategy',
  subTitle: 'Platform migration',
  isFeatured: false,
  isWinner: true,
};
