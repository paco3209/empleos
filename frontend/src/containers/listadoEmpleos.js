import React from 'react'
import PropTypes from 'prop-types'
import Searchbar from './Search'
import { connect } from 'react-redux';
import {listadoEmpleos} from '../actions/empleos';
import Moment from 'react-moment';

import moment from 'moment/min/moment-with-locales';

Moment.globalMoment = moment;
Moment.globalLocale = 'es';


class listadoEmpleo extends React.Component {
  constructor(props){
    super(props);
    super(props);
    this.state = {
      listado: []
    }
  }

  componentDidMount(){


  this.props.listadoEmpleos();

  }



  render () {
    const listado = this.props.listado;
    const cantidad = listado.length;

    return(
  <div className="PaginaPrincipal">
    <Searchbar />
    <div className="container">
        <div>
          <h3 className="avisos">{cantidad} avisos de trabajos encontrados en Argentina</h3>
        </div>
        <hr />
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {listado.map(data => (
                <div className="post-preview" key={data._id}>
                  <a href={"/empleo/" + data._id}>
                    <h2 className="post-title">
                      {data.titulo}
                    </h2>
                  </a>
                  <p className="post-meta">Publicado por
                    <a href="#"> {data.empresa} </a>
                    <Moment fromNow>{data.date}</Moment></p>
                </div>
              ))}




              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts →</a>
              </div>
            </div>
          </div>
       </div>
    </div>
       )

  }
}

const mapStateToProps = (state) => ({

    listado: state.empleos.listadoEmpleo
})

export  default connect(mapStateToProps, { listadoEmpleos })(listadoEmpleo);
