import React from 'react'

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

    this.state = {
      listado: [],
      hasMoreItems: true,
      filtro: '',
      page: 1

    }
    this.loadItems = this.loadItems.bind(this)
    this.renderLoadMore = this.renderLoadMore.bind(this)
  }

componentDidMount = () => {
    this.loadItems(this.state.page)
}

componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.filtro !== this.props.filtro) {
      this.setState({ hasMoreItems: false, listado: [] , page: 1}, () => {
        this.loadItems(this.state.page);
      });
    }
  };


  loadItems(){


  var filtroPuesto = this.props.filtro;


  if(filtroPuesto == null){
      filtroPuesto='.*';
  }

this.setState({
  page: this.state.page + 1
})

 var paginaSiguiente = this.state.page

  this.props.listadoEmpleos(paginaSiguiente, filtroPuesto);
  const current= this.props.current

  const pages = this.props.pages
console.log(current);






  if(current === pages){
    this.setState({
      hasMoreItems: false
    })

  }

  }

  renderLoadMore() {
    var isFetching = true
      if(this.props.current === this.props.page){
        isFetching = true
      }else{
        isFetching = false
      }
      return (



          <button className="btn btn-primary cargarDatos"
                onClick={this.loadItems}
                disabled={isFetching}
                >
Cargar mas empleos
        </button>


      )
}


  render () {

    const loader = <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
  ;
    const listado = this.props.listado;
    const items = [];
    const cantidad = this.props.total;
    const current = this.props.current;
    const pages = this.props.pages;



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


                {items}
                {
                  current !== pages &&


                  this.renderLoadMore()
}



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
    pages: state.empleos.pages,
    total: state.empleos.totalPages,
    filtro: state.empleos.filtro

})

export  default connect(mapStateToProps, { listadoEmpleos })(listadoEmpleo);
