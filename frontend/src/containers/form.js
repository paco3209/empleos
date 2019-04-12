import React from 'react'
import { Field, reduxForm } from 'redux-form'
import EditorField from "./EditorField";

const UploadFile = ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
  <input type='file' {...inputProps} {...props} />
);



const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  <section id="contact">
    <div className="container">
      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="row">
          <div className="col">
            <h3>Publicar Empleo</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="titulo">Titulo </label>
            <Field
            name="titulo"
            component="input"
            type="text"
            placeholder="Ej: Android Developer"
            id="validationTooltip01"
            className="form-control"
            required
            />

          </div>
          <div className="col">
            <label for="email">Email </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <Field
              name="email"
              component="input"
              type="email"
              placeholder="email@email.com"
              id="email"
              className="form-control"
              required


              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-check form-check-inline">
              <Field
              name="tipoempleo"
              component="input"
              type="radio"
              value="fulltime"
              className="form-check-input"
              id="inlineRadio1"
              required
            />{' '}
              <label className="form-check-label" for="inlineRadio1">Full-Time</label>
            </div>
            <div className="form-check form-check-inline">
              <Field
              name="tipoempleo"
              component="input"
              type="radio"
              value="parttime"
              className="form-check-input"
              id="inlineRadio2"
              required
            />{' '}
              <label className="form-check-label" for="inlineRadio2">Part-Time</label>
            </div>
            <div className="form-check form-check-inline">
              <Field
              name="tipoempleo"
              component="input"
              type="radio"
              value="pasantia"
              className="form-check-input"
              id="inlineRadio3"
              required
            />{' '}
              <label className="form-check-label" for="inlineRadio3">Pasantia</label>
            </div>
            <div className="form-check form-check-inline">
              <Field
              name="tipoempleo"
              component="input"
              type="radio"
              value="remoto"
              className="form-check-input"
              id="inlineRadio4"
              required
            />{' '}
              <label className="form-check-label" for="inlineRadio3">Remoto</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="exampleFormControlTextarea1">Descripcion</label>
            <div>
              <EditorField
        key="field"
        name="descripcion"
        id="inputEditorText"
        disabled={false}
        placeholder="Type here"


      />
           </div>



          </div>
        </div>
        <div className="row">
          <div className="col">
              <label for="comoaplicarTextarea">Como aplicar</label>
              <Field
                name="comoaplicar"
                component="textarea"
                id="comoaplicarTextarea"
                className="form-control"
                rows="3"
                placeholder="Ejemplo: Enviar cv a empleo@empleo.com"
                required
                 />

          </div>
          <div className="col">
            <label for="Lugar">Lugar </label>
            <Field
            name="Lugar"
            component="input"
            type="text"
            placeholder="Lugar de trabajo"
            id="Lugar"
            className="form-control"
            required
            />
          </div>

        </div>
        <div className="row">
          <div className="col">
            <h3>Datos de empresa</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="Empresa">Nombre Empresa o Recruiter </label>
            <Field
            name="empresa"
            component="input"
            type="text"
            placeholder="Recuit"
            id="Empresa"
            className="form-control"
            required
            />
          </div>
          <div className="col">
            <label for="sitioweb">Sitio web Empresa </label>
            <Field
            name="website"
            component="input"
            type="text"
            placeholder="www.recruit.com"
            id="sitioweb"
            className="form-control"
            />
          </div>
        </div>
        <div>

        <div className="row">
          <div className="col botones">
            <button type="submit" disabled={pristine || submitting}
              className="btn btn-primary"
            >
              Publicar
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}
              className="btn btn-secondary"
            >
              Limpiar Datos
            </button>
          </div>
        </div>
     </div>


      </form>
    </div>

  </section>
  )
}

export default reduxForm({
  form: 'simple'

})(SimpleForm)
