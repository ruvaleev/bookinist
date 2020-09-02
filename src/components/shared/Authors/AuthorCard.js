import React from 'react';

const AuthorCard = ({ author }) => (
  <div style={styles.container}>
    <div style={styles.authorContainer}>
      <div style={styles.half}>
        <a href={author.avatar}>
            <img src={author.avatar} style={styles.picture}/>
        </a>
      </div>
      <div style={styles.half}>
        <div>
          <div>{author.name}</div>
          <div>email: {author.email}</div>
          <div>{author.shortInformation}</div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthorCard;

const styles = {
  container: {
    display: 'flex',
    margin: '3em 0',
    minWidth: '30%'
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
