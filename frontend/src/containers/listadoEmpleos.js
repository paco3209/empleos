import React from 'react'
import PropTypes from 'prop-types'
import Searchbar from './Search'
import { connect } from 'react-redux';
import {listadoEmpleos} from '../actions/empleos';
import Moment from 'react-moment';

import moment from 'moment/min/moment-with-locales';
import InfiniteScroll from 'react-infinite-scroller';

Moment.globalMoment = moment;
Moment.globalLocale = 'es';


class listadoEmpleo extends React.Component {
  constructor(props){
    super(props);
    super(props);
    this.state = {
      listado: [],
      hasMoreItems: true

    }
  }

  loadItems(page){


  this.props.listadoEmpleos(page);
  const current= this.props.current
  const pages = this.props.pages



  console.log(current);
  console.log(pages);

  

  if(current === pages){
    this.setState({
      hasMoreItems: false
    })
  }

  }



  render () {

    const loader = <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
  ;
    const listado = this.props.listado;
    const items = [];
    const cantidad = 20;


    listado.map(data => {
      items.push(
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
    )})

    console.log(items);

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

              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}
              >
                {items}
              </InfiniteScroll>




            </div>
          </div>
       </div>
    </div>
       )

  }
}

const mapStateToProps = (state) => ({

    listado: state.empleos.listadoEmpleo,
    current: state.empleos.current,
    pages: state.empleos.pages
})

export  default connect(mapStateToProps, { listadoEmpleos })(listadoEmpleo);
