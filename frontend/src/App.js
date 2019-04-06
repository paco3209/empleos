import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/NavBar'

import ListaEmpleos from './containers/listadoEmpleos'
import FormularioEmpleo from './containers/formularioEmpleo'
import Empleo from './containers/empleo'
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
            <Route exact path="/publicarEmpleo" component={ FormularioEmpleo } />
            <Route exact path="/empleo/:id" component={ Empleo } />
          </Switch>



      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
