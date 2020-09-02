import React from 'react';

import FeedbackForm from './components/shared/FeedbackForm';
import AuthContext from './AuthContext';
import Main from './components/pages/Main/index';

const App = (props) => (
  <AuthContext.Provider value={props.currentUser || defaultUser}>
    <Main/>
    <FeedbackForm/>
  </AuthContext.Provider>
);

export default App;

const defaultUser = {
  avatarUrl: 'https://img-21.ccm2.net/QMsKLPIdP5esOtbLxq_krAnWp8Y=/340x/e325f75c9f244df5b50acf12285062e1/ccm-faq/incognito-2231825_640.png',
  firstName: 'Авторизуйтесь',
  lastName: 'пжлста',
  email: ''
}
