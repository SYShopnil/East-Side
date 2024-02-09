import {
  IRedirectButton,
  IFooterAddress,
  ICtaLink,
  IVideoFrame,
} from '@src/types/root';

type logo = {
  image: string;
  alt: string;
};

export interface IHeroPrimary {
  bgType: string;
  contentWidth: string;
  backgroundImageUrl?: string;
  title: string;
  subTitle: string;
  subText?: string;
  logos: logo[];
  redirectButton?: IRedirectButton;
  footerAddress?: IFooterAddress;
  isHome?: boolean;
}

export interface IHeroService {
  title: string;
  subTitle?: string;
  subText?: string;
  bgType: string;
  bgImage?: any;
  featuredImage?: any;
  featuredImageAlt?: string;
}

export interface IHeroSecondary {
  bgType: string;
  title: string;
  subText: string;
  ctaArray?: ICtaLink[];
  logos?: any;
  videoFrame?: IVideoFrame;
}
export interface IHeroTeamMember {
  bgType: string;
  subTitle: string;
  memberName: string;
  designation: string;
  linkedInUrl: string;
  description: string;
  memberImageUrl: string;
  memberImageAlt: string;
}
export interface IHeroQuaternary {
  bgType: string;
  bgImageUrl?: any;
  hasTopOverlay?: boolean;
  fontColorBlack?: boolean;
  logoUrl?: any;
  logoAlt?: string;
  featuredImageUrl?: any;
  featuredImageAlt?: string;
  title: string;
  subTitle?: string;
}
export interface IHeroTertiary {
  bgType: string;
  title: string;
  description?: string;
  videoFrame?: IVideoFrame;
}
