import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {buscarEmpleo} from '../actions/empleos'

class Empleo extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.buscarEmpleo(this.props.match.params.id)



  }

  render () {
    const empleo = this.props.empleoUnico;
    console.log(empleo);
    return(
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <p classNameName="nombreEmpresa">{empleo.empresa} BUSCA</p>

          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1>{empleo.titulo}</h1>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{empleo.tipoempleo} en {empleo.lugar}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div><h3>Descripcion</h3></div>
            <div dangerouslySetInnerHTML={{__html: empleo.descripcion}} />
          </div>
          <div className="col" >

            <div><h4>Como aplicar</h4></div>
            <div class="comoaplicar">
            {empleo.comoaplicar}
            </div>
            <div>

              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Compartir en Twitter</a>
            </div>
            <div>
              <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartir</a></div>
            </div>
          </div>
        </div>

      </div>
</section>
    )

  }
}

const mapStateToProps = (state) => ({

    empleoUnico: state.empleos.empleoUnico
})

export  default connect(mapStateToProps, { buscarEmpleo })(Empleo)
