export type IContext = {
  params: {
    slug: string;
  };
  locale: string;
  preview: boolean | null;
};

export type IPath = {
  params: {
    slug: string;
  };
};

export type IPathContext = {
  defaultLocale: string;
  locales: string[];
};
