import { gql } from '@apollo/client';
import { EventFragment } from './fragments/collection-type/event';

//===================  All Events ==========================
export const EventsQuery = (locale: string, eventType: 'upcoming' | 'past') => {
  const currentDate = new Date().toISOString().split('T')[0];
  let filterData;
  if (eventType === 'upcoming') {
    filterData = `locale: "${locale}"
    filters: {eventDate: {gte: "${currentDate}"}}`;
  } else {
    filterData = `locale: "${locale}"
    filters: {eventDate: {lt: "${currentDate}"}}`;
  }
  return gql`{
    events(
      ${filterData}
      ) {
        data {
          attributes {
            ...EventFragment
          }
        }
      }
  }
  ${EventFragment}
  `;
};
