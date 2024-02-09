import { ILogoPanel } from '@src/types/root';
import { getStrapiMediaUrl } from '@src/utils';
import { useState, useEffect, useCallback } from 'react';
import { Logo } from './logo';
import { useInView } from 'react-intersection-observer';

export const LogoPanel = ({
  logos,
  isFullWidth,
  setIsAnimationDone = undefined,
  buttonText = '',
}: ILogoPanel) => {
  const [mousePos, setMousePos] = useState('');
  const [isHover, setIsHover] = useState(false);

  /**
   * this will track the logo panel part is in view in the view port or not.
   *If it is in view port then the animation will start auto
   
   */
  const { ref: logoContainerRef, inView: logoContainerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  //this tracking counter will count the expected index formation
  let [indexTrackingCounter, setIndexTrackingCounter] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState<any>([]);

  /**
   *
   * This will show the logo in a particular time interval with  effect
   */
  const animationHandler = useCallback(() => {
    //this array will be come as a dynamic way base on input (pending)
    const expectedVisibleIndexFormation = isFullWidth
      ? [[1], [2, 6], [3, 7, 11], [4, 8, 12], [5, 9, 13], [10, 14], [15]]
      : [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10]];
    if (indexTrackingCounter <= expectedVisibleIndexFormation.length - 1) {
      const data = expectedVisibleIndexFormation[indexTrackingCounter];
      setTimeout(() => {
        setVisibleIndex([...visibleIndex, data]);
        setIndexTrackingCounter(++indexTrackingCounter);
      }, 500);
    } else {
      setIsAnimationDone && setIsAnimationDone(true);
    }
  }, [indexTrackingCounter, isFullWidth, setIsAnimationDone, visibleIndex]);

  /**
   * Handle the on mouse move action part
   */
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos(event.clientX);
    };
    if (isHover) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHover]);

  /***
   *
   * This will control the animation on mouse position change in the respective div
   */
  useEffect(() => {
    if (mousePos && isHover) {
      animationHandler();
    }
  }, [mousePos, isHover, animationHandler]);

  /***
   *
   * This will control the animation on scroll in-view appear
   */
  useEffect(() => {
    if (logoContainerInView) {
      animationHandler();
    }
  }, [animationHandler, logoContainerInView]);
  const visibleIndexHandler = (ind: number) => {
    const a = visibleIndex.map((childArray: any) => {
      return childArray.find((data: any) => {
        return data == ind;
      });
    });
    const b = a.filter((value: any) => value);
    return b[0];
  };
  return (
    <div
      className={`logo-block-grid grid ${
        isFullWidth
          ? 'grid-cols-5 gap-y-[1rem] min-w-[71.25rem]'
          : 'grid-cols-2 gap-y-[1rem] gap-x-[1rem]'
      } items-center text-center`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={logoContainerRef}
    >
      {!!logos &&
        !!logos.length &&
        logos.map((logo, index) => {
          let imageInfo = getStrapiMediaUrl(logo.logo);
          const dataIndex = ++index;
          let checkvisibleIndex: any = visibleIndexHandler(dataIndex);
          return (
            <div key={dataIndex}>
              <Logo
                redirectUrl={logo.redirectUrl}
                logoAlt={logo.logoAlt}
                imageUrl={imageInfo.url}
                imageAlt={imageInfo.alternativeText}
                isShow={dataIndex == checkvisibleIndex}
                buttonText={buttonText}
              />
            </div>
          );
        })}
    </div>
  );
};
