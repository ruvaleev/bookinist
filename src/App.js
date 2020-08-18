import React from 'react';

import FeedbackForm from './shared/FeedbackForm';
import Header from './shared/Header';
import AuthContext from './AuthContext';
import Book from './BookCard/index';
import useFetchBook from './hooks/useFetchBook';

const FetchedBook = (bookId) => {
  const fetchedBook = useFetchBook('reckmfqNyptO7JXGt');
  return (
    <Book isLoading={!fetchedBook} book={fetchedBook}/>
  )
}

const App = (props) => (
  <AuthContext.Provider value={props.currentUser || defaultUser}>
    <Header title='Bookinist'/>

    <div style={styles.book}><FetchedBook bookId='reckmfqNyptO7JXGt'/></div>

    <FeedbackForm/>
    <footer style={styles.footer}>Bookinist&copy; {new Date().getFullYear()}</footer>
  </AuthContext.Provider>
);

export default App;

const defaultUser = {
  avatarUrl: 'https://img-21.ccm2.net/QMsKLPIdP5esOtbLxq_krAnWp8Y=/340x/e325f75c9f244df5b50acf12285062e1/ccm-faq/incognito-2231825_640.png',
  firstName: 'Авторизуйтесь',
  lastName: 'пжлста',
  email: ''
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(121, 34, 145)',
    width: '100vw',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '3em',
    alignItems: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    bottom: '0',
    left: '0',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    backgroundColor: 'rgb(121, 34, 145)',
    fonfontFamily: 'Arial',
    color: 'white',
    fontSize: '0.7em'
  },
  book: {
    marginTop: '4em'
  }
}
