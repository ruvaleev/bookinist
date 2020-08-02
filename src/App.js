import React from 'react';

import BookCard from './BookCard';
import FeedbackForm from './FeedbackForm';

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>Bookinist</header>

        <BookCard book={this.props.book} />
        
        <FeedbackForm/>
        <footer style={styles.footer}>Bookinist&copy; {new Date().getFullYear()}</footer>
      </>
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
    height: '2em',
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
