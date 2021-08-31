import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
