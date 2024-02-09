import { gql } from '@apollo/client';
import { ImageFragment, HeroPrimaryFragment } from '../pages-fragment';
export const LocationFragment = gql`
  fragment LocationFragment on Location {
    city
    slug
    fullAddress
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    imageAlt
  }
`;

//========================================================
//==========  Location with out  details ==============
export const LocationShortFragment = gql`
  fragment LocationShortFragment on LocationRelationResponseCollection {
    data {
      attributes {
        ...LocationFragment
      }
    }
  }
  ${LocationFragment}
`;
//========================================================
//==========  Location with out  details ==============
export const LocationDetailsFragment = gql`
  fragment LocationDetailsFragment on LocationRelationResponseCollection {
    data {
      attributes {
        ...LocationFragment
        email
        phone
        heroSection {
          ...HeroPrimaryFragment
        }
        block {
          __typename
        }
      }
    }
  }
  ${LocationFragment}
  ${HeroPrimaryFragment}
`;
