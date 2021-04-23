import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client/react';
import React from 'react';

import Home from './pages/Home';
import { GqlClientConnection } from './services/qgl.client.service';
import Header from './components/Header';

export default class App extends React.Component  {

  gql = new GqlClientConnection()

  render()  {
    return (
      <ApolloProvider client={this.gql.client}>
        <Header />
        <Home />
      </ApolloProvider>
    )
  }
}
