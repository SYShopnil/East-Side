import { gql } from '@apollo/client';

// ======================================================
//================ ButtonFragment =======================
const ButtonFragment = gql`
  fragment ButtonFragment on ComponentButtonButton {
    buttonText
    link
    colorScheme
    linkOpenNewTab
  }
`;

// ======================================================
//================ CTAButtonFragment ====================
const CTAButtonFragment = gql`
  fragment CTAButtonFragment on ComponentButtonCtaButton {
    ctaText
    ctaLink
  }
`;
const SectionPaddingFragment = gql`
  fragment SectionPaddingFragment on ComponentConfigSectionPadding {
    paddingY
    paddingOff
  }
`;
// ======================================================
//================ ImageAttributesFragment ==============
const ImageAttributesFragment = gql`
  fragment ImageAttributesFragment on UploadFile {
    url
    formats
    width
    height
    alternativeText
  }
`;
// ======================================================
//================ ImageFragment ========================
const ImageFragment = gql`
  fragment ImageFragment on UploadFileEntityResponse {
    data {
      attributes {
        ...ImageAttributesFragment
      }
    }
  }
  ${ImageAttributesFragment}
`;
// ======================================================
//================ Hero Primary Fragment ========================
const HeroPrimaryFragment = gql`
  fragment HeroPrimaryFragment on ComponentHeroHeroHome {
    subTitle
    title
    subText
    bgType
    contentWidth
    backgroundImage {
      image {
        ...ImageFragment
      }
      alt
    }
    button {
      ...ButtonFragment
    }
    logos {
      image {
        ...ImageFragment
      }
      alt
    }
  }
  ${ImageFragment}
  ${ButtonFragment}
`;
// ======================================================
//================ Hero Quaternay ========================
const HeroHeroQuaternaryFragment = gql`
  fragment HeroHeroQuaternaryFragment on ComponentHeroHeroQuaternary {
    title
    subTitle
    logo {
      ...ImageFragment
    }
    logoAlt
    bgType
    fontColorBlack
    bgImage {
      ...ImageFragment
    }
    bgImageAlt
    featuredImage {
      ...ImageFragment
    }
    featuredImageAlt
  }
  ${ImageFragment}
`;
// ======================================================
//================ Video Frame Fragment ========================
const VideoFrameFragment = gql`
  fragment VideoFrameFragment on ComponentSliceSliceVideoFrame {
    isOverlappedWithHero
    videoSource
    videoThumbnail {
      ...ImageFragment
    }
    thumbnailAlt
  }
  ${ImageFragment}
`;
// ======================================================
//================ SliderOptionsFragment ================
const SliderOptionsFragment = gql`
  fragment SliderOptionsFragment on ComponentSliderCarouselOptions {
    showItems
    spaceBetween
    haveOffset
    showPagination
    autoPlay
    speed
  }
`;
// ======================================================
//================ TestimonialFragment ================
const TestimonialFragment = gql`
  fragment TestimonialFragment on ComponentContentBlockTestimonialBlock {
    sectionPadding {
      ...SectionPaddingFragment
    }
    subTitle
    quote
    quoteeName
    quoteeDesignation
    partnerLogo {
      ...ImageFragment
    }
    partnerLogoAlt
    quoteeCompanyLogo {
      ...ImageFragment
    }
    quoteeCompanyLogoAlt
    quoteeHeaderImage {
      ...ImageFragment
    }
    quoteeHeaderImageAlt
  }
  ${SectionPaddingFragment}
  ${ImageFragment}
`;
//================ Center Content Block Fragment =======================
const CenterContentBlockFragment = gql`
  fragment CenterContentBlockFragment on ComponentContentBlockCenterContentBlock {
    centerContentBlockBgType: bgType
    title
    subText
    description
    centerContentBlockCtaLink: ctaLink {
      ...CTAButtonFragment
    }
    sectionPadding {
      ...SectionPaddingFragment
    }
  }
  ${SectionPaddingFragment}
  ${CTAButtonFragment}
`;
// ======================================================
//================ SeoFragment ==========================
const SeoFragment = gql`
  fragment SeoFragment on ComponentSeoSeo {
    metaTitle
    metaDescription
    preventIndexing
    keywords
    sharedImage {
      data {
        attributes {
          url
        }
      }
    }
    sharedImageAlt
  }
`;
//================ Footer Form Fragment ==========================
const FormFragment = gql`
  fragment FormFragment on ComponentFormForm {
    title
    fields {
      name
      placeholder
      tagType
      type
      isRequired
    }
    button {
      buttonText
      link
      colorScheme
      linkOpenNewTab
    }
  }
`;
// ======================================================
//================ Footer Form Fragment ==========================
const FooterFormFragment = gql`
  fragment FooterFormFragment on ComponentFooterFooterForm {
    footerHeadSubtitle
    footerHeadTitle
    footerHeadDescription
    formTitle
    formFields {
      name
      placeholder
      tagType
      type
      isRequired
    }
    formButtonText
    formButtonLink
  }
`;
//================ Slice Footer Form Fragment ==========================
const SliceFooterFormFragment = gql`
  fragment SliceFooterFormFragment on ComponentSliceSliceFooterForm {
    footerHeadSubtitle
    footerHeadTitle
    footerHeadDescription
    formTitle
    formFields {
      name
      placeholder
      tagType
      type
      isRequired
    }
    formButtonText
    formButtonLink
  }
`;
// ======================================================
//================ Contact Career Fragment ==========================
const ContactCareerFragment = gql`
  fragment ContactCareerFragment on ComponentSliceContactCareerOpportunityBlock {
    careerBgType: bgType
    subTitle
    title
    description
    email
    contactNumber
    careerCtaLink: ctaLink {
      ...CTAButtonFragment
    }
    buttonOne {
      ...ButtonFragment
    }
    buttonTwo {
      ...ButtonFragment
    }
    isRightAlign
    isSmall
  }
  ${ButtonFragment}
  ${CTAButtonFragment}
`;
// ======================================================
//================ Carousel Fragment ==========================
const CarouselFragment = gql`
  fragment CarouselFragment on ComponentSliceCarousel {
    subTitle
    title
    description
    link: ctaLink
    ctaText
    isCenterMobileView
    cardType
    descShowLine
    sectionPadding {
      ...SectionPaddingFragment
    }
    carouselOptions {
      ...SliderOptionsFragment
    }
  }
  ${SectionPaddingFragment}
  ${SliderOptionsFragment}
`;

// ======================================================
//================ Content list item Fragment ========================
const ContentListItem = gql`
  fragment ContentListItem on ComponentContentBlockSectionDescriptionBlock {
    blockType
    title
    subTitle
    description
    logo {
      ...ImageFragment
    }
    logoAlt
    logoPosition
    contentCtaText
    contentCtaLink
    buttonText
    buttonLink
    buttonColorScheme
    buttonlinkOpenNewTab
  }
  ${ImageFragment}
`;

// ======================================================
//================ RichText With Info Fragment ========================
const RichTextWithInfoFragment = gql`
  fragment RichTextWithInfoFragment on ComponentSliceSliceRichTextWithInfo {
    sectionPadding {
      ...SectionPaddingFragment
    }
    firstColumnContent
    firstColumnButtons {
      ...ButtonFragment
    }
    secondColumnInfoList {
      title
      subText
    }
    appReviewLink
    totalReview
    secondColumnButtons {
      ...ButtonFragment
    }
    RichTextCtaInfo: ctaLink {
      ...CTAButtonFragment
    }
  }
  ${SectionPaddingFragment}
  ${CTAButtonFragment}
  ${ButtonFragment}
`;
//================ ButtonFragment =======================
const RichTextBlockFragment = gql`
  fragment RichTextBlockFragment on ComponentSliceSliceRichTextBlock {
    richText
    image {
      ...ImageFragment
    }
    imageAlt
    imagePosition
    cta {
      ...CTAButtonFragment
    }
    sectionPadding {
      ...SectionPaddingFragment
    }
    button {
      ...ButtonFragment
    }
  }
  ${SectionPaddingFragment}
  ${CTAButtonFragment}
  ${ButtonFragment}
  ${ImageFragment}
`;
// ================== Two Column Text Block ====================
const TwoColumnTextBlockFragment = gql`
  fragment TwoColumnTextBlockFragment on ComponentContentBlockTwoColumnTextBlock {
    title
    subText
    firstColumn
    secondColumn
    ctaInfo: ctaLink {
      ...CTAButtonFragment
    }
    sectionPadding {
      ...SectionPaddingFragment
    }
  }
  ${CTAButtonFragment}
  ${SectionPaddingFragment}
`;
// ================== Content List Section Fragment ====================
const ContentListSectionFragment = gql`
  fragment ContentListSectionFragment on ComponentSliceContentListSection {
    contentListSectionBgType: bgType
    sectionPadding {
      ...SectionPaddingFragment
    }
    contentBlockHead {
      blockType
      title
      subTitle
      description
      buttonText
      buttonLink
      buttonColorScheme
      buttonlinkOpenNewTab
    }
    contentBlockList {
      blockType
      subTitle
      description
      logo {
        ...ImageFragment
      }
      logoAlt
      contentCtaText
      contentCtaLink
    }
    isNumbered
    logoPosition
  }
  ${ImageFragment}
  ${SectionPaddingFragment}
`;

const ServiceContentListSectionFragment = gql`
  fragment ServiceContentListSectionFragment on ComponentSliceSliceServiceContentList {
    ServiceContentListBG: bgType
    contentBlockHead {
      blockType
      title
      subTitle
      description
      buttonText
      buttonLink
      buttonColorScheme
      buttonlinkOpenNewTab
    }
    contentType
    isNumbered
    contentLogoPosition: logoPosition
    sectionPadding {
      ...SectionPaddingFragment
    }
  }
  ${SectionPaddingFragment}
`;
//================ Logo Block =======================
const LogoBlockFragment = gql`
  fragment LogoBlockFragment on ComponentSliceLogoBlock {
    logoBlockBgType: bgType
    sectionPadding {
      ...SectionPaddingFragment
    }
    isFullWidth
    title
    subTitle
    description
    isCenterMobileView
    ctaText
    ctaLink
    logos(pagination: { limit: 15 }) {
      logo {
        ...ImageFragment
      }
      logoAlt
      redirectUrl
    }
  }
  ${ImageFragment}
  ${SectionPaddingFragment}
`;
//================ Custom CardList Fragment ====================
const CustomCardListFragment = gql`
  fragment CustomCardListFragment on ComponentSliceSliceCustomCardList {
    sectionPadding {
      ...SectionPaddingFragment
    }
    subTitle
    title
    cardLogoPosition
    items {
      title
      subTitle
      description
      logo {
        ...ImageFragment
      }
      logoAlt
      contentCtaText
      contentCtaLink
    }
    apps {
      data {
        attributes {
          slug
          appName
          shortDescription
          appLogo {
            logo {
              ...ImageFragment
            }
            logoAlt
          }
        }
      }
    }
    jobs {
      data {
        attributes {
          slug
          title
          subTitle
          linkedInLink
        }
      }
    }
    jobCardBgType
    showItemsCount
    othersCardType
    cardsPerPage
  }
  ${ImageFragment}
  ${SectionPaddingFragment}
`;
//================ Faq Fragment ==========================
const CardListPaginationFragment = gql`
  fragment CardListPaginationFragment on ComponentSliceSliceCardList {
    dataType
    isFilterOption
    isSearchOption
    sectionPadding {
      ...SectionPaddingFragment
    }
  }
  ${SectionPaddingFragment}
`;
//================ Branding Slider Fragment ====================
const BrandingSliderFragment = gql`
  fragment BrandingSliderFragment on ComponentSliderBrandingSlider {
    images {
      image {
        ...ImageFragment
      }
      alt
    }
    logos {
      logo {
        ...ImageFragment
      }
      logoAlt
    }
    sectionPadding {
      ...SectionPaddingFragment
    }
    carouselOptions {
      ...SliderOptionsFragment
    }
  }
  ${ImageFragment}
  ${SectionPaddingFragment}
  ${SliderOptionsFragment}
`;
//================ Faq Fragment ==========================
const FAQFragment = gql`
  fragment FAQFragment on ComponentSliceSliceFaq {
    subTitle
    title
    faqs {
      question
      answer
    }
  }
`;
export {
  ButtonFragment,
  CTAButtonFragment,
  SectionPaddingFragment,
  ImageAttributesFragment,
  SliderOptionsFragment,
  ImageFragment,
  VideoFrameFragment,
  HeroPrimaryFragment,
  HeroHeroQuaternaryFragment,
  SeoFragment,
  TestimonialFragment,
  CenterContentBlockFragment,
  FormFragment,
  FooterFormFragment,
  SliceFooterFormFragment,
  ContactCareerFragment,
  CarouselFragment,
  ContentListItem,
  RichTextWithInfoFragment,
  RichTextBlockFragment,
  TwoColumnTextBlockFragment,
  ContentListSectionFragment,
  ServiceContentListSectionFragment,
  LogoBlockFragment,
  CustomCardListFragment,
  CardListPaginationFragment,
  BrandingSliderFragment,
  FAQFragment,
};
