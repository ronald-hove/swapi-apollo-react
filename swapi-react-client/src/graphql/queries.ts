import { gql } from '@apollo/client'

export const GET_PEOPLE = gql`
        query GetPeople ($url: String) {
            people (url: $url) {
                count
                next
                previous
                results {
                    name
                    height
                    mass
                    gender
                    homeworld_name
                    url
                }
            }
        }
    `

export const SEARCH_PEOPLE = gql`
    query SearchPeople ($query: String) {
        search (query: $query) {
            count
            next
            previous
            results {
                name
                height
                mass
                gender
                homeworld_name
                url
            }
        }
    }
`

export const GET_ONE = gql`
    query getOnePerson ($url: String) {
        person (url: $url) {
            name
            height
            mass
            gender
            homeworld_name
            url
        }
    }
`

