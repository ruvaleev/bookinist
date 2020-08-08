import React from 'react';

const UserInfo = ({ currentUser }) => (
  <div style={styles.container}>
    {currentUser.firstName} {currentUser.lastName}
    <img src={currentUser.avatarUrl} style={styles.avatar}/>
  </div>
)

export default UserInfo;

UserInfo.defaultProps = {
  currentUser: {
    avatarUrl: 'https://img-21.ccm2.net/QMsKLPIdP5esOtbLxq_krAnWp8Y=/340x/e325f75c9f244df5b50acf12285062e1/ccm-faq/incognito-2231825_640.png',
    firstName: 'Авторизуйтесь',
    lastName: 'пжлста',
    email: ''
  }
}

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
