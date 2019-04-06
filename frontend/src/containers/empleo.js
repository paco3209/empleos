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
      <div></div>
    )

  }
}

const mapStateToProps = (state) => ({

    empleoUnico: state.empleos.empleoUnico
})

export  default connect(mapStateToProps, { buscarEmpleo })(Empleo)
