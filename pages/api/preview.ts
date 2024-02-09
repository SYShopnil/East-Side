import client from '@root/apollo-client';
import { PageBySlug } from '@src/query';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setPreviewData({});
  //   res.redirect(req.query.redirect);
  if (
    req.query.secret !== (process.env.PREVIEW_SECRET || 'EaSTsiDEcO5235Asdf')
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  // fetch data by slug
  let root: string;
  const { rootPath, slug, locale } = req.query;
  // const { data } = await client.query({
  //   query: PageBySlug(slug, locale || 'en'),
  // });
  // if (data.pages.data.length) {
  //   pageData = data.pages.data[0].attributes;
  // } else {
  //   return res.status(401).json({ message: 'Invalid slug' });
  // }
  switch (rootPath) {
    case 'article':
      root = 'blog';
      break;
    case 'case-study-list':
      root = 'case-study';
      break;
    case 'podcast':
      root = 'podcast';
      break;
    case 'service':
      root = 'service';
      break;
    case 'team-member':
      root = 'about';
      break;
    case 'job':
      root = 'blog';
      break;
    default:
      root = '';
      break;
  }
  res.setPreviewData({});
  const currentLocale = locale === 'en' ? '/' : `/${locale}/`;

  res.writeHead(307, { Location: `${currentLocale}${root}/${slug}` });
  res.end();
}
