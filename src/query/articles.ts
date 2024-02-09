//========================================================

import { gql } from '@apollo/client';
import { ArticleFragment } from './fragments/collection-type/article';

//=============  Article with out body details ===========
const ArticleDetailFragment = gql`
  fragment ArticleDetailFragment on ArticleEntityResponseCollection {
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
    data {
      attributes {
        ...ArticleFragment
      }
    }
  }
  ${ArticleFragment}
`;

//===================  Articles ==========================
export const ArticleQuery = (
  locale: string,
  pageNumber: number,
  pageSize: number,
  searchText: string,
  filterText: string,
  tags?: string
) => {
  let filterData;
  if (!!tags && tags.length) {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      filters: {tags: {tag: {in: [${tags}]}}}
      `;
  } else if (!!searchText && !!filterText) {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      filters: {
        and: [{or: [{title: {contains: "${searchText}"}}, {subText: {contains: "${searchText}"}}, {articleBody: {contains: "${searchText}"}}, {author: {name: {contains: "${searchText}"}}}]}, 
            {tags: {tag: {eq: "${filterText}"}}}
          ]
      }`;
  } else if (!searchText && !!filterText) {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      filters: {tags: {tag: {eq: "${filterText}"}}}
      `;
  } else if (!!searchText && !filterText) {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      filters: {
        or: [{title: {contains: "${searchText}"}}, {subText: {contains: "${searchText}"}}, {articleBody: {contains: "${searchText}"}}, {author: {name: {contains: "${searchText}"}}}]
      }`;
  } else {
    filterData = `locale: "${locale}"
      pagination: {page: ${pageNumber}, pageSize: ${pageSize}}
      `;
  }
  return gql`{
    articles(
      ${filterData}
      ) {
        ...ArticleDetailFragment
      }
  }
  ${ArticleDetailFragment}
  `;
};

//=======================================================
export const ArticleBySlug = (locale: string, slug: string) => {
  return gql`{
    articles(
      locale: "${locale}"
      filters: {slug: {eq: "${slug}"}}
      ) {
        ...ArticleDetailFragment
      }
  }
  ${ArticleDetailFragment}
  `;
};
export const ArticlesSlug = (locale: string) => {
  return gql`{
    articles(
      locale: "${locale}"
      ) {
        data {
          attributes {
            slug
          }
        }
      }
  }
  `;
};

//========================================================
//=================  Article Tags ========================
export const ArticleTagsQuery = (locale: string) => {
  return gql`{
    articleTags(locale: "${locale}") 
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
