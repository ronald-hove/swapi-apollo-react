import axios from 'axios';
import { findWhere, map } from 'underscore';

import { Person, SwapiResponse } from '../models/swapi-response.model';
import { Homeworld } from './../models/homeworld.model';

export class Swapi {

    people: Person[] = [];

    /**
     *
     *
     */
    queryPeople(url?: string): Promise<SwapiResponse> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = (await axios.get<SwapiResponse>(url ? url : `${process.env.BASE_API_URL}/people`)).data
                this.people = swapi.results;
                const people = await Promise.all(this.appendHomeworld(swapi))
                swapi.results = people;
                return resolve(swapi)
            }catch(error) {
                return reject(error)
            }
        })
    }


    /**
     *
     *
     */
    queryPerson(url: string): Promise<Person> {
        return new Promise (async (resolve, reject) => {
            try {
                let person = findWhere(this.people, {url})
                if (!person) {
                    person = (await axios.get<Person>(url)).data
                }
                person.homeworld_name = (await axios.get<Homeworld>(person.homeworld)).data.name;
                return resolve(person)
            }catch(error) {
                return reject(error)
            }
        })
    }


    /**
     *
     *
     */
    searchPeople(query: string): Promise<SwapiResponse> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = (await axios.get<SwapiResponse>(`${process.env.BASE_API_URL}/people/?search=${query}`)).data
                const people = await Promise.all(this.appendHomeworld(swapi))
                swapi.results = people;
                return resolve(swapi)
            }catch(error) {
                return reject(error)
            }
        })
    }

    /**
     *
     *
     */
    private appendHomeworld(swapi: SwapiResponse) {
        const people = map(swapi.results, (person) => {
            return this.queryPerson(person.url)
        });
        return people;
    }
}
