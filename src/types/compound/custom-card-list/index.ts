import { IJobCard, ISectionPadding } from '@src/types/root';
import { IContentBlock } from '../content-block';
export interface ICustomCardList {
  bgType?: string;
  sectionPadding?: ISectionPadding;
  subTitle?: string;
  title?: string;
  items: IContentBlock[];
  cardLogoPosition?: string;
  showItemsCount?: boolean;
  differentLastItem?: boolean;
  jobCards: IJobCard[];
  jobCardBgType?: string;
  apps: any[];
}
