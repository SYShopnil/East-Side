import { IFooter } from '@src/types/compound';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import { SubscriptionForm } from './subscriptionForm';
import { FooterColumn } from './footerColumn';
import { LocationColumn } from './locationColumn';
import { FooterAddress } from '@src/components/root/footer-address';
import { FooterHeader } from './footerHeader';

const Footer = ({
  bgType,
  footerHeader,
  footerSubTitle,
  footerTitle,
  subscriberNamePlaceholder,
  subscriberEmailAddressPlaceholder,
  subscriptionButtonText,
  subscriptionButtonSubmitUrl,
  firstColumnPages,
  secondColumnPages,
  locations,
  footerAddress,
}: IFooter) => {
  return (
    <>
      {!!footerHeader && footerHeader.footerHeadTitle && (
        <div className="pt-[3.75rem] lg:pt-0">
          <FooterHeader {...footerHeader!} />
        </div>
      )}
      <footer
        style={{
          background: backgroundClassSelector(bgType),
          color: fontColorSelector(bgType),
        }}
        className={`pt-[3.4375rem] ${
          footerHeader?.footerHeadTitle
            ? 'lg:pt-[17.625rem]'
            : 'lg:pt-[8.75rem]'
        } lg:pb-[5.625rem] pb-[3.125rem] `}
      >
        <div className={`flex flex-col container`}>
          <div>
            <SubscriptionForm
              bgType={bgType}
              footerTitle={footerTitle}
              footerSubTitle={footerSubTitle}
              subscriberNamePlaceholder={subscriberNamePlaceholder}
              subscriberEmailAddressPlaceholder={
                subscriberEmailAddressPlaceholder
              }
              subscriptionButtonText={subscriptionButtonText}
              subscriptionButtonSubmitUrl={subscriptionButtonSubmitUrl}
            />
          </div>

          <span className="w-full h-[1px] bg-[#FFFFFF] opacity-10 mt-[2.25rem] lg:mt-[5.375rem] mb-[1.875rem] lg:mb-[4.875rem] "></span>

          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="order-1 lg:order-2" data-testid="footer-column-one">
              <FooterColumn columnItems={firstColumnPages} />
            </div>

            <div className="order-2 lg:order-3" data-testid="footer-column-two">
              <FooterColumn columnItems={secondColumnPages} />
            </div>

            <div
              className="order-3 lg:order-4"
              data-testid="footer-column-three"
            >
              <LocationColumn locations={locations} />
            </div>
            <div
              className="mt-[0.4375rem] lg:mt-0 order-4 lg:order-1"
              data-testid="footer-address"
            >
              <FooterAddress
                {...footerAddress}
                footerAddressType={'footer'}
                bgType={bgType}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
