// External Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { redirectTo500page } from '@src/utils/strapi';
import client from '@root/apollo-client';
import { getFooterInfo, getGlobalInfo } from '@src/query/pages-data';
import { PageBySlug } from '@src/query';
import { ILayoutProps } from '@src/types/__layout';
import { IContactUs, IContext } from '@src/types/pages';
import { BlockNames } from '@src/components/blockManager/blocks';
import Loading from '@src/components/root/loading';
import { IPageProps } from '@src/types/pages/about';

const ContactUsPage = dynamic<IContactUs>(
  import('@src/components/pages/contact').then(
    (module) => module.ContactUsPage
  ),
  { loading: () => <Loading /> }
);
const Layout = dynamic<ILayoutProps>(
  import('@src/components/__layout').then((module) => module.Layout),
  { loading: () => <Loading /> }
);
const ContactUs = ({
  pageInfo,
  globalInfo,
  footerInfo,
  locale,
  preview,
}: IPageProps) => {
  let heroBlock, testimonialBlock, careerOpportunityBlock, formBlock;
  const blockLength = pageInfo.block.length;
  for (let i = 0; i < blockLength; i++) {
    let block = pageInfo.block[i];
    switch (block.__typename) {
      case BlockNames.HERO_PRIMARY:
        heroBlock = block;
        break;
      case BlockNames.TESTIMONIAL:
        testimonialBlock = block;
        break;
      case BlockNames.CONTACT_BLOCK:
        careerOpportunityBlock = block;
        break;
      case BlockNames.FORM:
        formBlock = block;
        break;
    }
  }
  return (
    <>
      <Head>
        <title>EastSide | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout globalInfo={globalInfo} footerInfo={footerInfo} preview={preview}>
        <ContactUsPage
          heroData={heroBlock}
          heroContactData={globalInfo}
          testimonialData={testimonialBlock}
          careerOpportunityData={careerOpportunityBlock}
          formData={formBlock}
          locale={locale}
        />
      </Layout>
    </>
  );
};
export async function getStaticProps(context: IContext) {
  let { locale } = context;
  let pageInfo, globalInfo, footerInfo;
  if (!locale) locale = 'en';
  try {
    /* Page Data Fetch */
    const { data: pageData } = await client.query({
      query: PageBySlug('contact', locale),
    });
    if (pageData.pages.data.length) {
      pageInfo = pageData.pages.data[0].attributes;
    } else {
      return redirectTo500page();
    }

    /* Global Info Fetch */
    globalInfo = await getGlobalInfo(locale, client);
    /* Footer Info Fetch */
    footerInfo = await getFooterInfo(locale, client);
    if (!globalInfo || !footerInfo) return redirectTo500page();
    return {
      props: {
        pageInfo,
        globalInfo,
        footerInfo,
        locale,
        preview: context.preview || false,
      },
      revalidate: context.preview ? 1 : 120,
    };
  } catch (error) {
    return redirectTo500page();
  }
}
export default ContactUs;
