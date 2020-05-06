import { call, put, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_CRYPTOCURRENCY_START,
  SEARCH_CRYPTOCURRENCY_SUCCEEDED,
  SEARCH_CRYPTOCURRENCY_FAILED,
  SEARCH_CRYPTOCURRENCY_BY_ID_START,
  SEARCH_CRYPTOCURRENCY_BY_ID_SUCCEEDED,
  SEARCH_CRYPTOCURRENCY_BY_ID_FAILED
} from '../../constants';
import { apiCall } from '../api';

// Función generadora lleva el *
export function* searchCrypto({payload}) {
  try {
    // con call se creará un request llamando a la API con un método GET
    const result = yield call(apiCall, 'currencies', `&ids=${payload.symbolList}&attributes=id,name,logo_url,description`, null, null, 'GET');
    // console.log(result);

    // si la respuesta es exitosa, con put se lanzará la acción SEARCH_CRYPTOCURRENCY_SUCCEEDED
    yield put({type: SEARCH_CRYPTOCURRENCY_SUCCEEDED, payload: { data: result.data}});

  } catch (error) {

    // si la respuesta es errónea, con put se lanzará la acción SEARCH_CRYPTOCURRENCY_FAILED
    yield put({type: SEARCH_CRYPTOCURRENCY_FAILED, error});

  }
}


// Función generadora lleva el *
export function* searchCryptoById({payload}) {
  try {

    // con call se creará un request llamando a la API con un método GET
    const result = yield call(apiCall, 'currencies/ticker', `&ids=${payload.cryptoId}&interval=1d&convert=USD`, null, null, 'GET');
    // console.log(result);

    // si la respuesta es exitosa, con put se lanzará la acción SEARCH_CRYPTOCURRENCY_SUCCEEDED
    yield put({type: SEARCH_CRYPTOCURRENCY_BY_ID_SUCCEEDED, payload: { data: result.data}});

  } catch (error) {

    // si la respuesta es errónea, con put se lanzará la acción SEARCH_CRYPTOCURRENCY_FAILED
    yield put({type: SEARCH_CRYPTOCURRENCY_BY_ID_FAILED, error});

  }
}


/*
  Debajo se codifica el Watcher de Saga que se activará con acciones
    SEARCH_CRYPTOCURRENCY_START, o
    SEARCH_CRYPTOCURRENCY_BY_ID_START
  y desencadenará un API call vía función
    searchCrypto, o
    searchCryptoById
  respectivamente.

  El nombre de la función no importa porque es una export por default
*/
export default function* search() {
  /*
    Disparar la búsqueda de una película mediante saga.takeLatest que invoca a searchCrypto
    Usar el efecto de takeLatest NO permite búsquedas simultáneas.
    Si request es disparado/dispatched mientras un otro request está pendiente, ese request pendiente se cancela y solo se ejecutará el último.
  */
  yield takeLatest(SEARCH_CRYPTOCURRENCY_START, searchCrypto);
  yield takeLatest(SEARCH_CRYPTOCURRENCY_BY_ID_START, searchCryptoById);
}
