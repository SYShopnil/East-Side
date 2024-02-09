import { fetcher } from '@root/apollo-client';
import { CtaLink } from '@src/components/root/cta-link';
import { CaseStudiesByServiceType } from '@src/query/case-study';
import { ISingleService } from '@src/types/compound';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import MegaMenuCaseStudyCard from '../cards/MegaMenuCaseStudyCard';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import Styles from '../index.module.scss';

/**
 * Tailwind classess
 */
const column = 'xl:flex-[0_0_45%] lg:flex-[0_0_50%]';

/**
 *
 * @param {object} ISingleService
 * @returns JSX.Element
 */
const SingleService = ({
  serviceName,
  serviceCategories,
  caseStudyType,
}: ISingleService) => {
  const { locale } = useRouter();
  const { data, error } = useSWR(
    CaseStudiesByServiceType(caseStudyType, locale || 'en'),
    fetcher
  );
  return (
    <div className="lg:flex lg:justify-between grid gap-[30px] xl:gap-[30px] lg:gap-[20px]">
      <div className={column + ' ' + Styles['col-2']}>
        {!!serviceCategories && !!serviceCategories.length && (
          <div className="grid gap-[25px] mt-[20px] lg:mt-[38px]">
            {!!serviceCategories &&
              !!serviceCategories.length &&
              serviceCategories.map((serviceCategory, index) => (
                <ServiceCategoryCard {...serviceCategory} key={index} />
              ))}
          </div>
        )}
      </div>
      {!!data && !!data.caseStudyLists.data.length && (
        <div className={column + ' ' + Styles['col-3']}>
          <h2 className="text-[12px] font-normal text-[#8b8b8b]">
            Our {serviceName} Case Studies
          </h2>
          {!!data ? (
            <div className="grid gap-[20px] mt-[20px]">
              {data.caseStudyLists.data.map(
                (
                  caseStudy: {
                    attributes: {
                      title: string;
                      slug: string;
                      companyName: string;
                      caseStudyImage: any;
                    };
                  },
                  index: number
                ) => (
                  <MegaMenuCaseStudyCard
                    {...caseStudy.attributes}
                    key={index}
                  />
                )
              )}
              <div>
                <CtaLink
                  ctaLink="/case-study"
                  ctaText="View all case studies"
                  parentBgType="default"
                />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SingleService;
