import { ISectionPadding } from '@src/types/root';
export interface ICaseStudyList {
  locale: string;
  heroProps: any;
}

export interface IFeaturedCards {
  sectionPadding?: ISectionPadding;
  isOverlappedWithHero?: boolean;
  cardList: any[];
}
