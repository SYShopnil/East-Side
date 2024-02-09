import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '@src/components/compound';
import { footerArgs } from '@src/components/__layout/config';
import { IFooterHeader } from '@src/types/compound';

export default {
  title: 'Components/Compound/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Footer>;

/*
 * Footer Primary
 */
const PrimaryTemplate: ComponentStory<typeof Footer> = () => (
  <Footer {...footerArgs} />
);

export const Primary = PrimaryTemplate.bind({});

/*
 * Footer Secondary
 */
const footerHeaderArgs: IFooterHeader = {
  footerHeadTitle: 'Talk to our <tb>team of experts<tb>',
  footerHeadSubtitle: 'Come and say hello',
  footerHeadDescription: `Tell us what you're interested in and we'll get right back to you. That said, if you want to speak to us now...`,
  formTitle: 'Getting in touch is easy...',
  formButtonText: 'Let’s talk',
  formButtonLink: 'https://google.com/',
  formFields: [
    {
      name: 'name',
      placeholder: 'Your name',
      tagType: 'input',
      type: 'text',
      isRequired: true,
    },
    {
      name: 'email',
      placeholder: 'Email Address',
      tagType: 'input',
      type: 'email',
      isRequired: true,
    },
    {
      name: 'phone',
      placeholder: 'Phone Number',
      tagType: 'input',
      type: 'text',
      isRequired: false,
    },
    {
      name: 'project',
      placeholder: 'Your Project Requirement',
      tagType: 'textArea',
      type: 'text',
      isRequired: false,
    },
  ],
};

const SecondaryTemplate: ComponentStory<typeof Footer> = () => (
  <Footer {...footerArgs} footerHeader={footerHeaderArgs} />
);
export const Secondary = SecondaryTemplate.bind({});
