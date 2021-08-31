import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8080, () => {
  console.log(
    'Running a GraphQL server at http://localhost:8080' + server.graphqlPath
  );
});
