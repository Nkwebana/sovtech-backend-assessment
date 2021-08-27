import { handlePeopleResolver } from './people-resolver';
import { handlePersonResolver } from './person-resolver';

export const resolvers = {
  Query: {
    getPeople: handlePeopleResolver,
    getPerson: handlePersonResolver,
  },
};
