'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

export default function ApolloProvied({
  children
}: 
{
  children: React.ReactNode
}) {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}
