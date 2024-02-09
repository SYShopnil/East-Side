// Internal Imports
import { ICtaLink } from '@src/types/root';

// ISectionHeading
export interface ISectionHeading {
  subTitle: string;
  title: string;
  description?: string;
  ctaInfo?: ICtaLink;
  isCenterMobileView?: boolean;
}
