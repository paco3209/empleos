import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'
import {connect} from 'react-redux';
import { nuevoEmpleo } from '../actions/empleos';



class FormularioEmpleo extends React.Component {
  constructor(props){
    super(props)
    this.handlesignin = this.handlesignin.bind(this)
  }
  handlesignin(values){
      const Empleo = {
        titulo: values.titulo,
        descripcion: values.descripcion,
        email: values.email,
        empresa: values.empresa,
        website: values.website,
        comoaplicar: values.comoaplicar,
        tipoempleo: values.tipoempleo,
        lugar: values.lugar
      }
      this.props.nuevoEmpleo(Empleo)
      this.props.history.push('/');

  }
  render () {
  return(
    <Form onSubmit={this.handlesignin}/>
  )
  }
}

const mapStateToProps = state => ({
    newEmpleo: state.empleos.empleoUnico
});


export default connect(mapStateToProps, {nuevoEmpleo})(FormularioEmpleo);
