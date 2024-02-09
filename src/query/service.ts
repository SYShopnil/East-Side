import { gql } from '@apollo/client';
import {
  ServiceDetailsFragment,
  ServiceShortFragment,
} from './fragments/collection-type';

export const ServicesByCategory = (locale: string, category: string) => {
  return gql`{
    services(
        locale: "${locale}"
        pagination: {pageSize: 50}
        filters: {serviceCategory: {eq: "${category}"}}
    ) 
    {
      data {
        attributes {
          ...ServiceShortFragment
        }
      }
    }
  }
  ${ServiceShortFragment}
  `;
};

export const ServiceSlugsQuery = (locale: string) => {
  return gql`{
    services( 
      locale: "${locale}"
      pagination: {pageSize: 50}) 
    {
      data {
        attributes {
          slug
        }
      }
    }
  }
  `;
};

export const ServiceBySlug = (locale: string, slug: string) => {
  return gql`{
    services(
      publicationState: PREVIEW
        locale: "${locale}" 
        filters: {slug: {eq: "${slug}"}}
        ) 
    {
      data {
        attributes {
          ...ServiceDetailsFragment
        }
      }
    }
  }
  ${ServiceDetailsFragment}
  `;
};
