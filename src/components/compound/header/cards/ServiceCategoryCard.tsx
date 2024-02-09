import { CardTitle } from '@src/components/root/card-title';
import { IServiceCategoryCard } from '@src/types/compound/';
import Link from 'next/link';

/**
 *
 * @param {object} IServiceCategoryCard
 * @returns JSX.Element
 */
const ServiceCategoryCard = ({
  title,
  description,
  link,
}: IServiceCategoryCard) => {
  return (
    <div>
      {title && (
        <h3 className="text-[16px]  lg:text-[20px] font-normal leading-[1.5] line-clamp line-clamp-1">
          <Link href={link || ''} passHref>
            <a>
              <CardTitle isBlack={true} text={title} />
            </a>
          </Link>
        </h3>
      )}
      {description && (
        <p className="text-[12px] lg:text-sm leading-[1.5] mt-[6px] line-clamp line-clamp-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default ServiceCategoryCard;
