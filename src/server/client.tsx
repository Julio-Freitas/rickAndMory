import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const Provider = ({ children }: PropsWithChildren<any>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
