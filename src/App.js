import React from 'react';

import FeedbackForm from './shared/FeedbackForm';
import Header from './shared/Header';
import AuthContext from './AuthContext';
import Book from './BookCard/index';
import getBook from './HOC/getBook';
const FetchedBook = getBook(Book, 'reckmfqNyptO7JXGt');

const App = (props) => (
  <AuthContext.Provider value={props.currentUser}>
    <Header title='Bookinist'/>

    <div style={styles.book}><FetchedBook/></div>
    
    <FeedbackForm/>
    <footer style={styles.footer}>Bookinist&copy; {new Date().getFullYear()}</footer>
  </AuthContext.Provider>
);

export default App;

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
