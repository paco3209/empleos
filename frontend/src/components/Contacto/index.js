import React from 'react'
import axios from 'axios'


class Contacto extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      nombre: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'ENVIAR MENSAJE'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

handleSubmit(e){
  e.preventDefault()
  this.setState({
    buttonText: '...enviando'
  })

  let data = {
    nombre: this.state.nombre,
    email: this.state.email,
    message: this.state.message
  }

  axios.post('/empleos/contacto', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })


}

resetForm(){
  this.setState({
    nombre: '',
    email: '',
    message: '',
    buttonText: 'Mensaje Enviado'
  })
}

handleInputChange(e){


  this.setState({
    [e.target.name]: e.target.value
  })
}



  render(){
  return (
    <div className="Contacto">

      <div className="container">
      <div className="row">
        <div className="col">
          <h2>Contactanos</h2>
        </div>
      </div>

    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <p className="textoContacto">Dejanos tu mensaje o sugerencia y te contactaremos lo antes posible! </p>

        <form name="sentMessage" className="needs-validation" id="contactForm" novalidate onSubmit={this.handleSubmit}>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label for="validationDefault01">Name</label>
              <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} required />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Email</label>
              <input type="email" className="form-control contactField" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
              <p className="help-block text-danger"></p>
            </div>
          </div>

          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Mensaje</label>
              <textarea rows="2" className="form-control contactField" placeholder="Mensaje" id="message" name="message" value={this.state.message} onChange={this.handleInputChange} required ></textarea>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div className="form-group">
            <button type="submit"  className="btn btn-primary btnEnviarMensaje" id="sendMessageButton">{this.state.buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </div>

  )
}
}

export default Contacto
