import { LISTAR_EMPLEOS, NUEVO_EMPLEO,EMPLEO_UNICO  } from '../actions/types';

const initialState = {
    listadoEmpleo: [],
    empleoUnico: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case LISTAR_EMPLEOS:
            return {
                ...state,
                listadoEmpleo:action.payload

            }
        case NUEVO_EMPLEO:
              return{
                ...state,
                empleoUnico:action.payload
              }
        case EMPLEO_UNICO:
              return{
                ...state,
                empleoUnico:action.payload
              }
          break;
        default:
            return state;
    }
}
