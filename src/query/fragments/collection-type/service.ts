import { gql } from '@apollo/client';
import {
  ButtonFragment,
  CenterContentBlockFragment,
  ImageFragment,
  RichTextBlockFragment,
  SectionPaddingFragment,
  ServiceContentListSectionFragment,
  SliceFooterFormFragment,
  SliderOptionsFragment,
  TestimonialFragment,
  TwoColumnTextBlockFragment,
} from '../pages-fragment';

export const ServiceShortFragment = gql`
  fragment ServiceShortFragment on Service {
    serviceName
    slug
    ctaText
    shortDescription
    icon {
      ...ImageFragment
    }
  }
  ${ImageFragment}
`;

export const ServiceDetailsFragment = gql`
  fragment ServiceDetailsFragment on Service {
    ...ServiceShortFragment
    serviceCategory
    block {
      ... on ComponentHeroHeroServiceSingle {
        title
        subTitle
        subText
        bgType
        bgImage {
          ...ImageFragment
        }
        bgImageAlt
        featuredImage {
          ...ImageFragment
        }
        featuredImageAlt
      }
      ...ButtonFragment
      ...TwoColumnTextBlockFragment
      ...RichTextBlockFragment
      ...CenterContentBlockFragment
      ...ServiceContentListSectionFragment
      ... on ComponentContentBlockTestimonialBlock {
        testimonialBgType: bgType
        ...TestimonialFragment
      }
      ... on ComponentSliceCaseStudyCarouselBlock {
        title
        subTitle
        caseStudyCategory
        isBigCard
        carouselOptions {
          ...SliderOptionsFragment
        }
        sectionPadding {
          ...SectionPaddingFragment
        }
      }
    }
    footerFormInfo {
      ...SliceFooterFormFragment
    }
  }
  ${ServiceShortFragment}
  ${SliceFooterFormFragment}
  ${ImageFragment}
  ${ButtonFragment}
  ${TwoColumnTextBlockFragment}
  ${RichTextBlockFragment}
  ${CenterContentBlockFragment}
  ${ServiceContentListSectionFragment}
  ${TestimonialFragment}
  ${SliderOptionsFragment}
  ${SectionPaddingFragment}
`;
