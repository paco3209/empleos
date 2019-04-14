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
            <label for="titulo">Titulo <sup>*</sup> </label>
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
            <label for="email">Email <sup>*</sup> </label>
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
              value="Fulltime"
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
              value="Parttime"
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
              value="Pasantia"
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
              value="Remoto"
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
            <label for="exampleFormControlTextarea1">Descripcion<sup>*</sup></label>
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
              <label for="comoaplicarTextarea">Como aplicar <sup>*</sup></label>
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
            <label for="Lugar">Lugar <sup>*</sup> </label>
            <Field
            name="lugar"
            component="select"
            className="form-control"
            required
            >
            <option></option>
            <option value="Buenos Aires" >Buenos Aires</option>
				    <option value="Capital Federal" >Capital Federal</option>
            <option value="Catamarca" >Catamarca</option>
            <option value="Chaco" >Chaco</option>
            <option value="Chubut" >Chubut</option>
            <option value="Corrientes" >Corrientes</option>
            <option value="Córdoba" >Córdoba</option>
            <option value="Entre Ríos" >Entre Ríos</option>
            <option value="Formosa" >Formosa</option>
            <option value="Jujuy" >Jujuy</option>
            <option value="La Pampa" >La Pampa</option>
            <option value="La Rioja" >La Rioja</option>
            <option value="Mendoza" >Mendoza</option>
            <option value="Misiones" >Misiones</option>
            <option value="Neuquén" >Neuquén</option>
            <option value="Río Negro" >Río Negro</option>
            <option value="Salta" >Salta</option>
            <option value="San Juan" >San Juan</option>
            <option value="San Luis" >San Luis</option>
            <option value="Santa Cruz" >Santa Cruz</option>
            <option value="Santa Fe" >Santa Fe</option>
            <option value="Santiago del Estero" >Santiago del Estero</option>
            <option value="Tierra del Fuego" >Tierra del Fuego</option>
            <option value="Tucumán" >Tucumán</option>

          </Field>
          </div>

        </div>
        <div className="row">
          <div className="col">
            <h3>Datos de empresa </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="Empresa">Nombre Empresa o Recruiter <sup>*</sup> </label>
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
