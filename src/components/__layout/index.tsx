// External Imports
import { IContactBlock } from '@src/types/compound';
import { ILayoutProps } from '@src/types/__layout';
import dynamic from 'next/dynamic';
import Link from 'next/link';
// Internal Imports
const Footer = dynamic(() => import('@src/components/compound/footer'));
const Header = dynamic(() => import('@src/components/compound/header'));
const ContactBlock = dynamic<IContactBlock>(
  import('@src/components/compound/contact-block').then(
    (moduel) => moduel.ContactBlock
  )
);
import { headerArgs, contactBlockArgs } from './config';
// Layout
export const Layout = ({
  children,
  globalInfo,
  footerInfo,
  footerHeaderInfo,
  preview,
}: ILayoutProps) => {
  return (
    <>
      {globalInfo && <Header {...headerArgs} globalInfo={globalInfo} />}
      <main>{children}</main>
      {footerInfo && globalInfo && (
        <Footer
          {...footerInfo}
          footerAddress={{
            logo: globalInfo?.logo,
            partnerLogos: globalInfo?.partnerLogos,
            address: globalInfo?.address,
            mail: globalInfo?.mail,
            phone: globalInfo?.phone,
            copyrightText: globalInfo?.copyrightText,
          }}
          locations={footerInfo?.locations?.data}
          footerHeader={footerHeaderInfo}
        />
      )}
      {preview && (
        <div className="fixed bottom-5 left-5 z-50 bg-secondaryGradient py-6 px-5 rounded-[50%] text-white text-[1.2rem] cursor-pointer tracking-wide whitespace-pre-line text-center">
          <Link href="/api/exit-preview" passHref>
            <a>
              {`Exit
                Preview`}
            </a>
          </Link>
        </div>
      )}
      <ContactBlock {...contactBlockArgs} isAnimated={true} />
    </>
  );
};
