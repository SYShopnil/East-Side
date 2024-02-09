import { ISectionPadding } from '@src/types/root';

export interface ITestimonial {
  sectionPadding?: ISectionPadding;
  subTitle?: string;
  partnerLogoUrl?: any;
  partnerLogoAlt?: string;
  quote: string;
  quoteeName: string;
  quoteeDesignation?: string;
  quoteeCompanyLogoUrl?: any;
  quoteeCompanyLogoAlt?: string;
  quoteeHeaderImageUrl?: any;
  quoteeHeaderImageAlt?: string;
  bgType: string;
  isRoot?: boolean;
  isLogoPanelWithTestimonial?: boolean;
  isAnimated?: boolean;
}
