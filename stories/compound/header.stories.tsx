/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '@src/components/compound';

// Internal Imports
import { menuItems } from '@src/components/compound/header/data';

export default {
  title: 'Components/Compound/Header',
  component: Header,
  argTypes: {
    menuItems: {
      defaultValue: menuItems,
      control: 'object',
    },
    menuItemColor: {
      control: 'color',
      defaultValue: '#ffffff',
    },
    menuItemHoverColor: {
      control: 'color',
      defaultValue: '#0AD176',
    },
    megaMenuActiveColor: {
      control: 'color',
      defaultValue: '#0AD176',
    },
    megaMenuActiveBg: {
      control: 'color',
      defaultValue: '#F3FDF8',
    },
    menuItemActiveColor: {
      control: 'color',
      defaultValue: '#F3FDF8',
    },
  },
} as ComponentMeta<typeof Header>;

/**
 * Template
 */
const Template: ComponentStory<typeof Header> = (args) => (
  <div
    style={{
      position: 'relative',
      padding: '0 0 400px 0',
      background:
        'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
    }}
  >
    <Header {...args} />
  </div>
);

/**
 * Primary Header
 */
export const Primary = Template.bind({});
