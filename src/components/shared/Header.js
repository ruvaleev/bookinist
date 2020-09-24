import React from 'react';

import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { rootPath } from 'helpers/routes';

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <Link to={rootPath()}>{this.props.title}</Link>
        <UserInfo/>
      </header>
    )
  }
}

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
