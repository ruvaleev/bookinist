import React from 'react';

class AuthorCard extends React.Component {
  render() {
    const { 
      author: { id, name, email, avatar, shortInformation }
      } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.authorContainer}>
          <div style={styles.half}>
            <a href={avatar}>
                <img src={avatar} style={styles.picture}/>
            </a>
          </div>
          <div style={styles.half}>
            <div>
              <div>{name}</div>
              <div>email: {email}</div>
              <div>{shortInformation}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default AuthorCard;

const styles = {
  container: {
    display: 'flex',
  },
  authorContainer: {
    display: 'flex',
    width: '50%'
  },
  picture: {
    margin: '0 1em',
    maxWidth: '10em'
  }
}