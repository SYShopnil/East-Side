import { VideoFrame } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Video Frame',
  component: VideoFrame,
  argTypes: {
    // thumbnail: {
    //   control: 'text',
    //   description: 'How we’ll work with you',
    // },
    // thumbnailAlt: {
    //   control: 'text',
    //   description: 'How we’ll work with you',
    // },
    // videoUrl: {
    //   control: 'text',
    //   description: 'How we’ll work with you',
    // },
  },
} as ComponentMeta<typeof VideoFrame>;

const Template: ComponentStory<typeof VideoFrame> = (args) => (
  <VideoFrame {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  thumbnail:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250786/EastSide-dev/images/Hero%20Section/maxresdefault_8_omixxv.png',
  thumbnailAlt: 'thumbnail',
  videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
};
