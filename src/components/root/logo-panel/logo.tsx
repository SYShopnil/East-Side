// import Link from 'next/link';
// import Image from 'next/image';
// import Styles from './index.module.css';

// interface ILogoProps {
//   redirectUrl: string;
//   logoAlt: string;
//   imageUrl: string;
//   imageAlt: string;
//   isShow?: any;
// }

// export const Logo = ({
//   redirectUrl,
//   logoAlt,
//   imageAlt,
//   imageUrl,
//   isShow,
// }: ILogoProps) => {
//   return (
//     <>
//       <Link href={redirectUrl || ''} passHref>
//         <a
//           className={`relative ${
//             redirectUrl ? 'pointer-events-auto' : 'pointer-events-none'
//           } inline-flex items-center justify-between ${
//             Styles['logo-bounce-in']
//           } ${isShow ? 'block' : 'hidden'} duration-200`}
//         >
//           <Image
//             src={imageUrl}
//             alt={logoAlt ? logoAlt : imageAlt}
//             width={'100%'}
//             height={'100%'}
//             objectFit="contain"
//             loading="lazy"
//             blurDataURL="/assets/blurred.webp"
//             placeholder="blur"
//           />
//         </a>
//       </Link>
//     </>
//   );
// };
import Link from 'next/link';
import Image from 'next/image';
import Styles from './index.module.css';
import { RedirectButton } from '../button';

interface ILogoProps {
  redirectUrl: string;
  logoAlt: string;
  imageUrl: string;
  imageAlt: string;
  isShow?: any;
  buttonText: string;
}

export const Logo = ({
  redirectUrl,
  logoAlt,
  imageAlt,
  imageUrl,
  isShow,
  buttonText = '',
}: ILogoProps) => {
  return (
    <>
      <div
        className={`relative ${
          redirectUrl ? 'pointer-events-auto' : 'pointer-events-none'
        } inline-flex items-center justify-between ${
          Styles['logo-bounce-in']
        } ${isShow ? 'block' : 'hidden'} duration-200 p-3 rounded-lg  ${
          Styles['bg-overlay-container']
        } `}
      >
        <div
          className={`flex justify-center items-center flex-col ${Styles['bg-overlay-sub-container']} `}
        >
          <div>
            <Image
              src={imageUrl}
              alt={logoAlt ? logoAlt : imageAlt}
              width={'100%'}
              height={'100%'}
              objectFit="contain"
              loading="lazy"
              blurDataURL="/assets/blurred.webp"
              placeholder="blur"
              className={`${Styles['logo-image-wrapper-on-hover']}`}
            />
          </div>
          {!!buttonText && (
            <div className={`mt-[15px] ${Styles['button-wrapper']}`}>
              <RedirectButton
                link={redirectUrl || ''}
                linkOpenNewTab={true}
                buttonText={buttonText}
                colorScheme={'white_over_green'}
              />
            </div>
          )}
        </div>
        {/* on hover background overlay to get the on hover animation */}
        <span className={`${Styles['bg-overlay']}`}></span>
      </div>
    </>
  );
};
