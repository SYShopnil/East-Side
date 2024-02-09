import { useIsBrowser, useViewport } from '@src/hooks';
import Link from 'next/link';
import { LongArrow } from '../icons/long-arrow';
import Styles from '../index.module.scss';

interface ITabsNavItem {
  serviceName: string;
  slug: string;
  isActive: boolean;
  onClick: () => void;
}
/**
 *
 * @param {object}  ITabsNavItem
 * @returns JSX.Element
 */
export const TabsNavItem = ({
  serviceName,
  slug,
  isActive,
  onClick,
}: ITabsNavItem) => {
  const { width } = useViewport();
  const isBrowser = useIsBrowser();

  const itemClass = `${Styles['nav-item']} ${isActive ? Styles['active'] : ''}`;

  if (isBrowser && width <= 991) {
    return (
      <div onClick={onClick} className={itemClass}>
        <span className={Styles['label']}>{serviceName}</span>
        <span className={Styles['underline']}></span>
        <span className={Styles['arrow-icon']}>
          <LongArrow />
        </span>
      </div>
    );
  }
  return (
    <Link href={slug} passHref>
      <a onMouseEnter={onClick} className={itemClass}>
        <span className={Styles['label']}>{serviceName}</span>
        <span className={Styles['underline']}></span>
        <span className={Styles['arrow-icon']}>
          <LongArrow />
        </span>
      </a>
    </Link>
  );
};
