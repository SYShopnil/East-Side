import { Faq } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/FAQ',
  component: Faq,
  argTypes: {
    bgType: {
      options: ['black', 'gradient-blue', 'gradient-green'],
      control: 'select',
    },
    title: {
      if: {
        arg: 'blockType',
        eq: 'head',
      },
      control: 'text',
      description: 'How we’ll work with you',
    },

    subText: {
      control: 'text',
      description: 'Services provided by our 100+ shopify experts',
    },
  },
} as ComponentMeta<typeof Faq>;

// creating variants
const Template: ComponentStory<typeof Faq> = (args) => (
  <div
    style={
      {
        // background:
        //   'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
        // padding: '100px 0',
      }
    }
  >
    <div className="container">
      {/* <div style={{ maxWidth: '465px' }}> */}
      <Faq {...args} />
      {/* </div> */}
    </div>
  </div>
);

export const FaqPart = Template.bind({});
FaqPart.args = {
  faqs: [
    {
      question:
        'What is the difference between a ‘Shopify Expert’ and an official Shopify Plus Partner?',
      answer: `
      How we’ll work with you
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium beatae magni praesentium hic, voluptatem tempore nostrum mollitia odit consectetur, sit distinctio, illo laboriosam sunt itaque. Voluptates repudiandae laboriosam sapiente earum eum cupiditate aperiam veniam eos animi iste, veritatis rem modi cum deleniti quam dicta sequi! Voluptatibus, ab quaerat doloremque reprehenderit doloribus porro id at, magnam sapiente ratione autem aspernatur veniam consequuntur corrupti incidunt repellendus vitae temporibus. Quia itaque, accusamus harum laborum adipisci velit dicta quidem illo culpa facilis dolore necessitatibus ipsam tenetur, porro facere fugit nam aspernatur, cumque praesentium. Vel ipsum nesciunt accusantium veritatis animi quisquam voluptates nostrum voluptate quia.`,
    },

    {
      question: 'What are the timeframes for launching a Shopify website?',
      answer: 'How we’ll work with you',
    },

    {
      question: 'How much does it cost to build a Shopify website?',
      answer: 'How we’ll work with you',
    },
  ],
  // sectionBgType: "default",
};
