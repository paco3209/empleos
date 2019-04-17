import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist';

const Searchbar = (props) => {
  return (
  <div>
    <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">

            <h2 className="mb-5"><Typist><span> Encontra un nuevo empleo </span>
            <Typist.Backspace count={16} delay={200} />
            <span> tu proximo empleo </span></Typist></h2>



        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-5 mb-2 mb-md-0">
                <input type="search" className="form-control form-control-lg" placeholder="Buscar por titulo, descripcion" />
              </div>
              <div className="col-12 col-md-5 mb-2 mb-md-0">
                <input type="search" className="form-control form-control-lg" placeholder="Buscar por localidad" />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Buscar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </header>
</div>
  )
}

export default Searchbar
