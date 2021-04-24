import { SwapiResponse } from './../models/swapi-response.model';
import { Swapi } from './swapi.service';

export class Resolver {

    constructor(private swapi: Swapi) {}


    /**
     *
     *
     * @return {*} 
     * @memberof Resolver
     */
    getPeopleResolver() {
        const peopleResolver = {
            Query: {
                people: async (parent: any, args: any, context: any, info: any): Promise<SwapiResponse> => {
                    // Get home world data and map it onto people arr     
                    return await this.swapi.queryPeople(args.url);
                },
                person: async (parent: any, args: any, context: any, info: any) => {
                    // query a single person
                    return await this.swapi.queryPerson(args.url);
                },
                search: async (parent: any, args: any, context: any, info: any) => {
                    // query a single person
                    return await this.swapi.searchPeople(args.query);
                }
            }
        };
        return peopleResolver;
    }

}
