import React from 'react';

import UserInfo from './UserInfo';
import AuthContext from './AuthContext';

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        {this.props.title}
        <UserInfo currentUser={this.context}/>
      </header>
    )
  }
}

Header.contextType = AuthContext;

export default Header;

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
  }
}
