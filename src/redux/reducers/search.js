import {
  SEARCH_CRYPTOCURRENCY_START,
  SEARCH_CRYPTOCURRENCY_SUCCEEDED,
  SEARCH_CRYPTOCURRENCY_FAILED,
  SEARCH_CRYPTOCURRENCY_BY_ID_START,
  SEARCH_CRYPTOCURRENCY_BY_ID_SUCCEEDED,
  SEARCH_CRYPTOCURRENCY_BY_ID_FAILED
} from '../../constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CRYPTOCURRENCY_START:
      // isLoading se establece a TRUE como indicador de que se está se está cargando data o esperando respuesta del servidor
      return {...state, isLoading: true};
    case SEARCH_CRYPTOCURRENCY_SUCCEEDED:
      // console.log(action.payload.data);
      // isLoading se establece a FALSE tras respuesta exitosa al request enviado al servidor
      return {...state, isLoading: false, cryptos: action.payload.data};
    case SEARCH_CRYPTOCURRENCY_FAILED:
      // isLoading se establece a FALSE tras respuesta errónea al request enviado al servidor
      return {...state, isLoading: false, cryptos: null};
    case SEARCH_CRYPTOCURRENCY_BY_ID_START:
      // isLoading se establece a TRUE como indicador de que se está se está cargando data o esperando respuesta del servidor
      return {...state, isLoading: true};
    case SEARCH_CRYPTOCURRENCY_BY_ID_SUCCEEDED:
      // console.log(action.payload.data[0]);
      // isLoading se establece a FALSE tras respuesta exitosa al request enviado al servidor
      return {...state, isLoading: false, crypto: action.payload.data[0]};
    case SEARCH_CRYPTOCURRENCY_BY_ID_FAILED:
      // isLoading se establece a FALSE tras respuesta errónea al request enviado al servidor
      return {...state, isLoading: false, crypto: null};
    default:
      return {...state};
  }
}
