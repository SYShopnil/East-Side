import { ISectionPadding } from '@src/types/root';

export interface IBlogs {
  locale?: string;
  heroProps: any;
  featuredBlog?: any;
  blogListInfo?: any;
}

export interface IFeaturedBlog {
  sectionPadding?: ISectionPadding;
  featuredBlog: any;
  isOverlappedWithHero: boolean;
}
