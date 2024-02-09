import { ISectionPadding } from '@src/types/root';
export interface ICardList {
  bgType?: string;
  sectionPadding?: ISectionPadding;
  title?: string;
  subTitle?: string;
  cardType?: string;
  cardData: ICardData[];
  dataType?: string;
  isFilterOption?: boolean;
  isSearchOption?: boolean;
}

type ICardData = {
  attributes: any;
};

export enum ICardTypeEnum {
  BLOG = 'blog',
  CASE_STUDY = 'case-study',
  EVENT = 'event',
  PODCAST = 'podcast',
  LOCATION = 'location',
}
