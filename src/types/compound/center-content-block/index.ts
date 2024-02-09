import { ISectionPadding, ICtaLink } from '@src/types/root';
export interface ICenterContentBlock {
  sectionPadding: ISectionPadding;
  title?: string;
  subText?: string;
  description: string;
  bgType: string;
  ctaInfo?: ICtaLink;
  isRoot?: boolean;
}
