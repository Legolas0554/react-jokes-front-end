import { constants } from "../constants";
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: constants.URI
});
