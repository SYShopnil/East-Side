import { gql } from '@apollo/client';
import { ImageFragment } from '../pages-fragment';
export const ArticleFragment = gql`
  fragment ArticleFragment on Article {
    title
    slug
    subText
    tags {
      data {
        attributes {
          tag
          locale
        }
      }
    }
    bannerImage {
      ...ImageFragment
    }
    bannerImageAlt
    createdAt
    publishedAt
    locale
    author {
      data {
        attributes {
          name
          authorSlug: slug
          bio
          designation
          profileImage {
            image {
              ...ImageFragment
            }
            alt
          }
        }
      }
    }
    articleBody
  }
  ${ImageFragment}
`;

//========================================================
//=============  Article with out body details ===========
export const ArticleShortFragment = gql`
  fragment ArticleShortFragment on ArticleRelationResponseCollection {
    data {
      attributes {
        ...ArticleFragment
      }
    }
  }
  ${ArticleFragment}
`;

//========================================================
//=============  Article with out body details ===========
export const FeaturedArticleFragment = gql`
  fragment FeaturedArticleFragment on ArticleEntityResponse {
    data {
      attributes {
        ...ArticleFragment
      }
    }
  }
  ${ArticleFragment}
`;
//========================================================
//=============  Article with details ====================
export const ArticleDetailsFragment = gql`
  fragment ArticleDetailsFragment on ArticleRelationResponseCollection {
    data {
      attributes {
        ...ArticleFragment
      }
    }
  }
  ${ArticleFragment}
`;
