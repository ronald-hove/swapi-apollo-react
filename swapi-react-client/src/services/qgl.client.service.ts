import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


export class GqlClientConnection {

    errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) => {
                // handle error
            })
        }
    })

    link = from([
        this.errorLink,
        new HttpLink({ uri: 'http://localhost:5000/graphql' })
    ])

    client = new ApolloClient({
        link: this.link,
        cache: new InMemoryCache()
    });
}