import { gql } from 'apollo-server';

export const typeDefs = gql`
  type PersonDetails {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type Query {
    getPeople(pageNumber: Int): [PersonDetails]
    getPerson(name: String): [PersonDetails]
  }
`;
