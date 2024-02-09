// Internal Imports
import { ISectionPadding } from '@src/types/root';
import { ISectionHeading } from '@src/types/compound';

// ISliderOptions
export interface ISliderOptions {
  vertical?: boolean;
  autoItemCount?: boolean;
  isLoop?: boolean;
  isCenter?: boolean;
  autoPlay?: boolean;
  pauseOnHover?: boolean;
  haveOffset?: boolean;
  showBleeding?: boolean;
  activeItemIndex?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  showDragHandler?: boolean;
  spaceBetween?: string;
  showItems?: string;
  className?: string;
  noMargin?: boolean;
  speed?: number;
}

// CARD_TYPE
export enum CARD_TYPE {
  CARD = 'CARD',
  TEAM_CARD = 'TEAM_CARD',
  LOCATION_CARD = 'LOCATION_CARD',
  CASE_STUDY_CARD = 'CASE_STUDY_CARD',
}

// cardType
export type ICardType = `${CARD_TYPE}`;

// ICarouselBlock
export interface ICarouselBlock {
  sectionPadding?: ISectionPadding;
  cardType: ICardType;
  headingInfo?: ISectionHeading;
  sliderOptions?: ISliderOptions | undefined;
  slidersInfo?: any[];
  descShowLine?: number;
  caseStudyCategory?: string;
  isBigCard?: boolean;
}
