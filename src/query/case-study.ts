import { gql } from '@apollo/client';
import {
  CaseStudyFragment,
  CasestudyDetailsFragment,
} from './fragments/collection-type/case-study';
import { ImageFragment } from './fragments/pages-fragment';

export const CaseStudiesByCategory = (
  category: string | undefined,
  locale: string
): any => {
  let myQuery = gql`
    query CaseStudies {
      caseStudyLists(
        locale: "${locale}"
        filters: {
          category: { eq: "${category}" }
        }
        
      ) {
          data {
            attributes {
                ...CaseStudyFragment
            }
        }
      }
    }
    ${CaseStudyFragment}
  `;
  return myQuery;
};
export const CaseStudiesByServiceType = (
  serviceType: string | undefined,
  locale: string
): any => {
  let myQuery = gql`
    query CaseStudies {
      caseStudyLists(
        locale: "${locale}"
        filters: {
          serviceType: { eq: "${serviceType}" }
        }
        pagination: {pageSize: 3}
      ) {
          data {
            attributes {
              title
              slug
              subText
              companyName
              caseStudyImage {
                image {
                  ...ImageFragment
                    }
                alt
              }
            }
        }
      }
    }
    ${ImageFragment}
  `;
  return myQuery;
};

export const CaseStudiesSlug = (locale: string): any => {
  let myQuery = gql`
    query CaseStudies {
      caseStudyLists(
        filters: {locale: { eq: "${locale}" }}
      ) {
           meta {
            pagination {
              total
            }
          }
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

export const CaseStudiesBySlug = (
  slug: string | undefined,
  locale: string
): any => {
  let myQuery = gql`
    query CaseStudies {
      caseStudyLists(
        publicationState: PREVIEW
        locale: "${locale}"
        filters: {
          slug: { eq: "${slug}" }
        }
      ) {
          data {
            attributes {
                ...CasestudyDetailsFragment
            }
        }
      }
    }
    ${CasestudyDetailsFragment}
  `;
  return myQuery;
};

//===================  Case Study List ==========================
export const CaseStudyListQuery = (
  locale: string,
  pageNumber: number,
  pageSize: number,
  filterText: string
) => {
  let filterData;
  if (!!filterText) {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      filters: {case_study_tags: {tag: {eq: "${filterText}"}}}
      `;
  } else {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      `;
  }
  return gql`{
    caseStudyLists(
      ${filterData}
      ) {
        meta {
          pagination {
            pageSize
            total
          }
        }
        data {
          attributes {
            ...CaseStudyFragment
          }
        }
      }
  }
  ${CaseStudyFragment}
  `;
};

//=================  Case Study Tags ========================
export const CaseStudyTagsQuery = (locale: string) => {
  return gql`{
    caseStudyCategories(locale: "${locale}") 
    {
      data {
        id
        attributes {
          tag
        }
      }
    }
  }`;
};

//================= Featured Case Study Cards ========================
export const FeaturedCaseStudyQuery = (locale: string) => {
  return gql`{
    caseStudyLists(
      locale: "${locale}"
      filters: {isFeatured: {eq: true}}
      ) {
        data{
          attributes {
            ...CaseStudyFragment
          }
        }
      }
  }
  ${CaseStudyFragment}
  `;
};
