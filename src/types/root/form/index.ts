// External Imports

import { ITriggerButton } from '../button';

// IFormField
export interface IFormField {
  id?: string;
  tagType?: string;
  type?: string;
  name: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  placeholder?: string;
  isRequired?: Boolean;
}

// IFormValues
export interface IFormValues {
  // key        value
  [key: string]: string | undefined;
}

// IFormFieldProp
export interface IFormFieldProp {
  label?: string;
  tagType?: string;
  type?: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
}
// IPrivacyInfo
export interface IPrivacyInfo {
  link: string;
  linkText: string;
}

// IFormData
export interface IFormData {
  formTitle?: string;
  formFields: IFormFieldProp[];
  buttonInfo: ITriggerButton;
  privacyInfo?: IPrivacyInfo;
}
