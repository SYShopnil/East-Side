import { SearchFilter } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Root/Search Filter',
  component: SearchFilter,
  argTypes: {
    isSearch: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => {
  const [qryText, setQryText] = useState('');

  const filter = (query: string) => {
    setQryText(query);
  };

  return <SearchFilter {...args} filter={filter} />;
};

export const SearchFilterPart = Template.bind({});
SearchFilterPart.args = {
  isSearch: true,
  tags: [
    {
      //   hello: 'world',
      id: 1,
      title: 'all',
    },

    {
      id: 2,
      title: 'strategy',
    },

    {
      id: 3,
      title: 'shopify',
    },

    {
      id: 4,
      title: 'inspiration',
    },

    {
      id: 5,
      title: 'events',
    },

    {
      id: 6,
      title: 'news',
    },

    {
      id: 7,
      title: 'seo',
    },
  ],
};
