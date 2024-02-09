import { ISectionPadding, ILogoPanel, ICtaLink } from '@src/types/root';
import { ISectionHeading } from '../section-heading';

export interface ILogoBlock extends ILogoPanel {
  bgType: string;
  sectionPadding?: ISectionPadding;
  isFullWidth: boolean;
  sectionHeading?: ISectionHeading;
}
