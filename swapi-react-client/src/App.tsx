import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client/react';
import React from 'react';

import HomePage from './pages/Home';
import { GqlClientConnection } from './services/qgl.client.service';

export default class App extends React.Component  {

  gql = new GqlClientConnection()

  render()  {
    return (
      <ApolloProvider client={this.gql.client}>
        <HomePage />
      </ApolloProvider>
    )
  }
}
