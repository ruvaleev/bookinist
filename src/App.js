import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import FeedbackForm from './components/shared/FeedbackForm';
import AuthContext from './AuthContext';
import Main from './components/pages/Main/index';
import BookPage from './components/pages/Book/index';
import NotFound from './components/pages/NotFound/index';
import NewBook from './components/pages/NewBook';
import { bookPath, rootPath, newBookPath } from 'helpers/routes';

const browserHistory = createBrowserHistory();

const App = (props) => {
  const history = props.history || browserHistory;

  return (
    <Router history={history}>
      <AuthContext.Provider value={props.currentUser || defaultUser}>
        <Switch>
          <Route component={Main} path={rootPath()} exact />
          <Route component={NewBook} path={newBookPath()} strict exact />
          <Route component={BookPage} path={bookPath()} strict exact />
          <Route component={NotFound} />
        </Switch>
        <FeedbackForm/>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

const defaultUser = {
  avatarUrl: 'https://img-21.ccm2.net/QMsKLPIdP5esOtbLxq_krAnWp8Y=/340x/e325f75c9f244df5b50acf12285062e1/ccm-faq/incognito-2231825_640.png',
  firstName: 'Авторизуйтесь',
  lastName: 'пжлста',
  email: ''
}
