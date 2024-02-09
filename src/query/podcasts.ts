import { gql } from '@apollo/client';
import { PodcastFragment } from './fragments/collection-type';

export const GetAllPodcastSlug = (locale: string) => {
  const myQuery = gql`
    query {
      podcasts(locale: "${locale}") {
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

export const GetPodcastDetailsBySlug = (locale: string, slug: string) => {
  const myQuery = gql`
    query {
      podcasts(
        locale: "${locale}"
        filters: {
          slug: {
            eq: "${slug}"
          }
        }
      ) {
      data{
        attributes {
        title
          videoLink
          videoLength
          createdAt
          image {
            image{
              data{
                attributes{
                  url
                  formats
                  width
                  height
                  alternativeText
                }
              }
            }
          }
          tags{
            data{
              attributes{
                tag
              }
            }
          }
          podcastBody
          host {
            quoteeHeaderImage{
              data{
                attributes{
                  url
                }
              }
            }
            quoteeHeaderImageAlt
            bgType
            quote
            subTitle
            ctaText
            ctaLink
          
          }
        }
      }
    }
  }
  `;
  return myQuery;
};

export const GetAllPodcastShortDescription = (locale: string, slug: string) => {
  const myQuery = gql`
    query {
      podcasts(
        locale: "${locale}"
        filters: {
          slug: {
            ne: "${slug}"
          }
        }
        sort: "createdAt:asc"
      ) {
        data {
          attributes {
            slug
            title
            shortDescription
            image {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  return myQuery;
};

//===================  All Podcasts ==========================
export const PodcastsQuery = (
  locale: string,
  pageNumber: number,
  pageSize: number
) => {
  return gql`{
    podcasts(
      locale: "${locale}"
      pagination: { page: ${pageNumber}, pageSize: ${pageSize} }
      ) {
        meta {
          pagination {
            total
          }
        }
        data {
          attributes {
            ...PodcastFragment
          }
        }
      }
  }
  ${PodcastFragment}
  `;
};

export default GetAllPodcastSlug;
