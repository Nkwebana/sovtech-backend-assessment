import { ApolloServer } from 'apollo-server';

import { resolvers } from './src/resolvers';
import { typeDefs } from './src/schemas';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000, () => {
  console.log(
    'Running a GraphQL server at http://localhost:4000' + server.graphqlPath
  );
});
