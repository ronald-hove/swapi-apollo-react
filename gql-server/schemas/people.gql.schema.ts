import { gql } from 'apollo-server-express';

export const peopleTypeDef = gql`
    type Person {
        name:       String
        height:     String
        mass:       String
        hair_color: String
        skin_color: String
        eye_color:  String
        birth_year: String
        gender:     String
        homeworld:  String
        films:      [String!]!
        species:    [String!]!
        vehicles:   [String!]!
        starships:  [String!]!
        created:    String
        edited:     String
        url:        String
    }

    type Swapi {
        count:    Int
        next:     String
        previous: String
        results:  [Person!]!
    }

    type Query {
        people(url: String): Swapi
        person(url: String): Person
        search(query: String): Swapi
    }
`
