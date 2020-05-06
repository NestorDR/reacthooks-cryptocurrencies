/*
  Es una buena práctica mantener el mínimo state del Redux Store, y obtener datos del state según sea necesario.
  Los selectores ayudan con eso. Pueden calcular datos derivados, permitiendo almacenar el mínimo state posible.

  Además permiten hacer más legible el código del proyecto, cualquier cambio en las respuestas json de las API's
   quedaría encapsulado en este script

  Se usa get de lodash para recuperar las propiedades del estado porque si no existiera la propiedad no regresaría
    undefined sino un null, siendo es menos agresivo para la aplicación.
  Se podría usar solo ES6, por ej. vía state => state.search.isLoading, a riesgo de recibir undefined
*/
import {get} from 'lodash';

// Recuerda usa state.search porque search.js es el nombre del script reducer donde se crearon
//  (isLoading, cryptos y crypto) en el state
export const isSearchLoading = state => get(state, 'search.isLoading');

// search.cryptos es como se llama en el reducer la lista de criptomonedas
export const cryptosData = state => get(state, 'search.cryptos');

export const cryptoData = state => {
  // search.crypto es como se llama en el reducer la criptomoneda cuyo detalle se solicitó
  const crypto = get(state, 'search.crypto');

  // A partir de este punto se obtinen datos derivados, permitiendo almacenar el mínimo state posible.
  if (crypto) {
    // search.cryptos es como se llama en el reducer la lista de criptomonedas
    let cryptos = state.search.cryptos || [];
    cryptos = cryptos.filter(c => c.id === crypto.id);

    // Agregar la descripción que ya estaba guardada en el estado
    crypto.description = cryptos.length > 0 ? cryptos[0].description : 'No disponible';
  }

  return crypto;
};