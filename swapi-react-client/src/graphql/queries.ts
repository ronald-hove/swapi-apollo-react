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
                    homeworld
                    url
                }
            }
        }
    `

