import { IHeroBlog } from '@src/types/pages';

/*==================================
// heroProps
====================================*/
const heroProps: IHeroBlog = {
  bgType: 'image',
  bgImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/081a8ef71ca16929e59155e9d1f72a64022a371c/featured-blog.svg',
  title: 'SEO Case Study: Magento to Shopify Migration',
  description:
    'Find out how we migrated a global brand from Magento to Shopify with phenomenal SEO results.',
  authorName: 'Will',
  authorAvatarUrl:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1666508544/EastSide-dev/images/author/author-1_uqiiih.jpg',
  authorAvatarAlt: 'Will',
};

const heroTextConfig = [
  {
    elementName: 'Title',
    testId: 'hero-title',
    expectedText: 'SEO Case Study: Magento to Shopify Migration',
  },
  {
    elementName: 'Description',
    testId: 'hero-description',
    expectedText:
      'Find out how we migrated a global brand from Magento to Shopify with phenomenal SEO results.',
  },
  {
    elementName: 'Author Name',
    testId: 'author-name',
    expectedText: 'Will',
  },
];

/*==================================
// blogProps
====================================*/
const blogContent = `
We were approached by a global brand to manage the SEO migration of their ecommerce store from Magento to Shopify. As a household name with a significant online presence, a successful migration with no organic traffic loss was an absolute priority.

This was a hugely successful Shopify migration, due in part to the meticulous preparation by Eastside Co’s SEO team. Read on to find out:

* Why it’s crucial to understand the state of SEO on the site you’re migrating
* Why information architecture planning is nearly as important as redirects
* The importance of risk mitigation planning

## The Challange

In the case of this project, we were dealing with a global brand whose website provided a sometimes complex user-journey. There were multiple layers of complexity to consider in how both search engines and users interacted with the existing site. This presented a challenge in how best to replatform to Shopify whilst mitigating any impact on search engine rankings.


To add to this, the website had very recently upgraded from Magento 1 to Magento 2.0 without considering SEO. The result of this was a significant loss of organic rankings and traffic. This caused a huge amount of SEO disruption, hugely altering how Google crawled and ranked the website. As the performance of the site had been hugely damaged, a key part of this project was not to maintain existing traffic and rankings, but to restore them to previous levels - and take them even higher. All of this had to be considered as part of the Shopify migration.

“Any website migration is an SEO risk because of the disruption caused to your relationship with search engines. The bigger and more complex the website, the greater the risk of organic ranking instability.”

## The Results

The end-result of this project was a seamless migration from Magento to Shopify with phenomenal results:

“Not only did the brand experience zero loss of ranking or traffic, but within 2 months had made significant organic traffic gains.”

“They recovered the visibility lost in the previous Magento migration and secured higher/new rankings which further compounded their traffic growth.”

## How We Did It

### Information Architecture Planning

We knew from the offset that information architecture would be key to the success of this migration. It’s natural to focus on redirects, but if your new site's information architecture is poor or wildly different from your old site, then the influence of your perfect redirects won’t be as impactful.

For this project, the user-journey from entering the website to purchase was unavoidably complicated because of the need to specify product filters prior to viewing products.

#### Fixing Legacy Issues

Reviewing what had gone wrong during the Magento 2.0 migration showed that changes to the information architecture had impacted how search engine bots crawled the site. In simple terms, it was harder for bots to crawl and index important pages resulting in these pages dropping out of Google’s index. We had to consider this when planning the architecture for the new site.

#### Using Keyword Data and User-Journey Analysis

Analysis of keyword data showed that the intent of most Google searches was structured around version types of specific commercial items, such as year of manufacture and item model. The client had to have visibility when people searched for any version of these commercial items. This meant we had to ensure there were crawlable, indexable landing pages for each version.

But we didn’t want to create a landing page for every combination of versions for these items because it would bloat the site with huge amounts of near identical content.

So we planned an information architecture that was heavily guided by keyword research data and user-journey analysis. The website structure incorporated landing pages for the most important combinations of products. We also had to create an internal linking structure that provided a seamless and logical click-journey to any of these pages.

#### Redirects

Like any website migration, redirects were key to the success of this project. But this was a huge site with hundreds of thousands of evolving pages where products were frequently published, updated, or discontinued. All of this made mapping URL redirects difficult.

But for this project we needed to make sure that 250,000 Magento URLs were redirected to their new Shopify URLs. We couldn’t afford any redirects to ‘hop’ or reach 404 pages. Mapping a quarter of a million redirects one-by-one is unrealistic and prone to human error. So we made use of the regex pattern-matching feature in Easy Redirects, our very own Shopify redirects app.

The regex feature allowed us to build rule-based 301 redirects for tens of thousands of URLs based upon patterns that appeared within the URLs. This automated the process of redirecting many of the site's URLs, saving time and mitigating the risk of human error.

#### Risk Mitigation

“The number one thing you can do to increase your chances of a successful migration is to plan and prepare. The more organised you are in your migration planning, the less likely you are to see a rankings drop.”
`;

const blogProps = {
  bgType: 'default',
  metaTags: ['SEO', 'Shopify', 'Migration'],
  publishedDate: '2022-11-11T03:58:00.000Z',
  contentBlock: blogContent,
};

const blogTextConfig = [
  {
    elementName: 'Published Date',
    testId: 'published-date',
    expectedText: '11 November 2022',
  },
  {
    elementName: 'Duration',
    testId: 'duration',
    expectedText: '4 min read',
  },
];

export { heroProps, heroTextConfig, blogProps, blogTextConfig };
