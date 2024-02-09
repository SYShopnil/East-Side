const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: any }) => {
  const allPaths = [
    'https://ephemeral-khapse-cbe893.netlify.app',
    'https://ephemeral-khapse-cbe893.netlify.app/about',
    'https://ephemeral-khapse-cbe893.netlify.app/contact',
    'https://ephemeral-khapse-cbe893.netlify.app/case-study',
    'https://ephemeral-khapse-cbe893.netlify.app/blog',
    'https://ephemeral-khapse-cbe893.netlify.app/podcast',
    'https://ephemeral-khapse-cbe893.netlify.app/service/plan-launch',
    'https://ephemeral-khapse-cbe893.netlify.app/service/grow',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
