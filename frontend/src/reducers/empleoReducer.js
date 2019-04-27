import { LISTAR_EMPLEOS, NUEVO_EMPLEO,EMPLEO_UNICO, TIPO_FILTRO  } from '../actions/types';

const initialState = {
    listadoEmpleo: [],
    empleoUnico: {},
    current: 1,
    pages: 0,
    totalPages: 0,
    filtro: '.*'
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case LISTAR_EMPLEOS:
            return {
                ...state,
                listadoEmpleo: [...state.listadoEmpleo, ...action.payload.empleos]  ,
                current: action.payload.current,
                pages: action.payload.pages,
                totalPages: action.payload.total,



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
        case TIPO_FILTRO:
                return{
                  ...state,
                  listadoEmpleo: [],
                  current: 1,
                  pages: 0,
                  totalPages: 0,
                  filtro: action.payload
                }

        default:
            return state;
    }
}
