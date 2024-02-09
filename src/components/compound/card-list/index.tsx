import {
  ArticleCard,
  CaseStudyCard,
  EventCard,
  Card,
} from '@src/components/root';
import { ICardList, ICardTypeEnum } from '@src/types/compound';
import {
  getStrapiMediaUrl,
  sectionPaddingClassSelector,
  backgroundClassSelector,
  fontColorSelector,
} from '@src/utils';
import Loading from '@src/components/root/loading';
import NotFoundData from '@src/components/root/not-found';
export const CardList = ({
  bgType = 'default',
  sectionPadding,
  title,
  subTitle,
  cardData,
  cardType,
  dataType,
  isFilterOption = false,
  isSearchOption = false,
}: ICardList) => {
  return (
    <div
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
      className={`container ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)} `}
    >
      {subTitle && (
        <h3
          className={`flex text-[1.625rem] md:text-[0.875rem] leading-[1.5] mb-[0.25rem] uppercase`}
        >
          {subTitle}
        </h3>
      )}
      {title && (
        <h2
          className={`block text-[1.625rem] md:text-[1.875rem] leading-[2.4375rem] md:leading-[2.8125rem]`}
        >
          {title}
        </h2>
      )}
      {!cardData ? (
        <Loading />
      ) : !!cardData && !!cardData.length ? (
        <div className={`mt-[1.875rem]`}>
          <div
            className={`grid grid-cols-1 ${
              cardType === ICardTypeEnum.CASE_STUDY
                ? 'md:grid-cols-2 md:gap-x-[0.5rem] gap-y-[1rem] md:gap-y-[0.5rem]'
                : cardType === ICardTypeEnum.LOCATION
                ? 'md:grid-cols-2 md:gap-x-[0.625rem] md:gap-y-[1.875rem]'
                : 'md:grid-cols-3 md:gap-x-[1.25rem] gap-y-[2.5rem] md:gap-y-[3.75rem]'
            }`}
          >
            {cardData.map((cardInfo, ind) => {
              /* Blog Card */
              let blogTags: string[] = [];
              let blogProps;
              if (cardType === ICardTypeEnum.BLOG) {
                cardInfo.attributes.tags?.data.map((ele: any, ind: number) => {
                  blogTags.push(ele.attributes.tag);
                });
                const {
                  slug,
                  title,
                  subText,
                  bannerImage,
                  bannerImageAlt,
                  articleBody,
                  publishedAt,
                  author,
                } = cardInfo.attributes;
                const { url, alternativeText } = getStrapiMediaUrl(
                  bannerImage,
                  'medium' || 'thumbnail'
                );
                const { url: authorImageUrl, alternativeText: authorImageAlt } =
                  getStrapiMediaUrl(
                    author.data?.attributes.profileImage?.image,
                    'small' || 'thumbnail'
                  );
                blogProps = {
                  slug: slug,
                  title: title,
                  description: subText,
                  imgSrc: url,
                  imgAlt: bannerImageAlt ? bannerImageAlt : alternativeText,
                  authorName: author.data?.attributes.name,
                  authorSlug: author.data?.attributes.authorSlug,
                  authorAvatar: authorImageUrl,
                  authorAvatarAlt: author.data?.attributes.profileImage.alt
                    ? author.data?.attributes.profileImage.alt
                    : authorImageAlt,
                  contentBlock: articleBody,
                  publishedDate: publishedAt,
                };
              }

              /* Podcast Card */
              let podcastProps;
              if (cardType === ICardTypeEnum.PODCAST) {
                const {
                  slug,
                  title,
                  shortDescription,
                  videoLength,
                  publishedDate,
                  createdAt,
                  image,
                } = cardInfo.attributes;
                const { url, alternativeText } = getStrapiMediaUrl(
                  image.image,
                  'medium' || 'thumbnail'
                );
                podcastProps = {
                  slug: slug,
                  title: title,
                  description: shortDescription,
                  imgSrc: url,
                  imgAlt: image.alt ? image.alt : alternativeText,
                  publishedDate: publishedDate ? publishedDate : createdAt,
                  videoLength: videoLength,
                };
              }

              /* Case Study Card */
              const caseStudyTag = cardInfo.attributes.case_study_tags?.data;

              /* Event Card */
              let eventImageUrl, eventImageAlt;
              if (cardType === ICardTypeEnum.EVENT) {
                const { url, alternativeText } = getStrapiMediaUrl(
                  cardInfo.attributes.image
                );
                eventImageUrl = url;
                eventImageAlt = cardInfo.attributes.image.imageAlt
                  ? cardInfo.attributes.image.imageAlt
                  : alternativeText;
              }

              /* Location Card */
              let locationCardProps;
              if (cardType === ICardTypeEnum.LOCATION) {
                locationCardProps = {
                  slug: cardInfo.attributes.slug,
                  title: cardInfo.attributes.city,
                  description: cardInfo.attributes.fullAddress,
                  imgSrc: cardInfo.attributes.image,
                  imgAlt: cardInfo.attributes.imageAlt,
                  cardItem: 'Location',
                };
              }

              return (
                <div key={ind}>
                  {!!blogProps && cardType === ICardTypeEnum.BLOG && (
                    <ArticleCard
                      {...blogProps}
                      descShowLine={5}
                      metaTags={blogTags}
                    />
                  )}
                  {cardType === ICardTypeEnum.EVENT && (
                    <EventCard
                      {...cardInfo.attributes}
                      imgSrc={eventImageUrl}
                      imageAlt={eventImageAlt}
                    />
                  )}
                  {!!podcastProps && cardType === ICardTypeEnum.PODCAST && (
                    <ArticleCard {...podcastProps} />
                  )}
                  {!!cardInfo.attributes &&
                    cardType === ICardTypeEnum.CASE_STUDY && (
                      <div>
                        <CaseStudyCard
                          {...cardInfo.attributes}
                          imageUrl={cardInfo.attributes.caseStudyImage.image}
                          subTitle={
                            !!caseStudyTag && !!caseStudyTag.length
                              ? caseStudyTag[0].attributes.tag
                              : ''
                          }
                          redirectLink={cardInfo.attributes.slug}
                        />
                      </div>
                    )}
                  {!!locationCardProps &&
                    cardType === ICardTypeEnum.LOCATION && (
                      <div>
                        <Card {...locationCardProps} />
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <NotFoundData />
      )}
    </div>
  );
};
