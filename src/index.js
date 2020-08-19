import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const currentUser = {
  email: 'president@google.com',
  firstName: 'Barak',
  lastName: 'Obama',
  avatarUrl: 'https://biografieonline.it/img/bio/box/b/Barack_Obama.jpg'
}

ReactDOM.render(
  <App currentUser={currentUser}/>,
  document.getElementById('book')
)
