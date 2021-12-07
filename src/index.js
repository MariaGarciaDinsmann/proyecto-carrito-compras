import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import services from './services/services'


services.inicializar();


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


