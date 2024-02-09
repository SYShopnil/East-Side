// colorSchemeType
export type colorSchemeType =
  | 'white_over_blue'
  | 'white_over_green'
  | 'blue_over_green'
  | 'green_over_white';

// IRedirectButton
export interface IRedirectButton {
  link: string | undefined;
  linkOpenNewTab?: boolean;
  buttonText: string;
  colorScheme?: colorSchemeType;
  isFooter?: boolean;
}

// ITriggerButton
export interface ITriggerButton {
  buttonText: string;
  colorScheme?: colorSchemeType;
}
