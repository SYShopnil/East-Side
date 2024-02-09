// Internal Imports
import { ICtaLink, ILogoPanel } from '@src/types/root';
import { ITestimonial } from '@src/types/compound';

// ILogoPanelWithTestimonial
export interface ILogoPanelWithTestimonial {
  testimonialInfo: ITestimonial;
  logos: ILogoPanel;
  ctaInfo: ICtaLink;
}
