/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

// External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { Form } from '@src/components/root';
import {
  buttonInfo,
  formFields,
  formTitle,
} from '@src/components/root/form/data';

export default {
  title: 'Components/Root/Form',
  component: Form,
  argTypes: {
    formTitle: { defaultValue: formTitle },
    formFields: { defaultValue: formFields },
    buttonInfo: { defaultValue: buttonInfo },
  },
} as ComponentMeta<typeof Form>;

/**
 * Template
 */
const Template: ComponentStory<typeof Form> = (args) => (
  <div
    style={{
      padding: '40px 0',
      background: '#E5E5E5',
    }}
  >
    <div className="container">
      <div style={{ maxWidth: '494px' }}>
        <Form {...args} />
      </div>
    </div>
  </div>
);

/**
 * LargeForm
 */
export const LargeForm = Template.bind({});
LargeForm.args = {};
