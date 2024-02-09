/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { Swiper, SwiperItem } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from 'next/image';

const images = [
  'https://cdn.pixabay.com/photo/2021/09/28/14/39/horse-6664660_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/12/31/13/49/barn-owl-3052382_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/09/28/14/39/horse-6664660_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/12/31/13/49/barn-owl-3052382_960_720.jpg',
];

export default {
  title: 'Components/Root/Carousel',
  component: Swiper,
  argTypes: {
    haveOffset: { control: 'boolean' },
    isCenter: { control: 'boolean' },
    showBleeding: { control: 'boolean' },
    isLoop: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    showNavigation: { control: 'boolean' },
    showPagination: { control: 'boolean' },
    spaceBetween: { disable: true },
    showItems: { disable: true },
    className: { disable: true },
    noMargin: { disable: true },
    speed: { disable: true },
    pauseOnHover: { disable: true },
  },
} as ComponentMeta<typeof Swiper>;

/**
 * Template
 */
const Template: ComponentStory<typeof Swiper> = (args) => (
  <div style={{ background: '#E5E5E5', padding: '100px 0' }}>
    <Swiper {...args}>
      {images?.map((image, index) => (
        <SwiperItem key={index}>
          <Image
            src={`${image}`}
            alt={`image-${index}`}
            width={960}
            height={720}
          />
        </SwiperItem>
      ))}
    </Swiper>
  </div>
);

/**
 * OffsetView
 */
export const OffsetView = Template.bind({});

OffsetView.args = {
  haveOffset: true,
  isCenter: false,
  showBleeding: false,
  showPagination: true,
  isLoop: false,
  autoPlay: false,
};

/**
 * FullWidthView
 */
export const FullWidthView = Template.bind({});

FullWidthView.args = {
  haveOffset: false,
  isCenter: false,
  showBleeding: false,
  showPagination: false,
  isLoop: false,
  autoPlay: false,
};
