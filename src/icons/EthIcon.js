import React from 'react';
import {SvgIcon} from '@material-ui/core';

/*
  El nombre de la función no importa porque es una export por default
*/
export default props => (
  // <<SvgIcon> permite renderizar un SVG dentro de React
  <SvgIcon {...props}>
    <path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/>
  </SvgIcon>
);