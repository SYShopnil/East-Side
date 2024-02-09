import { HeroSection } from './heroSection';
import { BlogContent } from './blogContent';
import dynamic from 'next/dynamic';
import { ICarouselBlock, IImageWithCenterContent } from '@src/types/compound';

const ImageWithCenterContent = dynamic<IImageWithCenterContent>(
  import('@src/components/compound/image-with-center-content').then(
    (module) => module.ImageWithCenterContent
  )
);
const CarouselBlock = dynamic<ICarouselBlock>(
  import('@src/components/compound/carousel-block').then(
    (module) => module.CarouselBlock
  )
);
export const Blog = ({
  blogData,
  moreBlog,
}: {
  blogData: any;
  moreBlog: any;
}) => {
  const {
    title,
    subText,
    tags,
    bannerImage,
    publishedAt,
    author,
    articleBody,
  } = blogData;
  //Article Carousel Slider Options
  let authorInfo = { name: '', profileImage: '', alt: '', bio: '' };
  if (author.data) authorInfo = author.data.attributes;
  const articleSliderOptions = {
    haveOffset: true,
    showItems: 'sm_1_2_md_2_lg_2_7_xl_3_14',
    spaceBetween: 'twenty',
  };

  return (
    <>
      <section className="py-0">
        <HeroSection
          title={title}
          description={subText}
          bgType="image"
          bgImage={bannerImage}
          author={author}
        />
      </section>
      <section className="py-0">
        <BlogContent
          bgType="default"
          metaTags={tags?.data}
          publishedDate={publishedAt}
          contentBlock={articleBody}
        />
      </section>
      {!!authorInfo && authorInfo.name && (
        <section className="">
          <ImageWithCenterContent
            bgType="gradient_green"
            author={authorInfo.name}
            imgUrl={authorInfo.profileImage}
            imgAlt={authorInfo.alt}
            subText={'The Author'}
            description={authorInfo.bio}
            ctaInfo={{ ctaText: 'work with us', ctaLink: '/career' }}
          />
        </section>
      )}
      <section className="py-[5.5rem]">
        <CarouselBlock
          headingInfo={{
            subTitle: 'from the shopify experts',
            title: 'More aticles from our shopify ecommerce experts',
          }}
          cardType={'CARD'}
          slidersInfo={!!moreBlog && !!moreBlog.length ? moreBlog : []}
          sliderOptions={articleSliderOptions}
          descShowLine={3}
        />
      </section>
    </>
  );
};
