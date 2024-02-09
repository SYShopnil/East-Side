// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${path}`;
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMediaUrl(
  imageInfo: any,
  size?: 'thumbnail' | 'medium' | 'small' | 'large'
): { url: string; width: number; height: number; alternativeText: string } {
  if (!!imageInfo && imageInfo.data) {
    let attributes = imageInfo?.data?.attributes;
    if (size && attributes?.formats && attributes.formats[size]) {
      return attributes?.formats[size];
    } else return attributes;
  } else {
    return {
      url: '',
      width: 0,
      height: 0,
      alternativeText: '',
    };
  }
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export function redirectTo500page() {
  return {
    redirect: {
      destination: `/500`,
      permanent: false,
    },
  };
}

// This function will build the url to fetch on the Strapi API
export function getData(slug: string, locale: string) {
  const apiUrl = `/api/pages?filters[slug]=${slug}&locale=${locale}&populate[block][populate]=*&populate[seo][populate]=*`;
  // const apiUrl = `/api/pages/naim`;
  return getStrapiURL(apiUrl);
}
