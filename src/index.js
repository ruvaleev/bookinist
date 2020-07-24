import ReactDom from 'react-dom';
import React from 'react';

import App from './App';

ReactDom.render(
  <App author={author}/>,
  document.getElementById('book')
)
