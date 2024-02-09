import { BlockNames } from './blocks';
import dynamic from 'next/dynamic';
import { getStrapiMediaUrl } from '@src/utils';
import { Faq } from '@src/components/root/faq';
import { VideoFrame } from '@src/components/root/video-frame';
import { IFormData, IRedirectButton } from '@src/types/root';
import {
  ICardList,
  ICarouselBlock,
  ICarouselWithLogoFilter,
  ICenterContentBlock,
  IContactBlock,
  IContentListSection,
  ICustomCardList,
  IDoubleColumnText,
  IFeaturedArticle,
  IHeroPrimary,
  IHeroSecondary,
  ILogoBlock,
  ILogoPanelWithTestimonial,
  IRichTextBlock,
  IRichTextWithInfo,
  ITestimonial,
} from '@src/types/compound';

const Form = dynamic<IFormData>(
  import('@src/components/root/form').then((module) => module.Form)
);
const RedirectButton = dynamic<IRedirectButton>(
  import('@src/components/root/button/redirect-button').then(
    (module) => module.RedirectButton
  )
);
const CarouselBlock = dynamic<ICarouselBlock>(
  import('@src/components/compound').then((module) => module.CarouselBlock)
);
const CarouselWithLogoFilter = dynamic<ICarouselWithLogoFilter>(
  import('@src/components/compound').then(
    (module) => module.CarouselWithLogoFilter
  )
);
const CenterContentBlock = dynamic<ICenterContentBlock>(
  import('@src/components/compound').then((module) => module.CenterContentBlock)
);
const ContactBlock = dynamic<IContactBlock>(
  import('@src/components/compound').then((module) => module.ContactBlock)
);
const ContentListSection = dynamic<IContentListSection>(
  import('@src/components/compound').then((module) => module.ContentListSection)
);
const CustomCardList = dynamic<ICustomCardList>(
  import('@src/components/compound').then((module) => module.CustomCardList)
);
const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);
const DoubleColumnText = dynamic<IDoubleColumnText>(
  import('@src/components/compound').then((module) => module.DoubleColumnText)
);
const FeaturedArticle = dynamic<IFeaturedArticle>(
  import('@src/components/compound').then((module) => module.FeaturedArticle)
);
const HeroPrimary = dynamic<IHeroPrimary>(
  import('@src/components/compound').then((module) => module.HeroPrimary)
);
const HeroSecondary = dynamic<IHeroSecondary>(
  import('@src/components/compound').then((module) => module.HeroSecondary)
);
const LogoBlock = dynamic<ILogoBlock>(
  import('@src/components/compound').then((module) => module.LogoBlock)
);
const LogoPanelWithTestimonial = dynamic<ILogoPanelWithTestimonial>(
  import('@src/components/compound').then(
    (module) => module.LogoPanelWithTestimonial
  )
);
const RichTextBlock = dynamic<IRichTextBlock>(
  import('@src/components/compound').then((module) => module.RichTextBlock)
);
const RichTextWithInfo = dynamic<IRichTextWithInfo>(
  import('@src/components/compound').then((module) => module.RichTextWithInfo)
);
const Testimonial = dynamic<ITestimonial>(
  import('@src/components/compound').then((module) => module.Testimonial)
);
export const manageBlock = (ele: any, index: number) => {
  let block;
  switch (ele.__typename) {
    case BlockNames.HERO_PRIMARY:
      block = (
        <HeroPrimary
          {...ele}
          backgroundImageUrl={
            getStrapiMediaUrl(ele?.backgroundImage?.image, 'large').url
          }
          logos={ele.logos}
          redirectButton={ele.button}
        />
      );
      break;
    case BlockNames.HERO_SECONDARY:
      block = (
        <HeroSecondary
          {...ele}
          bgType={ele.heroSecondaryBgType}
          ctaArray={ele.ctaLinks}
          logos={ele.heroSecondaryLogos}
        />
      );
      break;
    case BlockNames.SLICE_CAROUSEL:
      const {
        sectionPadding,
        title,
        subTitle,
        description,
        ctaText,
        link,
        isCenterMobileView,
        carouselOptions,
        cardType,
        articles,
        podcasts,
        apps,
        teamMembers,
        locations,
        descShowLine,
      } = ele;
      const {
        showItems,
        spaceBetween,
        haveOffset,
        showPagination,
        autoPlay,
        speed,
      } = carouselOptions;

      let carouselData;
      if (articles?.data.length) {
        carouselData = articles.data;
      } else if (podcasts?.data.length) {
        carouselData = podcasts.data;
      } else if (apps?.data.length) {
        carouselData = apps.data;
      } else if (teamMembers?.data.length) {
        carouselData = teamMembers.data;
      } else if (locations?.data.length) {
        carouselData = locations.data;
      }
      block = (
        <CarouselBlock
          headingInfo={{
            title,
            subTitle,
            description,
            ctaInfo: { ctaText, ctaLink: link },
            isCenterMobileView,
          }}
          slidersInfo={carouselData}
          sliderOptions={{
            showItems,
            spaceBetween,
            haveOffset,
            showPagination,
            autoPlay,
            speed,
          }}
          descShowLine={descShowLine}
          cardType={cardType}
          sectionPadding={sectionPadding}
        />
      );
      break;
    case BlockNames.CENTER_CONTENT_BLOCK:
      block = (
        <CenterContentBlock
          {...ele}
          bgType={ele.centerContentBlockBgType}
          ctaInfo={ele.centerContentBlockCtaLink}
        />
      );
      break;
    case BlockNames.CONTACT_BLOCK:
      block = (
        <ContactBlock
          {...ele}
          bgType={ele.careerBgType}
          emailAddress={ele.email}
          ctaLink={ele.careerCtaLink}
        />
      );
      break;
    case BlockNames.VIDEO_FRAME:
      block = (
        <VideoFrame
          {...ele}
          thumbnail={
            getStrapiMediaUrl(ele.videoThumbnail, 'thumbnail' || 'medium').url
          }
          videoUrl={ele.videoSource}
        />
      );
      break;
    case BlockNames.DOUBLE_COLUMN_TEXT:
      block = (
        <DoubleColumnText {...ele} ctaLink={ele.ctaInfo} bgType="default" />
      );
      break;
    case BlockNames.RICH_TEXT_BLOCK:
      block = (
        <RichTextBlock
          {...ele}
          markdown={ele.richText}
          img={ele.image}
          imgPosition={ele.imagePosition}
          ctaLink={ele.cta}
        />
      );
      break;
    case BlockNames.TESTIMONIAL:
      block = (
        <Testimonial
          {...ele}
          bgType={ele.testimonialBgType}
          partnerLogoUrl={ele.partnerLogo}
          quoteeCompanyLogoUrl={ele.quoteeCompanyLogo}
          quoteeHeaderImageUrl={ele.quoteeHeaderImage}
        />
      );
      break;
    case BlockNames.LOGO_BLOCK:
      block = (
        <LogoBlock
          {...ele}
          bgType={ele.logoBlockBgType}
          sectionHeading={{
            title: ele.title,
            subTitle: ele.subTitle,
            description: ele.description,
            isCenterMobileView: ele.isCenterMobileView,
            ctaInfo: {
              ctaText: ele.ctaText,
              ctaLink: ele.ctaLink,
              parentBgType: ele.logoBlockBgType,
            },
          }}
          logos={ele.logos}
          isFullWidth={ele.isFullWidth}
        />
      );
      break;
    case BlockNames.LOGO_BLOCK_WITH_TESTIMONIAL:
      block = (
        <LogoPanelWithTestimonial
          {...ele}
          ctaInfo={{
            ctaText: ele.ctaText,
            ctaLink: ele.ctaLink,
            parentBgType: ele.logos.bgType,
          }}
          logos={{
            logos: ele.logos,
            isFullWidth: false,
            bgType: ele.logos.bgType,
          }}
          testimonialInfo={{
            ...ele.testimonial,
            bgType: ele.testimonial.bgType ? ele.testimonial.bgType : 'default',
            isRoot: false,
            partnerLogoUrl: ele.testimonial.partnerLogo,
            quoteeCompanyLogoUrl: ele.testimonial.quoteeCompanyLogo,
            quoteeHeaderImageUrl: ele.testimonial.quoteeHeaderImage,
            sectionPadding: {
              paddingY: ele.testimonial.sectionPadding?.paddingY
                ? ele.testimonial.sectionPadding.paddingY
                : 'py_120px',
            },
          }}
        />
      );
      break;
    case BlockNames.CONTENT_LIST_SECTION:
      block = (
        <ContentListSection
          {...ele}
          bgType={ele.contentListSectionBgType}
          contentHead={{
            ...ele.contentBlockHead,
            button: {
              buttonText: ele.contentBlockHead.buttonText,
              link: ele.contentBlockHead.buttonLink,
              colorScheme: ele.contentBlockHead.buttonColorScheme,
              linkOpenNewTab: ele.contentBlockHead.buttonlinkOpenNewTab,
            },
          }}
          contentList={ele.contentBlockList}
          isNumber={ele.isNumbered}
        />
      );
      break;
    case BlockNames.SERVICE_CONTENT_LIST_SECTION:
      block = (
        <ContentListSection
          {...ele}
          bgType={ele.ServiceContentListBG}
          contentHead={{
            ...ele.contentBlockHead,
          }}
          contentList={ele.contentBlockList}
          logoPosition="top"
        />
      );
      break;
    case BlockNames.CUSTOM_CARD_LIST:
      block = (
        <CustomCardList
          {...ele}
          apps={ele.apps?.data}
          jobCards={ele.jobs?.data}
        />
      );
      break;
    case BlockNames.CARD_LIST_PAGINATION:
      block = <CardList {...ele} />;
      break;
    case BlockNames.FEATURED_ARTICLE:
      block = (
        <FeaturedArticle
          {...ele}
          featuredArticle={ele.article.data.attributes}
        />
      );
      break;
    case BlockNames.CASESTUDY_CAROUSEL:
      let { carouselOptions: sliderOptions, caseStudies } = ele;
      block = (
        <CarouselBlock
          cardType="CASE_STUDY_CARD"
          sectionPadding={ele.sectionPadding}
          sliderOptions={sliderOptions}
          slidersInfo={
            !!caseStudies && caseStudies.data.length ? caseStudies.data : []
          }
          isBigCard={ele.isBigCard}
          caseStudyCategory={ele.caseStudyCategory}
          headingInfo={{ title: ele.title, subTitle: ele.subTitle }}
        />
      );
      break;
    case BlockNames.REDIRECT_BUTTON:
      block = (
        <section className="container p-[2.5rem] flex justify-center">
          <RedirectButton {...ele} />
        </section>
      );
      break;
    case BlockNames.BRANDING_SLIDER:
      block = <CarouselWithLogoFilter {...ele} />;
      break;
    case BlockNames.RICH_TEXT_WITH_INFO:
      block = <RichTextWithInfo {...ele} />;
      break;
    case BlockNames.FORM:
      block = (
        <Form
          formTitle={ele.title}
          formFields={ele.fields}
          buttonInfo={ele.button}
        />
      );
      break;
    case BlockNames.FAQ:
      block = <Faq {...ele} />;
  }
  return <section key={index}>{block}</section>;
};
