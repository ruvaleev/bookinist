import React from 'react';

import BookCard from './BookCard';
import FeedbackForm from './FeedbackForm';
import Header from './Header';
import AuthContext from './AuthContext';

class App extends React.Component {
  render() {
    return (
      <AuthContext.Provider value={this.props.currentUser}>
        <Header title='Bookinist'/>

        <BookCard book={this.props.book} />
        
        <FeedbackForm/>
        <footer style={styles.footer}>Bookinist&copy; {new Date().getFullYear()}</footer>
      </AuthContext.Provider>
    );
  };
}

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
  }
}
