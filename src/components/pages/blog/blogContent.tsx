import { IBlogContent } from '@src/types/pages';
import {
  backgroundClassSelector,
  fontColorSelector,
  formatDate,
} from '@src/utils';
import { useReadingTime } from 'react-hook-reading-time';
import { MetaTag } from '@src/components/root/meta-tag';
import dynamic from 'next/dynamic';
const MarkdownComp = dynamic(() => import('@src/components/root/markdown'));

export const BlogContent = ({
  bgType,
  metaTags,
  publishedDate,
  contentBlock,
}: IBlogContent) => {
  const { text: readingTime } = useReadingTime(contentBlock);
  return (
    <div
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
      data-testid="blog-content"
    >
      <div className="container pt-[1.875rem] md:pt-[2.8125rem] pb-[3.75rem]">
        <div className="md:max-w-[84%] md:mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between">
            {!!metaTags && !!metaTags.length && (
              <div
                className="flex  items-center flex-wrap gap-[0.625rem] mt-[1.5rem] md:mt-0"
                data-testid="blog-metaTags"
              >
                {metaTags.map((metaTag, index) => (
                  <span key={index}>
                    <MetaTag metaTag={metaTag.attributes?.tag} />
                  </span>
                ))}
              </div>
            )}

            {publishedDate && (
              <div className="text-body/[.6] inline-flex items-center flex-row gap-[.375rem] mt-[0.9375rem] md:mt-0">
                <span data-testid="published-date">
                  {formatDate(publishedDate, true)}
                </span>
                <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
                <span data-testid="duration">{readingTime}</span>
              </div>
            )}
          </div>
          <div className="mt-[1.4375rem] md:mt-[1.875rem]">
            <MarkdownComp bgType={'default'} content={contentBlock} />
          </div>
        </div>
      </div>
    </div>
  );
};
