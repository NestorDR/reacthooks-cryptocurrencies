import {SEARCH_CRYPTOCURRENCY_START, SEARCH_CRYPTOCURRENCY_BY_ID_START} from '../../constants';

export const searchCrypto = payload => ({
  type: SEARCH_CRYPTOCURRENCY_START,
  payload
});

export const searchCryptoById = payload => ({
  type: SEARCH_CRYPTOCURRENCY_BY_ID_START,
  payload
});