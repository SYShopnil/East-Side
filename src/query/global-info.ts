import { gql } from '@apollo/client';
import { ImageFragment } from './fragments/pages-fragment';

export const GlobalInfo = (locale: string): any => {
  let myQuery = gql`
    query GlobalInfo {
      globalInfo (locale : "${locale}") {
        data {
          attributes {
            logo {
              image {
                ...ImageFragment
              }
              alt
            }
            phone
            mail
            address
            partnerLogos {
              image {
                ...ImageFragment
              }
              alt
            }
            copyrightText
            menuItems(sort : "menuItemId:asc") {
            menuItemId
            menuItemText
            menuItemLink
            isMegaMenu
          }
            coreServices {
            coreServiceName
            serviceList {
              title
              description
              link
          }
        }
          }
        }
      }
    }
    ${ImageFragment}
  `;
  return myQuery;
};
