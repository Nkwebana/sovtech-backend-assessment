interface Greeting {
  name: String;
}

export const resolvers = {
  Query: {
    hello: (parents: any, args: Greeting): String => `Hello there ${args.name}`,
  },
};
