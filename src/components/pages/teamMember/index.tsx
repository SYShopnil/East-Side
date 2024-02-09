import { HeroSection } from './heroSection';
import { CARD_TYPE, ICarouselBlock } from '@src/types/compound/carousel-block';
import dynamic from 'next/dynamic';
import { IDoubleColumnText, ITestimonial } from '@src/types/compound';
const CarouselBlock = dynamic<ICarouselBlock>(
  import('@src/components/compound/carousel-block').then(
    (module) => module.CarouselBlock
  )
);
const Testimonial = dynamic<ITestimonial>(
  import('@src/components/compound/testimonial').then(
    (module) => module.Testimonial
  )
);
const DoubleColumnText = dynamic<IDoubleColumnText>(
  import('@src/components/compound/double-column-text').then(
    (module) => module.DoubleColumnText
  )
);
interface ITeamMemberData {
  pageData: any;
}

export const MemberDetails = ({ pageData }: ITeamMemberData) => {
  //Blog Carousel Slider Options
  const blogSliderOptions = {
    haveOffset: true,
    speed: 800,
    showPagination: true,
    showItems: 'sm_1_2_md_3_lg_4_xl_4',
  };

  //Team Member Carousel Slider Options
  const teamSliderOptions = {
    haveOffset: true,
    showItems: 'sm_1_2_md_2_lg_2_7_xl_3_14',
    spaceBetween: 'zero',
  };
  return (
    <>
      <section className="py-0">
        <HeroSection
          bgType={'gradient_blue'}
          subTitle={'Say hello to'}
          memberName={pageData?.memberData?.name}
          designation={pageData?.memberData?.designation}
          linkedInUrl={pageData?.memberData?.linkedInProfile}
          description={pageData?.memberData?.bio}
          memberImageUrl={pageData?.memberData?.profileImage.image}
          memberImageAlt={pageData?.memberData?.profileImage?.alt}
        />
      </section>
      <section className="py-[3.125rem] md:pt-[7.5rem] md:pb-[5rem]">
        <Testimonial
          quote={pageData?.memberData?.testimonial?.quote}
          quoteeName={pageData?.memberData?.testimonial?.quoteeName}
          quoteeDesignation={
            pageData?.memberData?.testimonial?.quoteeDesignation
          }
          bgType={'default'}
        />
      </section>
      <section className="py-0">
        <DoubleColumnText
          bgType={'default'}
          firstColumn={pageData?.memberData?.memberDetail?.firstColumn}
          secondColumn={pageData?.memberData?.memberDetail?.secondColumn}
        />
      </section>
      <section className="py-[4.375rem] md:py-[7.5rem]">
        <CarouselBlock
          headingInfo={{
            title: `${pageData?.memberData?.name}'s latest articles and insights to stay ahead of what’s happening in the world of ecommerce and Shopify.`,
            subTitle: 'Experts in the field',
          }}
          cardType={CARD_TYPE.CARD}
          slidersInfo={pageData?.articlesInfo?.articles?.data}
          sliderOptions={blogSliderOptions}
          descShowLine={2}
        />
      </section>
      <section className="py-0 pb-[3.75rem] md:pb-[5.625rem]">
        <CarouselBlock
          headingInfo={{
            title: 'The faces of our experts',
            subTitle: 'More of us',
          }}
          cardType={CARD_TYPE.TEAM_CARD}
          slidersInfo={pageData?.allMemberInfo?.teamMembers?.data}
          isBigCard={true}
          sliderOptions={teamSliderOptions}
          descShowLine={2}
        />
      </section>
    </>
  );
};
