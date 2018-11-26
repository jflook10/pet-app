import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header'

import CreatePetPage from './components/CreatePage/CreatePetPage'


const client = new ApolloClient({
  //endpoint to graphql server
  uri: 'https://api-uswest.graphcms.com/v1/cjop0gbzb2q3v01ij2sui86vg/master'
});


// older way to query
// client.query({
//   query: PETS_QUERY
// }).then(res => console.log(res, "RESPONSE"))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path= "/" component={HomePage} />
              <Route path= "/addpet" component={CreatePetPage} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
