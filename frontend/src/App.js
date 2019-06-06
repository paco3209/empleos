import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Contacto from './components/Contacto'

import ListaEmpleos from './containers/listadoEmpleos'
import FormularioEmpleo from './containers/formularioEmpleo'
import Empleo from './containers/empleo'

import './App.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router history={history} >
      <div className="App">

          <Navbar />

          <Switch>
            <Route path="/" component={ ListaEmpleos } />
            <Route exact path="/publicarEmpleo" component={ FormularioEmpleo } />
            <Route exact path="/empleo/:id" component={ Empleo } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contacto" component={ Contacto } />
          </Switch>

          <Footer />

      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
