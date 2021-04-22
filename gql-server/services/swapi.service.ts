import { SwapiResponse, Person } from '../models/swapi-response.model';
import  axios  from 'axios';

export class Swapi {

    /**
     *
     *
     * @return {*}  {Promise<Person[]>}
     * @memberof Swapi
     */
    queryPeople(url?: string): Promise<SwapiResponse> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = await axios.get<SwapiResponse>(url ? url : `${process.env.BASE_API_URL}/people`)
                return resolve(swapi.data)
            }catch(error) {
                return reject(error)
            }
        })
    }

    /**
     *
     *
     * @param {string} url
     * @return {*}  {Promise<Person>}
     * @memberof Swapi
     */
    queryPerson(url: string): Promise<Person> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = await axios.get<Person>(url)
                return resolve(swapi.data)
            }catch(error) {
                return reject(error)
            }
        })
    }


    /**
     *
     *
     * @param {string} query
     * @return {*}  {Promise<Person>}
     * @memberof Swapi
     */
    searchPeople(query: string): Promise<SwapiResponse> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = await axios.get<SwapiResponse>(`${process.env.BASE_API_URL}/people/?search=${query}`)
                return resolve(swapi.data)
            }catch(error) {
                return reject(error)
            }
        })
    }
}
