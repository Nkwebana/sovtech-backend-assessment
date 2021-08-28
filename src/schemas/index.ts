import { gql } from 'apollo-server';

export const typeDefs = gql`
  type HomeWorld {
    name: String
    rotation_period: String
    terrain: String
    climate: String
    population: String
  }

  type PersonDetails {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: HomeWorld
  }

  type Query {
    getPeople(pageNumber: Int): [PersonDetails]
    getPerson(name: String): [PersonDetails]
  }
`;
