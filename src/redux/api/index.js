import axios from 'axios';

import {API_KEY, BASE_URL} from '../../constants'

export const apiCall = (endPoint, urlSuffix, data, headers, method) => {
  const url = `${BASE_URL}/${endPoint}?${API_KEY}${urlSuffix}`;
  // console.log(url);

  return axios({
    method,
    url: url,
    data,
    headers
  });
};
