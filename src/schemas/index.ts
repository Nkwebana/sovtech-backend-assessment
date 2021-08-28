import { gql } from 'apollo-server';

export const typeDefs = gql`
  type HomeWorld {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
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
