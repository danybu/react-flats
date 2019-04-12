import React from 'react';
import ReactDOM from 'react-dom';
import FlatsApp from './components/flats_app';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<FlatsApp />, root);
}
