/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { FeaturedArticle } from '@src/components/compound';
import { featuredArticle } from '@src/components/compound/featured-article/data';

export default {
  title: 'Components/Compound/Featured Article',
  component: FeaturedArticle,
  argTypes: {},
} as ComponentMeta<typeof FeaturedArticle>;

/**
 * Template
 */
const Template: ComponentStory<typeof FeaturedArticle> = (args) => (
  <FeaturedArticle {...args} />
);

/**
 * Primary
 */
export const Primary = Template.bind({});
Primary.args = {
  ...featuredArticle,
};
