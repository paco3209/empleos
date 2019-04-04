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
        default:
            return state;
    }
}
