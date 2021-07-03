import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import AllBeer from './components/AllBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/cat" render={(props) => <Cat />} />

        <Route exact path="/beers" render={(props) => <AllBeer />} />
        <Route
          exact
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route exact path="/new-beer" render={(props) => <NewBeer />} />
        <Route
          exact
          path="/one-beer/:id"
          render={(props) => <SingleBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
