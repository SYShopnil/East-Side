import { ICtaLink, ISectionPadding } from '@src/types/root';

export interface IDoubleColumnText {
  bgType: string;
  title?: string;
  subText?: string;
  firstColumn: string;
  secondColumn: string;
  ctaLink?: ICtaLink;
  sectionPadding?: ISectionPadding;
  ctaShowinFirstColumns?: boolean;
}
