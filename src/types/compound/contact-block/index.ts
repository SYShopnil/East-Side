import { ICtaLink, IRedirectButton } from '@src/types/root';

export interface IContactBlock {
  bgType: string;
  subTitle?: string;
  title: string;
  description: string;
  emailAddress?: string;
  contactNumber?: string;
  ctaLink?: ICtaLink;
  buttonOne?: IRedirectButton;
  buttonTwo?: IRedirectButton;
  isRightAlign?: boolean;
  isSmall?: boolean;
  isAnimated?: boolean;
  setIsParentHover?: any;
}
