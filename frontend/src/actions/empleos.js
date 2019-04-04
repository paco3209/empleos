import axios from 'axios';
import { LISTAR_EMPLEOS, NUEVO_EMPLEO,EMPLEO_UNICO  } from './types';

export const listadoEmpleos = () => dispatch =>{
  axios.get('/empleos/')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LISTAR_EMPLEOS,
        payload: res.data
      })
    })
}

export const nuevaNoticia = (noticia) => dispatch => {
  console.log(noticia);
  axios.post('/empleos/', noticia)
    .then(res => dispatch ({
      type: NUEVO_EMPLEO,
      payload: res.data
    }))
}

export const buscarEmpleo = (id) => dispatch => {
  axios.get(`/api/users/cvu/${id}`)
    .then(res => {
      dispatch({
        type: EMPLEO_UNICO,
        payload: res.data
      })
    })
}
