import { ICtaLink } from '@src/types/root';

export interface IImageWithCenterContent {
  bgType: string;
  subText?: string;
  author: string;
  description: string;
  ctaInfo?: ICtaLink;
  imgUrl: any;
  imgAlt: string;
}
