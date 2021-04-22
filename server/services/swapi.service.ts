import { SwapiApiResponse, Person } from '../models/swapi-response.model';
import  axios  from 'axios';

export class SwapiApi {

    getPeople(): Promise<Person[]> {
        return new Promise (async (resolve, reject) => {
            try {
                const swapi = await axios.get<SwapiApiResponse>(`${process.env.BASE_API_URL}/people`)
                return resolve(swapi.data.results)
            }catch(error) {
                return reject(error)
            }
        })
    }
}
