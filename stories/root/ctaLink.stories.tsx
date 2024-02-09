import { CtaLink } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Cta Link',
  component: CtaLink,
  argTypes: {
    ctaLink: {
      control: 'text',
      description: 'Redirect URL when CTA Link is clicked',
    },
    ctaText: {
      control: 'text',
      description: 'Changes CTA Link text',
    },
    parentBgType: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CtaLink>;

const DefaultTemplate: ComponentStory<typeof CtaLink> = (args) => (
  <div style={{ background: '#E5E5E5', padding: '1rem' }}>
    <CtaLink {...args} />
  </div>
);

const WhiteTemplate: ComponentStory<typeof CtaLink> = (args) => (
  <div style={{ background: '#FFFFFF', padding: '1rem' }}>
    <CtaLink {...args} />
  </div>
);

const DarkTemplate: ComponentStory<typeof CtaLink> = (args) => (
  <div style={{ backgroundColor: '#212121', padding: '1rem' }}>
    <CtaLink {...args} />
  </div>
);

const GradientBlueTemplate: ComponentStory<typeof CtaLink> = (args) => (
  <div
    style={{
      background:
        'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
      padding: '1rem',
    }}
  >
    <CtaLink {...args} />
  </div>
);

const GradientGreenTemplate: ComponentStory<typeof CtaLink> = (args) => (
  <div
    style={{
      background: 'linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)',
      padding: '1rem',
    }}
  >
    <CtaLink {...args} />
  </div>
);

export const DefaultBackground = DefaultTemplate.bind({});
DefaultBackground.args = {
  ctaLink: 'https://www.example.com/',
  ctaText: 'CTA Text',
  parentBgType: 'default',
};

export const WhiteBackground = WhiteTemplate.bind({});
WhiteBackground.args = {
  ctaLink: 'https://www.example.com/',
  ctaText: 'CTA Text',
  parentBgType: 'white',
};

export const DarkBackground = DarkTemplate.bind({});
DarkBackground.args = {
  ctaLink: 'https://www.example.com/',
  ctaText: 'CTA Text',
  parentBgType: 'black',
};

export const GradientBlueBackground = GradientBlueTemplate.bind({});
GradientBlueBackground.args = {
  ctaLink: 'https://www.example.com/',
  ctaText: 'CTA Text',
  parentBgType: 'gradient_blue',
};

export const GradientGreenBackground = GradientGreenTemplate.bind({});
GradientGreenBackground.args = {
  ctaLink: 'https://www.example.com/',
  ctaText: 'CTA Text',
  parentBgType: 'gradient_green',
};
