// Internal Imports
import { ICtaLink, ILogoPanel } from '@src/types/root';
import { ICenterContentBlock } from '@src/types/compound';

// ILogoPanelWithCenterContent
export interface ILogoPanelWithCenterContent {
  centerContentInfo: ICenterContentBlock;
  logos: ILogoPanel;
  ctaInfo: ICtaLink;
}
