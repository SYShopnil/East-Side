import Link from 'next/link';
import Image from 'next/image';
import { IFooterAddress } from '@src/types/root';
import { fontColorSelector, getStrapiMediaUrl } from '@src/utils';

export const FooterAddress = ({
  bgType,
  footerAddressType,
  logo,
  phone,
  mail,
  address,
  copyrightText,
  partnerLogos,
}: IFooterAddress) => {
  const fontColor =
    fontColorSelector(bgType!) === '#212121' ? '#4E4E4E' : '#FFFFFF';
  const partnerLogoColor = fontColor === '#FFFFFF' ? 'convert-to-white' : null;

  let logoData;
  if (logo && logo.image) {
    logoData = getStrapiMediaUrl(logo.image);
  }

  return (
    <div
      style={{
        color: fontColor,
      }}
      className="flex flex-col items-start w-fit"
    >
      {footerAddressType == 'footer' && logoData && (
        <div className={`relative w-[10.6875rem] mb-[2.0625rem]`}>
          <Link href={'/'} passHref>
            <a>
              <Image
                src={logoData.url || ''}
                alt={logo.alt ? logo.alt : logoData.alternativeText}
                width={logoData.width}
                height={logoData.height}
              />
            </a>
          </Link>
        </div>
      )}
      <a
        href={`tel:${phone}`}
        className={`leading-[1.75rem] ${
          footerAddressType == 'footer'
            ? 'text-[1.375rem] mb-[0.375rem]'
            : footerAddressType == 'hero'
            ? 'text-[1.375rem] lg:text-[1.875rem] leading-[2.0625rem] lg:leading-[1.75rem] mb-[0.4375rem] lg:mb-[1.125rem]'
            : 'text-[1.125rem] mb-[0.3125rem]'
        }`}
        data-testid="contact-phone"
      >
        {phone}
      </a>
      <a
        href={`mailto:${mail}`}
        className={`leading-[1.75rem] ${
          footerAddressType == 'footer'
            ? 'text-[1.375rem] mb-[0.8125rem] lg:mb-[3.1875rem]'
            : footerAddressType == 'hero'
            ? 'text-[1.375rem] lg:text-[1.875rem] mb-[3.125rem] lg:mb-[7rem]'
            : 'text-[1.125rem] mb-[0.6725rem] lg:mb-[1rem]'
        }`}
        data-testid="contact-mail"
      >
        {mail}
      </a>
      <a
        href={`http://maps.google.com/?q=${address}`}
        target={'_blank'}
        rel={'noreferrer'}
        className={`text-[1rem] leading-[1.5rem] ${
          footerAddressType == 'footer'
            ? 'mb-[1.75rem] lg:mb-[1.8125rem] max-w-[19rem] '
            : footerAddressType == 'hero'
            ? 'max-w-full mb-[1.25rem] lg:mb-[1rem]'
            : 'mb-[1.125rem] lg:mb-[1.1875rem] max-w-[19rem] '
        }`}
        data-testid="contact-address"
      >
        {address}
      </a>
      {!!partnerLogos && !!partnerLogos.length && (
        <div
          className={`flex flex-row justify-center items-center h-7 ${
            footerAddressType == 'footer'
              ? 'gap-[1.685rem]'
              : footerAddressType == 'hero'
              ? 'gap-[1rem] lg:gap-[1.4025rem]'
              : 'gap-[1.4025rem]'
          } ${fontColor === '#FFFFFF' ? 'opacity-100' : 'opacity-70'}`}
        >
          {partnerLogos.map((partnerLogo, index) => {
            const partnerLogoData = getStrapiMediaUrl(partnerLogo.image);
            return (
              <div key={index} className={`${partnerLogoColor}`}>
                <Image
                  src={partnerLogoData.url}
                  alt={
                    partnerLogo.alt
                      ? partnerLogo.alt
                      : partnerLogoData.alternativeText
                  }
                  width={partnerLogoData.width}
                  height={partnerLogoData.height}
                />
              </div>
            );
          })}
        </div>
      )}

      {footerAddressType == 'footer' && (
        <div
          className="font-normal text-[0.75rem] leading-[1.125rem] mt-[1.225rem] lg:mt-[3.725rem]"
          data-testid="footer-address-copyright-text"
        >
          {copyrightText}
        </div>
      )}
    </div>
  );
};
