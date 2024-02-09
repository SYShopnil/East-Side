import { TeamCardsSection } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Team Cards Section',
  component: TeamCardsSection,
  argTypes: {
    bgType: {
      options: ['default', 'white', 'black', 'gradient_blue', 'gradient_green'],
      control: 'select',
    },
    teamCards: {
      control: 'object',
    },
    teamFilter: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof TeamCardsSection>;

const Template: ComponentStory<typeof TeamCardsSection> = (args) => (
  <TeamCardsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  bgType: 'default',
  teamFilter: {
    filter: () => {},
    tags: [
      {
        id: 1,
        title: 'design team',
      },

      {
        id: 2,
        title: 'development team',
      },

      {
        id: 3,
        title: 'commercial team',
      },

      {
        id: 4,
        title: 'marketing team',
      },

      {
        id: 5,
        title: 'client services team',
      },
    ],
  },
  teamCards: [
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
    {
      slug: '/',
      imgSrc:
        'https://res.cloudinary.com/dktw59lc2/image/upload/v1666162265/EastSide-dev/images/team/team-1_oxecra.jpg',
      imgAlt: 'team-1',
      name: 'Jason Stokes',
      designation: 'CEO & Founder',
      variant: 'secondary',
    },
  ],
};
