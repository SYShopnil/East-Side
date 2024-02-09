export interface IMenuItem {
  menuItemId: number;
  menuItemText: string;
  menuItemLink: string | null;
  isSubMenu?: boolean;
  isMegaMenu?: boolean;
}
interface IServiceList {
  coreServiceName: string;
  serviceList: { title: string; description: string }[];
}
export interface IFooterAddressInfo {
  menuItems: IMenuItem[];
  logo?: any;
  phone: string;
  mail: string;
  address: string;
  partnerLogos?: any[];
  coreServices: IServiceList[];
}
export interface IMenu {
  globalInfo: IFooterAddressInfo;
  menuItemColor?: string;
  menuItemHoverColor?: string;
  megaMenuActiveColor?: string;
  megaMenuActiveBg?: string;
  menuItemActiveColor?: string;
}

export interface IServiceCategoryCard {
  title: string;
  description: string;
  link: string;
}

export interface IMegaMenuCaseStudyCard {
  title: string;
  slug: string;
  companyName: string;
  caseStudyImage: any;
}

export interface ISingleService {
  serviceName: string;
  serviceCategories: IServiceCategoryCard[];
  caseStudyType: string;
}
