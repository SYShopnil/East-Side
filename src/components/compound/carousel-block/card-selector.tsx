import {
  Card,
  TeamCard,
  LocationCard,
  CaseStudyCard,
} from '@src/components/root';
import { ICard } from '@src/types/root';

// CARD_TYPE
export const CARD_TYPE = {
  CARD: 'CARD',
  TEAM_CARD: 'TEAM_CARD',
  LOCATION_CARD: 'LOCATION_CARD',
  CASE_STUDY_CARD: 'CASE_STUDY_CARD',
};

export const cardSelector = (
  cardInfo: any,
  cardType: string,
  descShowLine: number | undefined,
  isBigCard: boolean | undefined,
  caseStudyCategory: string | undefined
): JSX.Element | undefined => {
  switch (cardType) {
    case CARD_TYPE.CARD: {
      let cardData: ICard;
      if (cardInfo.__typename === 'Article') {
        cardData = {
          slug: cardInfo.slug,
          imgSrc: cardInfo.bannerImage,
          imgAlt: cardInfo.bannerImageAlt,
          title: cardInfo.title,
          description: cardInfo.subText,
          descShowLine,
          cardItem: cardInfo.__typename,
        };
      } else if (cardInfo.__typename === 'Podcast') {
        cardData = {
          slug: cardInfo.slug,
          imgSrc: cardInfo.image?.image,
          imgAlt: cardInfo.image?.alt,
          title: cardInfo.title,
          description: cardInfo.shortDescription,
          descShowLine: undefined,
          cardItem: cardInfo.__typename,
        };
      } else if (cardInfo.__typename === 'App') {
        cardData = {
          slug: cardInfo.slug,
          imgSrc: cardInfo.appLogo?.logo,
          imgAlt: cardInfo.appLogo?.logoAlt,
          title: cardInfo.appName,
          description: cardInfo.shortDescription,
          descShowLine: undefined,
          cardItem: cardInfo.__typename,
        };
      } else {
        cardData = {
          slug: cardInfo.slug,
          imgSrc: cardInfo.bannerImage,
          imgAlt: cardInfo.bannerImageAlt,
          title: cardInfo.title,
          description: cardInfo.subText,
          cardItem: cardInfo.__typename,
        };
      }
      return <Card {...cardData} />;
    }
    case CARD_TYPE.TEAM_CARD: {
      const { linkedInProfile, profileImage } = cardInfo;
      return (
        <TeamCard
          {...cardInfo}
          isBigCard={isBigCard}
          linkedInLink={linkedInProfile}
          imgSrc={profileImage}
          imgAlt={profileImage.alt}
        />
      );
    }
    case CARD_TYPE.LOCATION_CARD: {
      const { city, slug, fullAddress, image, imageAlt } = cardInfo;
      return (
        <LocationCard
          title={city}
          slug={slug}
          imgSrc={image}
          imgAlt={imageAlt}
          description={fullAddress}
        />
      );
    }
    case CARD_TYPE.CASE_STUDY_CARD: {
      return (
        <CaseStudyCard
          {...cardInfo}
          imageAltText={cardInfo.caseStudyImage?.alt}
          imageUrl={cardInfo.caseStudyImage?.image}
          redirectLink={cardInfo.slug}
          subTitle={cardInfo.subText}
          fullHeight={isBigCard}
        />
      );
    }
  }
};
