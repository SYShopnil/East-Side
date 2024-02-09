// Internal Imports
import { ISectionPadding } from '@src/types/root';

interface IAuthor {}
interface IArticle {
  slug: string;
  bannerImage: string;
  bannerImageAlt: string;
  title: string;
  subText: string;
}
// IFeaturedArticle
export interface IFeaturedArticle {
  sectionPadding?: ISectionPadding;
  featuredArticle: IArticle;
}
