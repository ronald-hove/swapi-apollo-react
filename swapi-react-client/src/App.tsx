import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Character from './pages/Character';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { GqlClientConnection } from './services/qgl.client.service';

export default class App extends React.Component  {

  gql = new GqlClientConnection()

  render()  {
    return (
      <ApolloProvider client={this.gql.client}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/character" exact component={Character}></Route>
            <Route path="*" exact component={PageNotFound}></Route>
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}
