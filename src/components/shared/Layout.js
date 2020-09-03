import React from 'react';

import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header title='Bookinist'/>
        <main style={styles.main}>{this.props.children}</main>
        <footer style={styles.footer}>Bookinist&copy; {new Date().getFullYear()}</footer>
      </>
    )
  }
}

export default Layout;

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
  main: {
    marginTop: '3em'
  }
}
