import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';

import { peopleTypeDef } from './schemas/people.gql.schema';
import { Resolver } from './services/resolver.service';
import { Swapi } from './services/swapi.service';

dotenv.config()

const swapi = new Swapi()
const resolver = new Resolver(swapi);

const server = new ApolloServer({
    typeDefs: [peopleTypeDef], resolvers: [resolver.getPeopleResolver()],
    playground: true,
    introspection: true,
});
server.start()

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000
app.listen({ port: PORT }, () => console.log(`GraphQl server started on port ${PORT} ${server.graphqlPath}`));