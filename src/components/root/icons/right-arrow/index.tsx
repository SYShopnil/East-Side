import * as React from 'react';
import { IIcon } from '@src/types/root/icons';

export const RightArrowIcon = ({ iconFill, iconType }: IIcon) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="right-arrow-icon"
  >
    {iconType == 'normal' && (
      <path
        d="M10 5a.765.765 0 0 0-.185-.469L5.725.211c-.24-.284-.699-.278-.967-.023-.269.255-.291.707-.02.96l2.996 3.17H.682a.682.682 0 0 0 0 1.364h7.052L4.737 8.847c-.27.254-.248.707.02.962.27.256.735.256.967-.024l4.091-4.318A.662.662 0 0 0 10 5Z"
        fill={iconFill}
      />
    )}

    {iconType == 'gradient_blue' && (
      <>
        <path
          d="M9.99999 4.9998C9.99316 4.82717 9.92807 4.66194 9.81533 4.53103L5.72443 0.210639C5.48538 -0.0734637 5.02597 -0.0665638 4.75771 0.188317C4.48944 0.443198 4.46672 0.894921 4.73741 1.14818L7.73416 4.31795L0.681817 4.31795C0.500988 4.31795 0.327565 4.38979 0.1997 4.51766C0.071834 4.64553 -2.26386e-07 4.81896 -2.18482e-07 4.9998C-2.10577e-07 5.18064 0.071834 5.35407 0.1997 5.48194C0.327565 5.60981 0.500988 5.68165 0.681818 5.68165L7.73417 5.68165L4.73741 8.84736C4.46672 9.10062 4.48904 9.55397 4.75771 9.80925C5.02638 10.0645 5.49228 10.0654 5.72443 9.7849L9.81533 5.46654C9.93573 5.34121 10.0021 5.17358 9.99999 4.9998Z"
          fill="url(#paint0_linear_1194_2747)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1194_2747"
            x1="3.33334"
            y1="-2.83134"
            x2="3.52122"
            y2="11.3249"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4229EF" />
            <stop offset="1" stopColor="#2BB8E4" />
          </linearGradient>
        </defs>
      </>
    )}

    {iconType == 'gradient_green' && (
      <>
        <path
          d="M9.99999 4.9998C9.99316 4.82717 9.92807 4.66194 9.81533 4.53103L5.72443 0.210639C5.48538 -0.0734637 5.02597 -0.0665638 4.75771 0.188317C4.48944 0.443198 4.46672 0.894921 4.73741 1.14818L7.73416 4.31795L0.681817 4.31795C0.500988 4.31795 0.327565 4.38979 0.1997 4.51766C0.071834 4.64553 -2.26386e-07 4.81896 -2.18482e-07 4.9998C-2.10577e-07 5.18064 0.071834 5.35407 0.1997 5.48194C0.327565 5.60981 0.500988 5.68165 0.681818 5.68165L7.73417 5.68165L4.73741 8.84736C4.46672 9.10062 4.48904 9.55397 4.75771 9.80925C5.02638 10.0645 5.49228 10.0654 5.72443 9.7849L9.81533 5.46654C9.93573 5.34121 10.0021 5.17358 9.99999 4.9998Z"
          fill="url(#paint0_linear_1194_2747)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1194_2747"
            x1="3.33334"
            y1="-2.83134"
            x2="3.52122"
            y2="11.3249"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2BB8E4" />
            <stop offset="1" stopColor="#00D855" />
          </linearGradient>
        </defs>
      </>
    )}
  </svg>
);
