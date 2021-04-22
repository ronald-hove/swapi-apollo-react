import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Person {
        name: String
        height: String
        gender: String
        homeworld: String
    }

    type Query {
        people: [Person]
    }
`;
