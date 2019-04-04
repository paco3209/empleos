import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/NavBar'

import ListaEmpleos from './containers/listadoEmpleos'
import './App.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router history={history} >
      <div className="App">

          <Navbar />

          <Switch>
            <Route exact path="/" component={ ListaEmpleos } />

          </Switch>



      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
