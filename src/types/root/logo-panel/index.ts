export interface ILogoPanel {
  isFullWidth?: boolean;
  logos: logo[];
  setIsAnimationDone?: any;
  buttonText: string;
}

type logo = {
  logo?: any;
  logoAlt: string;
  redirectUrl: string;
};
