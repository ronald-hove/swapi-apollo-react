import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';

import { typeDefs } from './schemas/gql.schema';
import { SwapiApi } from './services/swapi.service';

dotenv.config({path: './config/.env'})

// fetch people from api
const swapi = new SwapiApi();

const resolvers = {
  Query: {
    people: async () => await swapi.getPeople(),
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


const PORT = process.env.PORT || 3000
app.listen({port: PORT}, () => console.log(`GraphQl server started on port ${PORT} ${server.graphqlPath}`));