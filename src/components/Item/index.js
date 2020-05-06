// rfcp→ o rsfp→
import React from 'react';
/*
  Con 'HOC withRouter' se podrá envolver al componente y tener acceso a la prop history,
    caseo contrario no se tendría porque el componente no es directamente dependiente de un <route>
*/
import {withRouter} from 'react-router-dom';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import * as PropTypes from 'prop-types';

import './style.css';

const Item = ({id, name, description, logo_url, history}) => {
  const handleSeeMoreClick = () => {
    // Navegar a la url de detalle del item
    history.push(`/detail/${id}`)
  };

  return (
    <Card className='mainCard'>
      <CardActionArea>
        <Grid className='cardMediaRoot'>
          <CardMedia className='cardMediaImage'
            image={logo_url}
            title={name} />
        </Grid>
        <CardContent>
          <Typography gutterBottom component='h2' variant='h5' >
            {name}
          </Typography>
          <Typography color='textSecondary' component='p' variant='body1' >
            {id}
          </Typography>
          <Typography className='descriptionText' color='textSecondary' component='p' variant='body2'>
            {description}
          </Typography>
        </CardContent>
        {/*<Typography>{description}</Typography>*/}
      </CardActionArea>
      <CardActions>
        <Button color='primary' onClick={handleSeeMoreClick} variant='contained' size="small" >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  logo_url: PropTypes.string,
  history: PropTypes.object
};

export default withRouter(Item);
