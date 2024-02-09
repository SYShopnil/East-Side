import { CaseStudiesByCategory } from '../case-study';
import { Footer } from '../footer';
import { GlobalInfo } from '../global-info';
import { ServicesByCategory } from '../service';

//========================================================
export const getGlobalInfo = async (
  locale: string,
  client: any
): Promise<any> => {
  const { data } = await client.query({
    query: GlobalInfo(locale),
  });
  if (data.globalInfo.data?.attributes) return data.globalInfo.data?.attributes;
  else return null;
};

//========================================================
export const getFooterInfo = async (
  locale: string,
  client: any
): Promise<any> => {
  const { data } = await client.query({
    query: Footer(locale),
  });
  if (data.footerPrimary.data?.attributes)
    return data.footerPrimary.data?.attributes;
  else return null;
};
//========================================================
export const getCaseStudyByCategory = async (
  locale: string,
  client: any,
  block?: any
): Promise<any> => {
  const caseStudyCategory = block.filter(
    (ele: any) => ele.__typename === 'ComponentSliceCaseStudyCarouselBlock'
  );
  if (caseStudyCategory.length) {
    const { data } = await client.query({
      query: CaseStudiesByCategory(
        caseStudyCategory[0].caseStudyCategory,
        locale
      ),
    });
    return data;
  }
};

//========================================================
export const getServicesList = async (
  locale: string,
  client: any,
  block?: any
): Promise<any> => {
  let servicesList;
  const serviceListBlock = block.filter(
    (ele: any) => ele.__typename === 'ComponentSliceSliceServiceContentList'
  );

  if (serviceListBlock.length) {
    const { data } = await client.query({
      query: ServicesByCategory(locale, serviceListBlock[0].contentType),
    });
    servicesList =
      !!data?.services?.data &&
      !!data.services.data.length &&
      data.services.data.map(
        (ele: {
          attributes: {
            serviceName: string;
            shortDescription: string;
            icon: any;
            ctaText: string;
            slug: string;
          };
        }) => {
          return {
            subTitle: ele.attributes.serviceName,
            blockType: 'list',
            description: ele.attributes.shortDescription,
            logo: ele.attributes.icon,
            contentCtaText: ele.attributes.ctaText,
            contentCtaLink: `/service/${ele.attributes.slug}`,
          };
        }
      );
  }
  return servicesList;
};
