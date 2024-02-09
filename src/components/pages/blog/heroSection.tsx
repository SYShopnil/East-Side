import Image from 'next/image';
import { IHeroBlog } from '@src/types/pages';
import { fontColorSelector, getStrapiMediaUrl } from '@src/utils';
import Link from 'next/link';

export const HeroSection = ({
  bgType,
  bgImage,
  title,
  description,
  author,
}: IHeroBlog) => {
  let authorInfo = {
    name: '',
    authorSlug: '',
    profileImage: { image: '' },
    alt: '',
  };
  if (author.data) authorInfo = author?.data.attributes;
  const { url, alternativeText } = getStrapiMediaUrl(
    authorInfo.profileImage.image,
    'small' || 'medium'
  );
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
          getStrapiMediaUrl(bgImage).url
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: fontColorSelector(bgType),
      }}
      data-testid="hero-blog"
    >
      <div className="container text-center py-[7.5rem] md:py-[10rem]">
        <div>
          <h1
            className="text-[1.625rem] md:text-[2.5rem] leading-[2.1875rem] md:leading-[3.4375rem] whitespace-pre-wrap line-clamp line-clamp-2"
            data-testid="hero-title"
          >
            {title}
          </h1>
          <p
            className="text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem] mt-[1.125rem] md:mt-[0.625rem] whitespace-pre-wrap line-clamp line-clamp-3"
            data-testid="hero-description"
          >
            {description}
          </p>
        </div>
        {authorInfo && authorInfo.authorSlug && (
          <div className="flex flex-row md:flex-col items-center justify-center mt-[2.375rem] md:mt-[35px]">
            <div className="relative w-[2.375rem] md:w-[3.9375rem] h-[2.375rem] md:h-[3.9375rem] rounded-[15.625rem] overflow-hidden">
              <Image
                src={url}
                alt={authorInfo.alt ? authorInfo.alt : alternativeText}
                layout="fill"
                objectFit="cover"
                data-testid="author-avatar"
              />
            </div>
            <span
              className="text-[0.875rem] leading-[1.625rem] ml-[0.625rem] md:ml-0 md:mt-[0.625rem] "
              data-testid="author-name"
            >
              <Link href={`/about/${authorInfo.authorSlug}`} passHref>
                <a>Written by: {authorInfo.name}</a>
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
