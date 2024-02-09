import { IFooterAddress, IFormFieldProp } from '@src/types/root';

export interface IFooterHeader {
  footerHeadTitle: string;
  footerHeadSubtitle: string;
  footerHeadDescription: string;
  formTitle: string;
  formButtonText: string;
  formButtonLink: string;
  formFields: IFormFieldProp[];
}

type IFooterColumnItem = {
  itemText: string;
  itemUrl?: string;
};

export interface IFooterColumn {
  columnItems: IFooterColumnItem[];
}
export interface ILocation {
  attributes: {
    city: string;
    phone: string;
  };
}

export interface IFooter {
  bgType: string;
  footerHeader?: IFooterHeader;
  footerSubTitle: string;
  footerTitle: string;
  subscriberNamePlaceholder: string;
  subscriberEmailAddressPlaceholder: string;
  subscriptionButtonText: string;
  subscriptionButtonSubmitUrl: string;
  footerAddress: IFooterAddress;
  firstColumnPages: IFooterColumnItem[];
  secondColumnPages: IFooterColumnItem[];
  locations: ILocation[];
}
