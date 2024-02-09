import { ICtaLink, IRedirectButton } from '@src/types/root';

export type contentBlockType = 'list' | 'head';

export interface IContentBlock {
  sectionBgType?: string;
  blockType?: contentBlockType;
  title?: string;
  subTitle?: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  logoPosition?: string;
  ctaLink?: ICtaLink;
  button?: IRedirectButton;
  isSlider: boolean;
  isNumber?: boolean;
  number?: number;
  slug?: string;
  contentCtaText?: string;
  contentCtaLink?: string;
}
