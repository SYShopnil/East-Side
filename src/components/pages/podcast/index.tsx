import { MetaTag } from '@src/components/root';
import {
  ICarouselBlock,
  IHeroTertiary,
  IImageWithCenterContent,
} from '@src/types/compound';
import { getStrapiMediaUrl } from '@src/utils';
import dynamic from 'next/dynamic';
import { Key } from 'react';
import PublishedDate from './publishedDate';
import Tags from './tags';
const MarkdownComp = dynamic(() => import('@src/components/root/markdown'));
const CarouselBlock = dynamic<ICarouselBlock>(
  import('@src/components/compound/carousel-block').then(
    (module) => module.CarouselBlock
  )
);
const HeroTertiary = dynamic<IHeroTertiary>(
  import('@src/components/compound/hero-section/heroTertiary').then(
    (module) => module.HeroTertiary
  )
);
const ImageWithCenterContent = dynamic<IImageWithCenterContent>(
  import('@src/components/compound/image-with-center-content').then(
    (module) => module.ImageWithCenterContent
  )
);

interface ISinglePodcast {
  pageData: any;
}
const SinglePodcast = ({ pageData }: ISinglePodcast) => {
  const pageInfo = pageData?.podcastEpisodeInfo?.attributes;
  const metaTags = pageInfo.tags?.data;
  const publishedDate = pageInfo.createdAt;
  const videoDuration = pageInfo.videoLength;
  const contentBlock = pageInfo.podcastBody;
  const {
    bgType,
    ctaText,
    ctaLink,
    subTitle,
    quote,
    quoteeHeaderImage,
    quoteeHeaderImageAlt,
  } = pageInfo.host;
  const sliderOptions = {
    haveOffset: true,
    speed: 800,
    showPagination: true,
    showItems: 'sm_1_2_md_3_lg_4_xl_4',
  };
  const sliderData = pageData?.allPodcastShortInfo?.podcasts?.data;
  const featuredImageInfo = getStrapiMediaUrl(
    pageInfo.image?.image,
    'medium' || 'large'
  );
  return (
    <>
      {/* hero section */}
      <section>
        <HeroTertiary
          bgType={bgType}
          title={pageData.podcastEpisodeInfo.attributes.title}
          videoFrame={{
            thumbnail: featuredImageInfo.url,
            thumbnailAlt: featuredImageInfo.alternativeText,
            videoUrl: pageInfo.videoLink,
            isOverlappedWithHero: true,
          }}
        />
      </section>

      <div className={`pt-[1rem] `}>
        {/* take this div as a wrapper to keep those sections align to the video frame center */}
        <div className={`flex justify-center items-center`}>
          <div className={`w-[52.813rem]`}>
            <section>
              {/* video information part */}
              <div className={`container `}>
                <div className="flex flex-col md:flex-row md:justify-between ">
                  <div className={`space-x-3`}>
                    {!!metaTags && !!metaTags.length && (
                      <>
                        {metaTags.map(
                          (
                            tagRoot: { attributes: { tag: any } },
                            ind: Key | null | undefined
                          ) => {
                            const tag = tagRoot?.attributes?.tag;
                            return <MetaTag key={ind} metaTag={tag} />;
                          }
                        )}
                      </>
                    )}
                  </div>

                  {publishedDate && (
                    <PublishedDate
                      publishedDate={publishedDate}
                      videoDuration={videoDuration}
                    />
                  )}
                </div>
              </div>
            </section>
            {/* rich text part */}
            <section className={`container mt-[1.875rem]`}>
              <MarkdownComp bgType={'default'} content={contentBlock} />
            </section>
          </div>
        </div>

        {/* image with center content part */}
        <section className={`mt-[4rem]`}>
          <ImageWithCenterContent
            bgType={bgType}
            author={subTitle}
            description={quote}
            ctaInfo={{
              ctaLink,
              ctaText,
              parentBgType: bgType,
            }}
            imgUrl={{ image: quoteeHeaderImage }}
            imgAlt={quoteeHeaderImageAlt}
          />
        </section>
        <section className={`mt-[6.25rem] mb-[5.5rem]`}>
          <CarouselBlock
            headingInfo={{
              title: `Ecommerce Exchange Podcast`,
              subTitle: 'More podcast from our shopify ecommerce experts',
              ctaInfo: {
                ctaLink: '/podcast',
                ctaText: 'eastside co podcast',
              },
            }}
            cardType={'CARD'}
            slidersInfo={sliderData}
            descShowLine={5}
            sliderOptions={sliderOptions}
          />
        </section>
      </div>
    </>
  );
};

export default SinglePodcast;
