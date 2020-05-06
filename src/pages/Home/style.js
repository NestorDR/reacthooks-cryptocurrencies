/*
  makeStyles: Enlaza una hoja de estilos con un componente de función utilizando el patrón Hook.
  Visitar: https://material-ui.com/styles/api/#makestyles-styles-options-hook
*/
import {makeStyles} from '@material-ui/styles';

/*
  Aclaro que en la versión final no utilizaré este script de estilos, sino un CSS tradicional
*/

const centeredStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default makeStyles( {
  mainContainer: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObject
  },
  cardContainer: {
    flexDirection: 'column',
    height: 200,
    width: 400,
    padding: '2rem',
...centeredStyleObject
  },
  titleGridContainer: {
    ...centeredStyleObject
  },
  titleIcons: {
    fontSize: '4rem'
  },
  textFieldSearch: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  }
});