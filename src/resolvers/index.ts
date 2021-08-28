import { handlePeopleResolver } from './people-resolver';
import { handlePersonResolver } from './person-resolver';
import { handleHomeWorldResolver } from './home-world-resolver';

export const resolvers = {
  Query: {
    getPeople: handlePeopleResolver,
    getPerson: handlePersonResolver,
  },
  PersonDetails: { homeworld: handleHomeWorldResolver },
};
