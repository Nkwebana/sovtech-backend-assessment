import { handlePeopleResolver } from './get-people-resolver';
import { handleSearchPersonResolver } from './search-person-resolver';
import { handleGetHomeWorldResolver } from './get-home-world-resolver';

export const resolvers = {
  Query: {
    getPeople: handlePeopleResolver,
    searchPerson: handleSearchPersonResolver,
  },
  PersonDetails: { homeworld: handleGetHomeWorldResolver },
};
