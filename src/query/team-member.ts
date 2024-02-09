import { gql } from '@apollo/client';
import { ArticleFragment } from './fragments/collection-type/article';
import { TeamMemberFragment } from './fragments/collection-type/team-member';

/**
 *
 *This query will give all available team member's slug
 *
 */
export const GetAllMemberSlug = (locale: string) => {
  const myQuery = gql`
    query {
      teamMembers(locale: "${locale}") {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;
  return myQuery;
};

/**
 *
 * This query will give a single team members's information
 *
 */

export const GetMemberBySlug = (locale: string, slug: string) => {
  const myQuery = gql`
    query {
      teamMembers(publicationState: PREVIEW locale: "${locale}" filters: { slug: { eq: "${slug}" } }) {
        data {
          attributes {
            ...TeamMemberFragment
            bio
            testimonial {
              quoteeName
              quote
              quoteeDesignation
            }
            memberDetail{
              firstColumn
              secondColumn
            }
          }
        }
      }
    }
    ${TeamMemberFragment}
  `;
  return myQuery;
};

/**
 *
 *This will give a single team member's all available articles
 *
 */

export const GetSingleMemberArticlesBySlug = (locale: string, slug: string) => {
  const myQuery = gql`
    query {
      articles(locale: "${locale}" filters: { author: { slug: { eq: "${slug}" } } }) {
        data {
          attributes {
            ...ArticleFragment
          }
        }
      }
    }
    ${ArticleFragment}
  `;
  return myQuery;
};

/**
 *
 * This query will give all team member's data
 *
 */

export const GetAllMemberData = (locale: string) => {
  const myQuery = gql`
    query {
      teamMembers(locale: "${locale}") {
        data {
          attributes {
            ...TeamMemberFragment
          }
        }
      }
    }
    ${TeamMemberFragment}
  `;
  return myQuery;
};
