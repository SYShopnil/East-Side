import dynamic from 'next/dynamic';
import { IFormData } from '@src/types/root';
import { IHeroPrimary, IDoubleColumnText } from '@src/types/compound';
import { ILeadMagnet } from '@src/types/pages';
import { getStrapiMediaUrl } from '@src/utils';

const HeroPrimary = dynamic<IHeroPrimary>(
  import('@src/components/compound/hero-section/heroPrimary').then(
    (module) => module.HeroPrimary
  )
);

const Form = dynamic<IFormData>(
  import('@src/components/root/form').then((module) => module.Form)
);

const DoubleColumnText = dynamic<IDoubleColumnText>(
  import('@src/components/compound/double-column-text').then(
    (module) => module.DoubleColumnText
  )
);

export const LeadMagnetPage = ({
  heroData,
  formData,
  doubleColumnTextData,
}: ILeadMagnet) => {
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
            backgroundImageUrl={
              getStrapiMediaUrl(heroData?.backgroundImage?.image, 'large').url
            }
            logos={heroData.logos}
            redirectButton={heroData.button}
          />
        </div>
        <div className={`md:container`}>
          <div
            className={`lg:sticky lg:left-full lg:top-[160px] mb-[2rem] lg:mb-[6rem] lg:mt-[-45rem] max-w-full lg:max-w-[468px]`}
          >
            <Form {...formProps} />
          </div>

          <div className="max-w-full lg:max-w-[38.75rem]">
            <DoubleColumnText
              {...doubleColumnTextData}
              ctaLink={doubleColumnTextData.ctaInfo}
              ctaShowinFirstColumns={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
