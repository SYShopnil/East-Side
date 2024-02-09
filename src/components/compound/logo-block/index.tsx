import { ILogoBlock } from '@src/types/compound';
import { SectionHeading } from '../section-heading';
import { LogoPanel } from '@src/components/root/logo-panel';
import {
  backgroundClassSelector,
  fontColorSelector,
  sectionPaddingClassSelector,
} from '@src/utils';
import Styles from './index.module.scss';

export const LogoBlock = ({
  bgType,
  sectionPadding,
  isFullWidth,
  logos,
  sectionHeading,
}: ILogoBlock) => {
  const bgColor = backgroundClassSelector(bgType);
  const fontColor = fontColorSelector(bgType);
  return (
    <div
      style={{ background: bgColor, color: fontColor }}
      className={`${Styles['logo-panel-section']} ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div className="container">
        {sectionHeading?.title && (
          <div className="mb-[1.5rem] lg:mb-[5rem]">
            <SectionHeading {...sectionHeading!} />
          </div>
        )}

        <div className="overflow-x-scroll hide-overflow-scrollbar min-h-[37rem]">
          <LogoPanel
            logos={logos}
            isFullWidth={isFullWidth}
            buttonText="view case study"
          />{' '}
        </div>
      </div>
    </div>
  );
};
