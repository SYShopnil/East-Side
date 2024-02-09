import { gql } from '@apollo/client';
import { LocationFragment } from './fragments/collection-type/location';

//===================  All Locations ==========================
export const LocationsListQuery = (locale: string) => {
  return gql`
    {
      locations {
        data {
          attributes {
            ...LocationFragment
          }
        }
      }
    }
    ${LocationFragment}
  `;
};
