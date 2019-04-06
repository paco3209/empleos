import axios from 'axios';
import { LISTAR_EMPLEOS, NUEVO_EMPLEO,EMPLEO_UNICO  } from './types';




export const listadoEmpleos = () => dispatch =>{
  axios.get('/empleos')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LISTAR_EMPLEOS,
        payload: res.data
      })
    })
}

export const nuevoEmpleo = (noticia) => dispatch => {

  axios.post('/empleos/nuevoEmpleo', noticia)
    .then(res => {dispatch ({
      type: NUEVO_EMPLEO,
      payload: res.data
    })})
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
