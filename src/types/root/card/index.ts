// ICard
export interface ICard {
  slug: string;
  imgSrc: any;
  imgAlt: string;
  title: string;
  description: string;
  descShowLine?: number;
  isFeatured?: boolean;
  cardItem?: string;
}

// IEventCard
export interface IEventCard {
  slug: string;
  imgSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  descShowLine?: number;
  eventDate?: string;
  eventPlace?: string;
  eventTime?: string;
}

// IArticle
export interface IArticle {
  slug: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  descShowLine?: number;
  contentBlock?: string;
  authorName?: string;
  authorSlug?: string;
  authorAvatar?: string;
  authorAvatarAlt?: string;
  metaTags?: string[];
  publishedDate?: string;
  videoLength?: number;
}

// ITeamCard
export type teamCardVariant = 'primary' | 'secondary';
export interface ITeamCard {
  slug: string;
  imgSrc: any;
  imgAlt: string;
  name: string;
  designation: string;
  linkedInLink?: string;
  variant?: teamCardVariant;
  isBigCard?: boolean;
}
