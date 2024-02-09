import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Styles from './index.module.scss';

const LanguageSwitch = () => {
  const [userLanguage, setUserLanguage] = useState('en');
  const router = useRouter();
  useEffect(() => {
    setUserLanguage(window.localStorage.getItem('esc-lang') || 'en');
  }, []);
  const handleLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    let locale = e.target.value;
    setUserLanguage(locale);
    window.localStorage.setItem('esc-lang', locale);
    router.push(`${router.asPath}`, undefined, { locale });
  };
  return (
    <div
      className={
        Styles['language-switches-container'] +
        ' ' +
        'p-0 relative flex bg-white/[.3] h-[30px] w-[70px] rounded-[100vmax]'
      }
    >
      <input
        className="hidden absolute top-0"
        type="radio"
        id="language1"
        name="languageSwitch"
        value="en"
        onChange={handleLanguage}
        checked={userLanguage === 'en'}
      />
      <input
        className="hidden absolute top-0"
        type="radio"
        id="language2"
        name="languageSwitch"
        value="de"
        onChange={handleLanguage}
        checked={userLanguage === 'de'}
      />
      <label
        htmlFor="language1"
        className="w-1/2 p-0 m-0 text-center cursor-pointer text-white leading-[2.5] text-[12px] font-normal"
      >
        UK
      </label>
      <label
        htmlFor="language2"
        className="w-1/2 p-0 m-0 text-center cursor-pointer text-white leading-[2.5] text-[12px] font-normal"
      >
        DE
      </label>
      <div
        className={
          Styles['switch-wrapper'] +
          ' ' +
          'absolute top-0 bottom-0 w-1/2 p-1 z-10 transition-[transform] duration-[500ms] ease-[cubic-bezier(0.77,0,.175,1)]'
        }
      >
        <div
          className={
            Styles['switch'] +
            ' ' +
            'rounded-[30px] bg-[#11CB8E] h-full text-white'
          }
        >
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 transition-[opacity] duration-200 ease-[cubic-bezier(.77,0,.175,1)] will-change-[opacity] opacity-0 leading-[2.5] text-[12px] font-semibold">
            UK
          </div>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 transition-[opacity] duration-200 ease-[cubic-bezier(.77,0,.175,1)] will-change-[opacity] opacity-0 leading-[2.5] text-[12px] font-semibold">
            DE
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
