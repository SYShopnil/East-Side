// Internal Imports
import {
  ICenterContentBlock,
  ILogoPanelWithCenterContent,
} from '@src/types/compound';
import dynamic from 'next/dynamic';
import { ICtaLink, ILogoPanel } from '@src/types/root';
const CenterContentBlock = dynamic<ICenterContentBlock>(
  import('@src/components/compound/center-content-block').then(
    (module) => module.CenterContentBlock
  )
);
const CtaLink = dynamic<ICtaLink>(
  import('@src/components/root/cta-link').then((module) => module.CtaLink)
);
const LogoPanel = dynamic<ILogoPanel>(
  import('@src/components/root/logo-panel').then((module) => module.LogoPanel)
);
// LogoPanelWithCenterContent
export const LogoPanelWithCenterContent = ({
  centerContentInfo,
  logos,
  ctaInfo,
}: ILogoPanelWithCenterContent) => {
  return (
    <section className="content-with-logo-section style-2">
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="content-area lg:flex-[0_0_60%]">
            <CenterContentBlock {...centerContentInfo} />
          </div>
          <div className="logo-area py-[3.75rem] lg:py[5rem] lg:flex-[0_0_40%]">
            <LogoPanel
              logos={logos.logos}
              isFullWidth={logos.isFullWidth}
              buttonText="view details"
            />
            <div className="text-center mt-[2.5rem] lg:mt-[3.5rem]">
              <CtaLink {...ctaInfo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
