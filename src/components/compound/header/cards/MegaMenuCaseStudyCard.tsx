import Image from 'next/image';
import Link from 'next/link';
import { IMegaMenuCaseStudyCard } from '@src/types/compound';
import { getStrapiMediaUrl } from '@src/utils';
import { CardTitle } from '@src/components/root';

/**
 * @param {object}  IMegaMenuCaseStudyCard
 * @returns JSX.Element
 */
// MegaMenuCaseStudyCard
const MegaMenuCaseStudyCard = ({
  title,
  slug,
  companyName,
  caseStudyImage,
}: IMegaMenuCaseStudyCard) => {
  const { url, alternativeText } = getStrapiMediaUrl(
    caseStudyImage?.image,
    'small' || 'thumbnail'
  );

  return (
    <Link href={`/case-study/${slug}`} passHref>
      <a className="flex gap-4 items-center group">
        <div className="relative overflow-hidden rounded-[4px] flex-[0_0_90px] w-[90px] h-[90px]">
          <Image
            src={url}
            alt={caseStudyImage?.alt ? caseStudyImage.alt : alternativeText}
            objectFit="cover"
            layout="fill"
            blurDataURL="/assets/blurred.webp"
            placeholder="blur"
            className="transition-all group-hover:scale-[1.15] duration-[1500ms]"
          />
        </div>
        <div className="flex-grow">
          {companyName && (
            <h3 className="font-medium text-sm uppercase line-clamp line-clamp-1">
              <CardTitle text={companyName} isBlack={true} />
            </h3>
          )}
          {title && <p className="mt-[4px] line-clamp line-clamp-2">{title}</p>}
        </div>
      </a>
    </Link>
  );
};

export default MegaMenuCaseStudyCard;
