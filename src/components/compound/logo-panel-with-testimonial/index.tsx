import { ILogoPanelWithTestimonial } from '@src/types/compound';
import { Testimonial } from '@src/components/compound/testimonial';
import dynamic from 'next/dynamic';
import { ICtaLink, ILogoPanel } from '@src/types/root';
import { useState } from 'react';
import Styles from './index.module.css';

const CtaLink = dynamic<ICtaLink>(
  import('@src/components/root/cta-link').then((module) => module.CtaLink)
);
const LogoPanel = dynamic<ILogoPanel>(
  import('@src/components/root/logo-panel').then((module) => module.LogoPanel)
);
// LogoPanelWithTestimonial
export const LogoPanelWithTestimonial = ({
  testimonialInfo,
  logos,
  ctaInfo,
}: ILogoPanelWithTestimonial) => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
    <section className="content-with-logo-section">
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="content-area lg:flex-[0_0_60%]">
            <Testimonial
              isLogoPanelWithTestimonial={true}
              {...testimonialInfo}
            />
          </div>
          <div className="logo-area lg:flex-[0_0_40%] min-h-[68.5rem] pt-[3%] lg:pt-0">
            <LogoPanel
              logos={logos.logos}
              isFullWidth={logos.isFullWidth}
              setIsAnimationDone={setIsAnimationDone}
              buttonText="view partner"
            />
            {isAnimationDone && (
              <div
                className={`text-center mt-[2.5rem] lg:mt-[3.5rem] ${Styles['cta-button-bounce-in']} mb-2 md:mb-0`}
              >
                <CtaLink {...ctaInfo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
