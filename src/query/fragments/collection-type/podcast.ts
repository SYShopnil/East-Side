import { gql } from '@apollo/client';
import { ImageFragment } from '../pages-fragment';
export const PodcastFragment = gql`
  fragment PodcastFragment on Podcast {
    title
    slug
    shortDescription
    image {
      image {
        ...ImageFragment
      }
      alt
    }
    videoLink
    videoLength
    createdAt
    publishedDate
  }
  ${ImageFragment}
`;

//========================================================
//==========  Podcast with out body and host details =====
export const PodcastShortFragment = gql`
  fragment PodcastShortFragment on PodcastRelationResponseCollection {
    data {
      attributes {
        ...PodcastFragment
      }
    }
  }
  ${PodcastFragment}
`;
//========================================================
//=============  Podcast with body and host details ======
export const PodcastDetailsFragment = gql`
  fragment PodcastDetailsFragment on PodcastRelationResponseCollection {
    data {
      attributes {
        ...PodcastFragment
        podcastBody
        host {
          subTitle
          quote
          bgType
          quoteeHeaderImage {
            ...ImageFragment
          }
          quoteeHeaderImageAlt
          ctaText
          ctaLink
        }
      }
    }
  }
  ${PodcastFragment}
`;
