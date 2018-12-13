import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Portfolio from '../src/containers/Portfolio';

const app = (
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));

