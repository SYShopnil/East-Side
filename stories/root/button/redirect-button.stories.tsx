/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { RedirectButton } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Components/Root/Button/RedirectButton',
  component: RedirectButton,
  argTypes: {
    // General
    link: { control: 'text', defaultValue: 'https://www.google.com' },
    buttonText: { control: 'text' },

    // Background Type
    colorScheme: {
      control: 'inline-radio',
      options: ['white_over_green', 'white_over_blue', 'blue_over_green'],
    },

    // linkOpenNewTab
    linkOpenNewTab: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof RedirectButton>;

/**
 * Template
 */
const Template: ComponentStory<typeof RedirectButton> = (args) => (
  <div
    style={{
      padding: '80px',
      background: '#E5E5E5',
    }}
  >
    <RedirectButton {...args} />
  </div>
);

/**
 * colorScheme - WhiteOverGreen
 */
export const WhiteOverGreen = Template.bind({});
WhiteOverGreen.args = {
  // General
  buttonText: 'explore our services',

  // colorScheme
  colorScheme: 'white_over_green',

  // linkOpenNewTab
  linkOpenNewTab: false,
};

/**
 * colorScheme - WhiteOverBlue
 */
export const WhiteOverBlue = Template.bind({});
WhiteOverBlue.args = {
  // General
  buttonText: 'explore our services',

  // colorScheme
  colorScheme: 'white_over_blue',

  // linkOpenNewTab
  linkOpenNewTab: false,
};
/**
 * colorScheme - BlueOverGreen
 */
export const BlueOverGreen = Template.bind({});
BlueOverGreen.args = {
  // General
  buttonText: 'explore our services',

  // colorScheme
  colorScheme: 'blue_over_green',

  // linkOpenNewTab
  linkOpenNewTab: false,
};
