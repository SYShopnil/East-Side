import { gql } from '@apollo/client';
import {
  ImageFragment,
  CarouselFragment,
  VideoFrameFragment,
  ButtonFragment,
  CTAButtonFragment,
  ContactCareerFragment,
  ContentListItem,
} from '../pages-fragment';

//========================================================
//=============  App with out body details ===========
export const AppShortFragment = gql`
  fragment AppShortFragment on AppRelationResponseCollection {
    data {
      attributes {
        slug
        appName
        shortDescription
        appLogo {
          logo {
            ...ImageFragment
          }
          logoAlt
        }
      }
    }
  }
  ${ImageFragment}
`;
export const AppDetailsFragment = gql`
  fragment AppDetailsFragment on AppRelationResponseCollection {
    data {
      attributes {
        appName
        slug
        shortDescription
        subText
        videoFrame {
          ...VideoFrameFragment
        }
        appLogo {
          logo {
            ...ImageFragment
          }
          logoAlt
        }
        appInfo {
          firstColumnContent
          firstColumnButtons {
            ...ButtonFragment
          }
          secondColumnInfoList {
            title
            subText
          }
          appReviewLink
          totalReview
          secondColumnButtons {
            ...ButtonFragment
          }
          ctaLink {
            ...CTAButtonFragment
          }
        }
        appImages {
          image {
            ...ImageFragment
          }
        }
        supportAndContactInfo {
          ...ContactCareerFragment
        }
        appClients {
          ...CarouselFragment
        }
        appFacilities {
          subTitle
          title
          cardLogoPosition
          items {
            ...ContentListItem
          }
          showItemsCount
        }
        moreApps {
          ...CarouselFragment
        }
      }
    }
  }
  ${ImageFragment}
  ${VideoFrameFragment}
  ${CarouselFragment}
  ${ButtonFragment}
  ${CTAButtonFragment}
  ${ContactCareerFragment}
  ${ContentListItem}
`;
