import { CarouselWithLogoFilter } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Carousel With Logo Filter',
  component: CarouselWithLogoFilter,
  argTypes: {},
} as ComponentMeta<typeof CarouselWithLogoFilter>;

const Template: ComponentStory<typeof CarouselWithLogoFilter> = (args) => (
  <CarouselWithLogoFilter {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  logos: [
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Wild_Deo_6b7185c940.png?width=77&height=24',
    // 'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Attachment_1583769833_800x_1_bdc94cfcb2.png?width=100&height=32',

    'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Wild_Deo_6b7185c940.png?width=77&height=24',

    // 'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Attachment_1583769833_800x_1_bdc94cfcb2.png?width=100&height=32',

    'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Wild_Deo_6b7185c940.png?width=77&height=24',
    // 'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Attachment_1583769833_800x_1_bdc94cfcb2.png?width=100&height=32',

    'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Wild_Deo_6b7185c940.png?width=77&height=24',
    // 'https://res.cloudinary.com/dktw59lc2/image/upload/v1668330614/EastSide-dev/images/Attachment_1583769833_800x_1_bdc94cfcb2.png?width=100&height=32',
  ],
  cards: [
    {
      //   imgUrl:
      //     'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250553/EastSide-dev/images/Hero%20Section/Lead_magnet_uqklfp.png',
      imgAlt: 'card',
    },

    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250553/EastSide-dev/images/Hero%20Section/Lead_magnet_uqklfp.png',
      imgAlt: 'card',
    },

    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
      imgAlt: 'card',
    },

    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
      imgAlt: 'card',
    },

    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
      imgAlt: 'card',
    },

    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
      imgAlt: 'card',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666250380/EastSide-dev/images/Hero%20Section/Hero_Section_o3lspu.png',
      imgAlt: 'card',
    },
    // {
    //   imgUrl:
    //     'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
    //   imgAlt: 'card',
    // },
    // {
    //   imgUrl:
    //     'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
    //   imgAlt: 'card',
    // },
  ],
};
