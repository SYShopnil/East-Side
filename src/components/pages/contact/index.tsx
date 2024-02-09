import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { fetcher } from '@root/apollo-client';
import { LocationsListQuery } from '@src/query//locations';
import { IFormData } from '@src/types/root';
import {
  IHeroPrimary,
  ICardList,
  ICardTypeEnum,
  ITestimonial,
  IContactBlock,
  ICarouselBlock,
} from '@src/types/compound';
import { IContactUs } from '@src/types/pages';

const HeroPrimary = dynamic<IHeroPrimary>(
  import('@src/components/compound/hero-section/heroPrimary').then(
    (module) => module.HeroPrimary
  )
);

const Form = dynamic<IFormData>(
  import('@src/components/root/form').then((module) => module.Form)
);

const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);

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

const ContactBlock = dynamic<IContactBlock>(
  import('@src/components/compound/contact-block').then(
    (module) => module.ContactBlock
  )
);

export const ContactUsPage = ({
  locale = 'en',
  heroData,
  heroContactData,
  formData,
  testimonialData,
  careerOpportunityData,
}: IContactUs) => {
  /* Fetch Locations Data */
  const { data: locationsData, error } = useSWR(
    LocationsListQuery(locale),
    fetcher
  );

  /* Decorate Form Props */
  const formProps: IFormData = {
    formTitle: formData.title,
    buttonInfo: formData.button,
    formFields: formData.fields,
  };

  return (
    <>
      <div>
        <div>
          <HeroPrimary
            {...heroData}
            footerAddress={{
              bgType: heroData.bgType,
              address: heroContactData.address,
              mail: heroContactData.mail,
              phone: heroContactData.phone,
              footerAddressType: 'hero',
            }}
          />
        </div>
        <div className={`md:container`}>
          <div
            className={`lg:sticky lg:left-full lg:top-[160px] mb-[2rem] lg:mb-[6rem] lg:mt-[-45rem] max-w-full lg:max-w-[468px] z-50`}
          >
            <Form {...formProps} />
          </div>

          <section
            className={`hidden md:block max-w-full lg:max-w-[50%] mt-[10rem] mb-[5.5rem]`}
          >
            <CardList
              cardData={locationsData?.locations.data}
              cardType={ICardTypeEnum.LOCATION}
              title={'Come and meet us in persons'}
              subTitle={'Our locations'}
            />
          </section>
          <section className={`block md:hidden mt-[5rem] mb-[3rem]`}>
            <CarouselBlock
              cardType="LOCATION_CARD"
              headingInfo={{
                title: 'Come meet us in person',
                subTitle: 'Our locations',
              }}
              slidersInfo={locationsData?.locations.data}
              sliderOptions={{ haveOffset: true }}
            />
          </section>
          <section className={`max-w-full lg:max-w-[50%]`}>
            <Testimonial {...testimonialData} isRoot={false} />
          </section>
        </div>
      </div>
      <section>
        <ContactBlock
          {...careerOpportunityData}
          bgType={careerOpportunityData.careerBgType}
          ctaLink={careerOpportunityData.careerCtaLink}
        />
      </section>
    </>
  );
};
