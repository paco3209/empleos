import axios from 'axios';
import { LISTAR_EMPLEOS, NUEVO_EMPLEO,EMPLEO_UNICO, TIPO_FILTRO  } from './types';


export const listadoEmpleos = (page, filtro) => dispatch =>{
  axios.get(`/empleos/${page}&${filtro}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LISTAR_EMPLEOS,
        payload: res.data
      })
    })
}

export const cargarFiltro = (filtro) => dispatch => {

  dispatch({
    type: TIPO_FILTRO,
    payload: filtro
  })

}

export const nuevoEmpleo = (noticia) => dispatch => {

  axios.post('/empleos/nuevoEmpleo', noticia)
    .then(function (response) {
        console.log(response);
        })
    .catch(function (error) {
      console.log(error);
});


}

export const buscarEmpleo = (id) => dispatch => {
  axios.get(`/empleos/empleo/${id}`)
    .then(res => {
      dispatch({
        type: EMPLEO_UNICO,
        payload: res.data
      })
    })
}
