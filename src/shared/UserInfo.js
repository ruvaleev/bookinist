import React, { useContext } from 'react';
import AuthContext from '../AuthContext';

const UserInfo = () => {
  const currentUser = useContext(AuthContext);

  return (
  <div style={styles.container}>
    {currentUser.firstName} {currentUser.lastName}
    <img src={currentUser.avatarUrl} style={styles.avatar}/>
  </div>
  )
}

export default UserInfo;

const styles = {
  container: {
    display: 'flex',
    position: 'fixed',
    right: '0',
    top: '0',
    height: '3em',
    alignItems: 'center',
    fontWeight: 'normal'
  },
  avatar: {
    margin: '0 1em',
    height: '3em'
  }
}
