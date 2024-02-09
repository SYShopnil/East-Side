import { ISectionPadding, ICtaLink, IRedirectButton } from '@src/types/root';

export interface IRichTextBlock {
  sectionPadding?: ISectionPadding;
  markdown?: string;
  img: any;
  imageAlt?: string;
  imgPosition: string;
  ctaLink?: ICtaLink;
  button?: IRedirectButton;
}
