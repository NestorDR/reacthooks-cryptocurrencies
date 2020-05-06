// Importar redux store
import { createStore, applyMiddleware } from 'redux';
// Para ejecutar nuestra Saga, se debe que conectar al Store de Redux usando el middleware redux-saga.
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
	// Crear el saga middleware
	const sagaMiddleware = createSagaMiddleware();
	return {
		// Montarlo en el store
		...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
		// Iniciar saga
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;
