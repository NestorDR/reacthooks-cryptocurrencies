// rfcp→ o rsfp→
import React, {useState} from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
/*
  // Importar SVG de un script que junta previamente los íconos. Pero no lo puedo redimensionar con CSS.
  import {EthIcon} from '../../icons';
  import {EthIcon} from '../../icons';
*/
// Importar un SVG como si fuera un componente
import {ReactComponent as BtcIcon} from '../../assets/btc-32px.svg';
import {ReactComponent as EthIcon} from '../../assets/eth-32px.svg';

/*
  Para enlazar una hoja de estilos con un componente de función utilizando el patrón Hook,
  al inicio se debiera importar el script js de estilos previamente codificado:
    import styles from './style';
  para luego invocarlo de esta manera
    const classes = styles();
  y usarlo del siguiente modo
    <Container className={classes.container}>
    <Card className={classes.cardContainer}>
    <Grid container className={classes.titleGridContainer}>
  permitiendo que makeStyles de @material-ui/styles hace su magia

  Visitar: https://material-ui.com/styles/api/#makestyles-styles-options-hook

  Yo usaré una hoja de estilos CSS tradicional
*/
import './style.css';

export default ({history}) => {
  // console.log('Home, props.history:', history)

  /*
    useState: Es el hook de React.Js que permite manejar estados dentro de un componente funcional.
      Sería el equivalente a this.state/state de un componente clase.
      Su uso devuelve un array donde la posición [0] es el valor de la variable, y la posición [1] es una función
        para actualizar el valor de la variable.
      Como parámetro de entrada recibe el valor inicial de la variable a almacenar en el estado.
  */
  const [searchList, setSearchList] = useState('');

  const handleSetSearchList = event => {
    // console.log(event.target.value);
    const newSearhLost = event.target.value.toString().replace(' ', '').toUpperCase();
    setSearchList(newSearhLost);
  };

  const handleClearListClick = () => {
    // console.log('handleClearListClick');
    setSearchList('');
  };

  const handleSearchListClick = () => {
    // console.log('handleSearchListClick', searchList);
    history.push(`/list?symbolList=${searchList}`);
  };

  return (
    // No uso container porque no logré sobre-escribir el display: block
    <div className='mainContainer'>
      <Card className='cardContainer'>
        <form className='cardContainer' onSubmit={handleSearchListClick}>

          <Grid container className='titleGridContainer'>
            <BtcIcon className='titleIcons' />
            <Typography variant='h4'>Bienvenido!</Typography>
            <EthIcon className='titleIcons' />
          </Grid>

          <TextField
            className='textFieldSearch'
            label='Ingrese lista a buscar, por ej BTC,ETH,XRP'
            onChange={handleSetSearchList}
            value={searchList}
          />

          <Grid className='buttonsContainer'>
            <Button type='button' disableElevation onClick={handleClearListClick} variant='contained' >Limpiar</Button>
            <span className='buttonMargin'/>
            <Button type='submit' color='primary' disableElevation variant='contained'>Buscar</Button>
          </Grid>

        </form>
      </Card>
    </div>
  );
};

