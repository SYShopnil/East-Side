import { gql } from '@apollo/client';
import { ImageFragment } from '../pages-fragment';

//================================================================
//=============  Event Fragment ===============================
export const EventFragment = gql`
  fragment EventFragment on Event {
    slug
    title
    description
    eventDate
    eventTime
    eventPlace
    image {
      ...ImageFragment
    }
    imageAlt
  }
  ${ImageFragment}
`;

//================================================================
//=============  Event Short Fragment ===============================
export const EventShortFragment = gql`
  fragment EventShortFragment on EventEntityResponseCollection {
    meta {
      pagination {
        total
        pageSize
      }
    }
    data {
      attributes {
        ...EventFragment
      }
    }
  }
  ${EventFragment}
`;
