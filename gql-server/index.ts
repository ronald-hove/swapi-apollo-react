import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';

import { peopleTypeDef } from './schemas/people.gql.schema';
import { Resolver } from './services/resolver.service';
import { Swapi } from './services/swapi.service';

dotenv.config({path: './config/.env'})

const swapi = new Swapi()
const resolver = new Resolver(swapi);

const app = express();
const server = new ApolloServer({ typeDefs: [peopleTypeDef], resolvers: [resolver.getPeopleResolver()] });
server.applyMiddleware({ app });
server.setGraphQLPath('swapi-gql');

const PORT = process.env.PORT || 3000
app.listen({port: PORT}, () => console.log(`GraphQl server started on port ${PORT} ${server.graphqlPath}`));