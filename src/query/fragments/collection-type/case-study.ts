import { gql } from '@apollo/client';
import {
  ImageFragment,
  FooterFormFragment,
  RichTextWithInfoFragment,
  RichTextBlockFragment,
  TestimonialFragment,
  CenterContentBlockFragment,
  TwoColumnTextBlockFragment,
  ButtonFragment,
  HeroHeroQuaternaryFragment,
  BrandingSliderFragment,
} from '../pages-fragment';

//================================================================
//=============  Casestudy Fragment ===============================
export const CaseStudyFragment = gql`
  fragment CaseStudyFragment on CaseStudyList {
    title
    slug
    subText
    companyName
    isWinner
    case_study_tags {
      data {
        id
        attributes {
          tag
        }
      }
    }
    category
    isFeatured
    caseStudyImage {
      image {
        ...ImageFragment
      }
      alt
    }
  }
  ${ImageFragment}
`;

//================================================================
//=============  Casestudy Short Fragment ===============================
export const CasestudyShortFragment = gql`
  fragment CasestudyShortFragment on CaseStudyListRelationResponseCollection {
    data {
      attributes {
        ...CaseStudyFragment
      }
    }
  }
  ${CaseStudyFragment}
`;

//================================================================
//=============  Casestudy Details Fragment ===============================
export const CasestudyDetailsFragment = gql`
  fragment CasestudyDetailsFragment on CaseStudyList {
    ...CaseStudyFragment
    heroSection {
      ...HeroHeroQuaternaryFragment
    }
    block {
      __typename
      ...RichTextWithInfoFragment
      ...RichTextBlockFragment
      ... on ComponentContentBlockTestimonialBlock {
        testimonialBgType: bgType
        ...TestimonialFragment
      }
      ...CenterContentBlockFragment
      ...TwoColumnTextBlockFragment
      ...ButtonFragment
      ...BrandingSliderFragment
    }
    footerFormInfo {
      ...FooterFormFragment
    }
  }
  ${CaseStudyFragment}
  ${FooterFormFragment}
  ${ImageFragment}
  ${RichTextWithInfoFragment}
  ${RichTextBlockFragment}
  ${TestimonialFragment}
  ${CenterContentBlockFragment}
  ${TwoColumnTextBlockFragment}
  ${ButtonFragment}
  ${HeroHeroQuaternaryFragment}
  ${BrandingSliderFragment}
`;
