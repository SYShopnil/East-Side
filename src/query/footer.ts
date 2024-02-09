import { gql } from '@apollo/client';

export const Footer = (locale: string): any => {
  let myQuery = gql`
    query Footer {
      footerPrimary(locale: "${locale}") {
        data {
          attributes {
            bgType
            footerSubTitle
            footerTitle
            subscriberNamePlaceholder
            subscriberEmailAddressPlaceholder
            subscriptionButtonText
            subscriptionButtonSubmitUrl
            firstColumnPages {
              itemText
              itemUrl
            }
            secondColumnPages {
              itemText
              itemUrl
            }
            locations {
              data {
                attributes {
                  city
                  phone
                }
              }
            }
          }
        }
      }
    }
  `;
  return myQuery;
};
