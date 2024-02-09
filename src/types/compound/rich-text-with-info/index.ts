import { ICtaLink, IRedirectButton, ISectionPadding } from '@src/types/root';

interface Information {
  title: string;
  subText: string;
}

export interface IRichTextWithInfo {
  sectionPadding?: ISectionPadding;
  firstColumnContent: string;
  firstColumnButtons: IRedirectButton[];
  appReviewLink?: string;
  appReviewText?: string;
  totalReview?: number;
  secondColumnInfoList: Information[];
  secondColumnButtons: IRedirectButton[];
  RichTextCtaInfo?: ICtaLink;
}
