import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SingleService from './singleservice';
import { RedirectButton } from '@src/components/root/button/redirect-button';
import { FooterAddress } from '@src/components/root/footer-address';
import { IFooterAddressInfo } from '@src/types/compound/header';
import { TabsNav } from './tabs-nav';
import { MenuToggler } from '../menu-toggler';
import Styles from '../index.module.scss';
import { ArrowLeft } from '../icons/arrow-left';

interface IServiceMegaMenu {
  isOpen: boolean;
  onClick: () => void;
  footerInfo: IFooterAddressInfo;
}
interface ICoreService {
  slug: string;
  serviceName: string;
}
interface ICoreServiceList {
  coreServiceName: string;
  serviceList: any[];
}
enum CoreServiceEnum {
  Plan = 'Plan',
  Launch = 'Launch',
  Grow = 'Grow',
}
// coreServices
const coreServices: ICoreService[] = [
  { slug: '/service/plan-launch', serviceName: CoreServiceEnum.Plan },
  { slug: '/service/plan-launch', serviceName: CoreServiceEnum.Launch },
  { slug: '/service/grow', serviceName: CoreServiceEnum.Grow },
];

/**
 *
 * @param {object}  IServiceMegaMenu
 * @returns JSX.Element
 */
const ServiceMegaMenu = ({ isOpen, onClick, footerInfo }: IServiceMegaMenu) => {
  const [activeIndex, setActiveIndex] = useState(0);

  let planServiceData: ICoreServiceList,
    launchServiceData: ICoreServiceList,
    growServiceData: ICoreServiceList;
  const serviceLength = footerInfo.coreServices.length;
  for (let i = 0; i < serviceLength; i++) {
    switch (footerInfo.coreServices[i].coreServiceName.toLocaleLowerCase()) {
      case 'plan':
        planServiceData = footerInfo.coreServices[i];
        break;
      case 'launch':
        launchServiceData = footerInfo.coreServices[i];
        break;
      case 'grow':
        growServiceData = footerInfo.coreServices[i];
        break;
    }
  }
  return (
    <div className={Styles['megamenu-wrapper'] + ' '}>
      <div className="lg:hidden block">
        <div className="flex items-center justify-between">
          <div>
            <Link href={'/'}>
              <a className="inline-flex items-center">
                <Image
                  className="lg:hidden"
                  width={52}
                  height={22}
                  layout="fixed"
                  src={`https://res.cloudinary.com/dktw59lc2/image/upload/v1669642837/EastSide-dev/images/Group_1050_49f2689987.png`}
                  alt="eastside"
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center lg:gap-[30px] gap-[20px]">
            <div>
              <RedirectButton
                buttonText="let’s talk"
                link="/"
                colorScheme="blue_over_green"
              />
            </div>
            <div className="lg:hidden block">
              <MenuToggler isOpen={isOpen} onClick={onClick} isWhite={false} />
            </div>
          </div>
        </div>
        <div className="m-[25px_0]">
          <div
            onClick={onClick}
            className="font-medium text-black text-base inline-flex items-center gap-2 cursor-pointer"
          >
            <span>
              <ArrowLeft />
            </span>
            <span>Services</span>
          </div>
        </div>
      </div>
      <div className="lg:flex xl:gap-[30px] lg:gap-[20px]">
        {/* left conetnt  */}
        <div className="xl:flex-[0_0_30%] lg:flex-[0_0_34%]">
          <div className={Styles['col-1']}>
            <h2 className="text-[12px] font-normal text-[#4E4E4E]">
              Our Core Services
            </h2>
            {!!coreServices && !!coreServices.length && (
              <div>
                <TabsNav
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  coreServices={coreServices}
                />
              </div>
            )}
            <div className="mt-[40px] hidden lg:block">
              <FooterAddress
                bgType="default"
                footerAddressType="mega-menu"
                phone={footerInfo.phone}
                mail={footerInfo.mail}
                address={footerInfo.address}
                partnerLogos={footerInfo.partnerLogos}
              />
            </div>
          </div>
        </div>

        {/* right content */}
        <div className="flex-grow">
          {coreServices.map((coreService, index) => (
            <div
              key={index}
              className={`${Styles['tab-content-item']} ${
                index === activeIndex ? Styles['active'] : ''
              }`}
            >
              {coreService.serviceName === CoreServiceEnum.Plan && (
                <>
                  {/* Plan  */}
                  {planServiceData && (
                    <SingleService
                      serviceName={planServiceData?.coreServiceName}
                      caseStudyType="plan"
                      serviceCategories={planServiceData?.serviceList}
                    />
                  )}
                </>
              )}
              {coreService.serviceName === CoreServiceEnum.Launch && (
                <>
                  {/* launch  */}
                  {launchServiceData && (
                    <SingleService
                      serviceName={launchServiceData?.coreServiceName}
                      caseStudyType="launch"
                      serviceCategories={launchServiceData?.serviceList}
                    />
                  )}
                </>
              )}
              {coreService.serviceName === CoreServiceEnum.Grow && (
                <>
                  {/* grow  */}
                  {growServiceData && (
                    <SingleService
                      serviceName={growServiceData?.coreServiceName}
                      caseStudyType="grow"
                      serviceCategories={growServiceData?.serviceList}
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMegaMenu;
