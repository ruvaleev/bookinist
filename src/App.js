import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FeedbackForm from './components/shared/FeedbackForm';
import AuthContext from './AuthContext';
import Main from './components/pages/Main/index';
import BookPage from './components/pages/Book/index';
import NotFound from './components/pages/NotFound/index';

const App = (props) => (
  <Router>
    <AuthContext.Provider value={props.currentUser || defaultUser}>
      <Switch>
        <Route component={Main} path='/' exact />
        <Route component={BookPage} path='/book/:id' strict exact />
        <Route component={NotFound} />
      </Switch>
      <FeedbackForm/>
    </AuthContext.Provider>
  </Router>
);

export default App;

const defaultUser = {
  avatarUrl: 'https://img-21.ccm2.net/QMsKLPIdP5esOtbLxq_krAnWp8Y=/340x/e325f75c9f244df5b50acf12285062e1/ccm-faq/incognito-2231825_640.png',
  firstName: 'Авторизуйтесь',
  lastName: 'пжлста',
  email: ''
}
