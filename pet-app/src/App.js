import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header'

//import CreatePetPage from './components/CreatePage/CreatePetPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
