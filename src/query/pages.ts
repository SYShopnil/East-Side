import { gql } from '@apollo/client';
import {
  ArticleShortFragment,
  PodcastShortFragment,
  AppShortFragment,
  FeaturedArticleFragment,
  TeamMemberShortFragment,
  LocationShortFragment,
} from './fragments/collection-type';
import {
  CTAButtonFragment,
  SectionPaddingFragment,
  ImageAttributesFragment,
  ImageFragment,
  VideoFrameFragment,
  HeroPrimaryFragment,
  TestimonialFragment,
  SeoFragment,
  ContactCareerFragment,
  SliderOptionsFragment,
  CarouselFragment,
  RichTextWithInfoFragment,
  TwoColumnTextBlockFragment,
  ContentListSectionFragment,
  ServiceContentListSectionFragment,
  LogoBlockFragment,
  CustomCardListFragment,
  RichTextBlockFragment,
  CenterContentBlockFragment,
  FormFragment,
  FAQFragment,
  CardListPaginationFragment,
} from './fragments/pages-fragment';

export const PageBySlug = (
  slug: string | string[] | undefined,
  locale: string | string[] | undefined
): any => {
  let myQuery = gql`query Pages {
    pages(publicationState: PREVIEW locale: "${locale}" filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          title
          slug
          locale
          seo {
            ...SeoFragment
          }
          block {

            # ============= Hero Primary ============
             ...HeroPrimaryFragment
            # ============= Hero Secondary ==========
            ... on ComponentHeroHeroSecondary {
              title
              subText
              heroSecondaryBgType: bgType
              ctaLinks {
                ...CTAButtonFragment
              }
              heroSecondaryLogos: logos {
                 data {
                attributes {
                  ...ImageAttributesFragment
                }
              }
              }
              videoFrame {
                ...VideoFrameFragment
              }
          }
          # ============= Component Carousel ======
          ... on ComponentSliceCarousel {
            ...CarouselFragment
            articles {
              ...ArticleShortFragment
            }
            podcasts {
              ...PodcastShortFragment
            }
            apps {
              ...AppShortFragment
            }
            teamMembers {
              ...TeamMemberShortFragment
            }
            locations {
              ...LocationShortFragment
            }
          }
          # ============= Component Casestudy Carousel ======
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
          # ========= Center Content Block ========
          ...CenterContentBlockFragment
          # ============ Contact Block ============
            ...ContactCareerFragment
          # ============= Video Frame =============
            ...VideoFrameFragment
          # =========== Rich Text Block ===========
          ...RichTextBlockFragment
          # ============= Testimonial ==============
          ... on ComponentContentBlockTestimonialBlock {
           testimonialBgType: bgType
           ...TestimonialFragment
          }
          # ============= Logo block ==============
          ...LogoBlockFragment
          # ===== Logo Block With Testimonial =====
          ... on ComponentSliceLogoBlockWithTestimonial {
            testimonial {
              bgType
                ...TestimonialFragment
            }
            logos {
              logo {
                ...ImageFragment
              }
              logoAlt
              redirectUrl
            }
            ctaText
            ctaLink
            }
          # ============= Content list section =========
          ...ContentListSectionFragment
          ...ServiceContentListSectionFragment
          # ============= Custom card list =============
          ...CustomCardListFragment
          ...CardListPaginationFragment
          # ========== Featured Article ================
          ... on ComponentSliceSliceFeaturedArticle {
            sectionPadding {
              ...SectionPaddingFragment
            }
            article {
              ...FeaturedArticleFragment
            }
            isOverlappedWithHero
          }
          # ============= Rich Text With Info ==========
          ...RichTextWithInfoFragment
          # ============= Two Column Text Block =========
          ...TwoColumnTextBlockFragment
          # =========== Form ===========================
          ...FormFragment
          # =========== Form ===========================
          ...FAQFragment
          }
          }
        }
      }
    }
  ${ImageAttributesFragment}
  ${ImageFragment}
  ${VideoFrameFragment}
  ${HeroPrimaryFragment}
  ${SeoFragment}
  ${TestimonialFragment}
  ${CenterContentBlockFragment}
  ${CTAButtonFragment}
  ${SliderOptionsFragment}
  ${ArticleShortFragment}
  ${PodcastShortFragment}
  ${TeamMemberShortFragment}
  ${LocationShortFragment}
  ${SectionPaddingFragment}
  ${CarouselFragment}
  ${ContactCareerFragment}
  ${AppShortFragment}
  ${FeaturedArticleFragment}
  ${RichTextWithInfoFragment}
  ${RichTextBlockFragment}
  ${TwoColumnTextBlockFragment}
  ${ContentListSectionFragment}
  ${ServiceContentListSectionFragment}
  ${LogoBlockFragment}
  ${CustomCardListFragment}
  ${FormFragment}
  ${FAQFragment}
  ${CardListPaginationFragment}
`;
  return myQuery;
};
