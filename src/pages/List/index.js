import React, {useEffect} from 'react';
/*
  React-Redux provee "el HOC connect" para conectar las bibliotecas: React y Redux sobre componentes de clase
    pero además, desde la v7.0.1 (Jun'2019), también ofrece compatibilidad con los Hooks de React JS pudiendo
    reemplazar el HOC connect por los hooks useDispatch y useSelector
*/
import {useDispatch, useSelector} from 'react-redux';
import * as PropTypes from 'prop-types';
import queryString from 'querystring';
import {CircularProgress, Typography} from '@material-ui/core';

import {searchCrypto} from '../../redux/actions/search';
import {isSearchLoading, cryptosData} from '../../redux/selectors';
import Item from '../../components/Item';

import './style.css';

//  El nombre de la función no importa porque es una export por default
const List = ({location}) => {
  /*
    useDispatch hace referencia al dispatch usado para disparar acciones del store de Redux, se puede decir que sustituye
      el dispatch del store de Redux, útil para disparar acciones escuchadas por las sagas, para llamar a las API,
      y luego gracias al reducer recuperar la información usando useSelector (también de react-redux)

      Se instancia con una simple instrucción const dispatch = useDispatch()
  */
  const dispatch = useDispatch();
  // console.log(dispatch);

  /*
    useSelector permite extraer información del state actual del store de Redux sustituyendo mapStateToProps (1º
      argumento de connect). El selector es llamado cada vez que el Hook es actualizado.
    Se debe tener presente que:
      1. Cuando una acción es disparada por el dispatch, useSelector compara el valor anterior con el siguiente,
        si son diferentes fuerza una re-renderización
      2. Si se utiliza memoizing, no debe obviarse que reselect o createSelector manejan su propio estado interno
      3. useSelector para sus validaciones pre re-renderización utiliza el operador '==='
  */
  const isLoading = useSelector(state => isSearchLoading(state));
  const cryptos = useSelector(state => cryptosData(state));
  // console.log(isLoading, cryptos);

  /*
    useEffect: Es el hook de React.Js que permite llevar a cabo efectos secundarios o colaterales en componentes
      funcionales. Equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.

      Al usar este hook, decimos a React.Js que el componente debe hacer algo después de renderizarse.

      Si el parámetro dependencies de useEffect
        1- Enumera propiedades/variables del estado, por ej. [waiting], se le está diciendo a React cuales
            propiedades/variables se tendrán en cuenta para disparar una nueva renderización.
            Actúa como componentDidMount y, componentDidUpdate tras haberse modificado esas propiedades/variables
        2- Es un array vacío, o sea [], useEffect actúa como componentDidMount, solo se ejecuta en la 1ª renderización
        3- No aparece, es decir se omite el array, useEffect se ejecuta en cada modificación de cualquiera de las
            propiedades/variables del estado o re-renderización, actuando como componentDidMount y componentDidUpdate (NO
            recomendado)

      Si en ussEffect se codifica un return, éste debe devolver una función, la cual se ejecutaría antes de una nueva
        renderización, que equivaldria a componentWillUnmount.
  */
  useEffect(() => {
    const {symbolList} = queryString.parse(location.search.replace('?', ''));
    // console.log('Results, props.location.search:', symbolList);

    if (symbolList && !cryptos) {
      // dispatch al store un objeto plano action igual a {type, payload}, que fué devuelto por searchCrypto
      dispatch(searchCrypto({symbolList}));
    }
  });

  const renderList = () => {
    // console.log(cryptos);
    return cryptos
      ? <div>
          <Typography className='centerAlign' component='h3' variant='h3' gutterBottom>Criptomonedas</Typography>
          <div className='cryptoList'>
            { cryptos.map((value, index) => <Item key={index} {...value}/>) }
          </div>
        </div>
      : isLoading
        ? <div className='centerAlign'><CircularProgress size={100} color='primary'/></div>
        : <Typography className='centerAlign' component='h3' variant='h3'>Criptomonedas</Typography>
  };

  return (
    <div>
      {renderList()}
    </div>
  )
};

List.propTypes = {
  location: PropTypes.object.isRequired,
};

export default List;