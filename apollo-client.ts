/**
 * Configuration file for apollo client.
 */
import { request } from 'graphql-request';
import { ApolloClient } from '@apollo/client/core/ApolloClient.js';
import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache';
const GRAPHQL_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PRODUCTION_API_URL
    : process.env.NEXT_PRODUCTION_API_URL;

export const fetcher = (query: any) =>
  request(`https://eastside-api-strapi.herokuapp.com/graphql`, query);
// request(`http://localhost:1337/graphql`, query);

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;
