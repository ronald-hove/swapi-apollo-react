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
                people: async (parent: any, args: any, context: any, info: any) => {
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
