import Styles from '../index.module.scss';
import { TabsNavItem } from './tabs-nav-item';

interface ICoreServices {
  serviceName: string;
  slug: string;
}

interface ITabsNav {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
  coreServices: ICoreServices[];
}

export const TabsNav = ({
  activeIndex,
  setActiveIndex,
  coreServices,
}: ITabsNav) => {
  return (
    <div className={Styles['nav-tabs']}>
      {coreServices.map((coreService, index) => (
        <TabsNavItem
          {...coreService}
          key={index}
          isActive={index === activeIndex}
          onClick={() => {
            setActiveIndex(index);
          }}
        />
      ))}
    </div>
  );
};
