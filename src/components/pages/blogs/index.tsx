import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@root/apollo-client';
import { FeaturedBlog } from './featuredBlog';
import { ICardList, ICardTypeEnum, IHeroSecondary } from '@src/types/compound';
import { IBlogs } from '@src/types/pages';
import { ArticleQuery, ArticleTagsQuery } from '@src/query/articles';
import { IArticle, IPagination, ISearchFilter } from '@src/types/root';
import { getStrapiMediaUrl } from '@src/utils';
import dynamic from 'next/dynamic';

const SearchFilter = dynamic<ISearchFilter>(
  import('@src/components/root/search-filter').then(
    (module) => module.SearchFilter
  )
);
const Pagination = dynamic<IPagination>(
  import('@src/components/root/pagination').then((module) => module.Pagination)
);
const HeroSecondary = dynamic<IHeroSecondary>(
  import('@src/components/compound/hero-section/heroSecondary').then(
    (module) => module.HeroSecondary
  )
);
const CardList = dynamic<ICardList>(
  import('@src/components/compound/card-list').then((module) => module.CardList)
);
export const BlogsPage = ({
  heroProps,
  featuredBlog,
  blogListInfo,
  locale = 'en',
}: IBlogs) => {
  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');

  const { data: articleData, error: articleError } = useSWR(
    ArticleQuery(
      locale,
      currentPage,
      blogListInfo?.cardsPerPage,
      searchText,
      filterText
    ),
    fetcher
  );

  const { data: tagsData, error: tagsError } = useSWR(
    ArticleTagsQuery(locale),
    fetcher
  );

  /* Decorate Featured Blog Data */
  const featuredBlogInfo = featuredBlog?.article.data.attributes;
  const { url, alternativeText } = getStrapiMediaUrl(
    featuredBlogInfo.bannerImage,
    'large'
  );
  const featuredBlogProps: IArticle = {
    title: featuredBlogInfo.title,
    description: featuredBlogInfo.subText,
    contentBlock: featuredBlogInfo.articleBody,
    imgSrc: url,
    imgAlt: featuredBlogInfo.bannerImageAlt
      ? featuredBlogInfo.bannerImageAlt
      : alternativeText,
    slug: featuredBlogInfo.slug,
    authorName: featuredBlogInfo.author.data?.attributes.name,
    authorSlug: featuredBlogInfo.author.data?.attributes.authorSlug,
    metaTags: featuredBlogInfo.tags.data,
    publishedDate: featuredBlogInfo.publishedAt,
    authorAvatar:
      featuredBlogInfo.author.data?.attributes.profileImage.image.data
        .attributes.url,
    authorAvatarAlt:
      featuredBlogInfo.author.data?.attributes.profileImage.image.data
        .attributes.alternativeText,
  };
  /* Tags for Search Filter */
  const allTags = [{ id: 0, attributes: { tag: 'all' } }];
  tagsData?.articleTags.data.map((ele: any, ind: number) => {
    allTags.push(ele);
  });
  return (
    <>
      <HeroSecondary {...heroProps} bgType={heroProps.heroSecondaryBgType} />
      <FeaturedBlog
        sectionPadding={featuredBlog?.sectionPadding}
        featuredBlog={featuredBlogProps}
        isOverlappedWithHero={featuredBlog?.isOverlappedWithHero}
      />
      <div className="container mt-[2.625rem] mb-[1.5rem]  md:my-[3.75rem]">
        <SearchFilter
          tags={allTags}
          searchHandler={(searchText: string) => {
            setSearchText(searchText);
            setCurrentPage(1);
          }}
          filterHandler={(filterText: string) => {
            setFilterText(filterText);
            setSearchText('');
            setCurrentPage(1);
          }}
          isSearch={true}
        />
      </div>
      <section className="max-w-full md:max-w-[53.375rem] md:mx-auto">
        <CardList
          sectionPadding={blogListInfo?.sectionPadding}
          cardData={articleData?.articles.data}
          cardType={ICardTypeEnum.BLOG}
        />
      </section>

      <div className="my-[3.75rem] md:my-[5rem]">
        <Pagination
          currentPage={currentPage}
          totalCount={articleData?.articles.meta.pagination.total}
          pageSize={blogListInfo?.cardsPerPage}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};
