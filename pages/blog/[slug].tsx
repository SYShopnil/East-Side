import client from '@root/apollo-client';
import Loading from '@src/components/root/loading';
import { ArticleBySlug, ArticleQuery, ArticlesSlug } from '@src/query/articles';
import { getFooterInfo, getGlobalInfo } from '@src/query/pages-data';
import { IContext } from '@src/types/pages';
import { IPageProps } from '@src/types/pages/about';
import { IPathContext } from '@src/types/pages/page';
import { ILayoutProps } from '@src/types/__layout';
import { redirectTo500page } from '@src/utils';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Blog = dynamic<{ blogData: any; moreBlog: any }>(
  import('@src/components/pages/blog').then((module) => module.Blog),
  { loading: () => <Loading /> }
);
const Layout = dynamic<ILayoutProps>(
  import('@src/components/__layout').then((module) => module.Layout),
  { loading: () => <Loading /> }
);
const SingleBlog = ({
  globalInfo,
  footerInfo,
  blogData,
  moreBlog,
  preview,
}: IPageProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="container flex items-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>EastSide | Blog Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout globalInfo={globalInfo} footerInfo={footerInfo} preview={preview}>
        <Blog blogData={blogData} moreBlog={moreBlog} />
      </Layout>
    </>
  );
};

export async function getStaticPaths(context: IPathContext) {
  let { defaultLocale, locales } = context;
  // fetch all case study slugs
  const { data } = await client.query({
    query: ArticlesSlug(defaultLocale),
  });

  const articleSlugData =
    !!data.articles?.data && !!data.articles.data.length
      ? data.articles.data
      : [];
  const paths = articleSlugData.map((ele: { attributes: { slug: string } }) =>
    locales.map((loc: string) => {
      return {
        params: { slug: ele?.attributes.slug },
        locale: loc,
      };
    })
  );
  return {
    paths: paths.flat(),
    fallback: true,
  };
}

export async function getStaticProps(context: IContext) {
  let { locale } = context;
  let { slug } = context.params;
  let globalInfo, footerInfo, blogData, moreBlog;
  if (!locale) locale = 'en';
  try {
    // fetch article data by slug
    const { data: blogInfo } = await client.query({
      query: ArticleBySlug(locale, slug),
    });
    if (blogInfo?.articles.data) {
      blogData = blogInfo.articles.data[0].attributes;
    }
    // fetch article data by slug
    let tags = '';
    blogData.tags.data.map(
      (ele: any) => (tags += '"' + ele.attributes.tag + '",')
    );
    const { data: blogs } = await client.query({
      query: ArticleQuery(locale, 1, 10, '', '', tags),
    });
    if (blogs?.articles?.data) {
      moreBlog = blogs.articles.data;
    }
    /* Global Info Fetch */
    globalInfo = await getGlobalInfo(locale, client);
    /* Footer Info Fetch */
    footerInfo = await getFooterInfo(locale, client);
    if (!globalInfo || !footerInfo) return redirectTo500page();
    return {
      props: {
        globalInfo,
        footerInfo,
        blogData,
        moreBlog,
        preview: context.preview || false,
      },
      revalidate: context.preview ? 1 : 120,
    };
  } catch (error) {
    return redirectTo500page();
  }
}
export default SingleBlog;
