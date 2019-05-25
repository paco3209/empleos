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
        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>

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
              <input type="email" className="form-control" placeholder="Email" id="email" required="" data-validation-required-message="Please enter your email address." />
              <p className="help-block text-danger"></p>
            </div>
          </div>

          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Mensaje</label>
              <textarea rows="3" className="form-control" placeholder="Mensaje" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" id="sendMessageButton">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </div>

  )
}

export default Contacto
