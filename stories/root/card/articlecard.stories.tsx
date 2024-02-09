/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCard as MainCard } from '@src/components/root';
import {
  articleCardData,
  podcastCardData,
} from '@src/components/root/card/data';

export default {
  title: 'Components/Root/Cards',
  component: MainCard,
  argTypes: {
    descShowLine: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
  },
} as ComponentMeta<typeof MainCard>;

/**
 * Template
 */
const Template: ComponentStory<typeof MainCard> = (args) => (
  <div
    style={{
      padding: '40px 20px',
      background: '#F5F5F5',
    }}
  >
    <div style={{ maxWidth: '271px' }}>
      <MainCard {...args} />
    </div>
  </div>
);

/**
 * ArticleCard
 */
export const ArticleCard = Template.bind({});
ArticleCard.args = {
  slug: articleCardData?.slug,
  imgSrc: articleCardData?.imgSrc,
  imgAlt: articleCardData?.imgAlt,
  title: articleCardData?.title,
  description: articleCardData?.description,
  descShowLine: articleCardData?.descShowLine,
  publishedDate: articleCardData?.publishedDate,
  duration: articleCardData?.duration,
  metaTags: articleCardData?.metaTags,
  authorName: articleCardData?.authorName,
  authorAvatar: articleCardData?.authorAvatar,
  authorAvatarAlt: articleCardData?.authorAvatarAlt,
};
/**
 * PodcastCard
 */
export const PodcastCard = Template.bind({});
PodcastCard.args = {
  slug: podcastCardData?.slug,
  imgSrc: podcastCardData?.imgSrc,
  imgAlt: podcastCardData?.imgAlt,
  title: podcastCardData?.title,
  description: podcastCardData?.description,
  descShowLine: podcastCardData?.descShowLine,
  publishedDate: podcastCardData?.publishedDate,
  duration: podcastCardData?.duration,
};
