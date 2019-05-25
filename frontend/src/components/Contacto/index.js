import React from 'react'


const Contacto = (props) => {
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

        <form name="sentMessage" id="contactForm" novalidate="">
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Nombre" id="name" required="" data-validation-required-message="Please enter your name." aria-invalid="false" />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Email</label>
              <input type="email" className="form-control contactField" placeholder="Email" id="email" required="" data-validation-required-message="Please enter your email address." />
              <p className="help-block text-danger"></p>
            </div>
          </div>

          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Mensaje</label>
              <textarea rows="2" className="form-control contactField" placeholder="Mensaje" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btnEnviarMensaje" id="sendMessageButton">ENVIAR MENSAJE</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </div>

  )
}

export default Contacto
