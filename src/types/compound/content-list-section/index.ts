import { IContentBlock } from '../content-block';
import { ISectionPadding } from '@src/types/root';

export interface IContentListSection {
  bgType: string;
  sectionPadding?: ISectionPadding;
  contentHead: IContentBlock;
  isNumber?: boolean;
  logoPosition?: string;
  contentList: any[];
}
