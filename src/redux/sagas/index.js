/*
  redux-saga es una biblioteca que se encarga de los efectos secundarios o colaterales de la aplicación, por ejemplo
    - obtención asincrónica de datos
    - accesos al caché del navegador
  para que sean más fáciles de administrar, eficientes de ejecutar, fáciles de testear y manejar errores.

  Visitar
    https://redux-saga.js.org/
    https://www.paradigmadigital.com/dev/sagas-vs-thunk/
*/
import { all } from 'redux-saga/effects';
import search from './search';

export default function* rootSaga() {
  // Desde yield all se ejecutan todos los watchers
  yield all([
    search()
  ]);
}
