import React from 'react';

import Book from './BookCard';

class AuthorCard extends React.Component {
  render() {
    const { 
      author: { Name, Email, Avatar, ShortInformation, MinimumPrice, DesiredPrice,
        CollectedAmount, ExpectedAmount, Books }
      } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.authorContainer}>
          <div style={styles.half}>
            <a href={Avatar}>
                <img src={Avatar} style={styles.picture}/>
            </a>
          </div>
          <div style={styles.half}>
            <div>
              <div>{Name}</div>
              <div>Email: {Email}</div>
              <div>{ShortInformation}</div>
              <div>Минимальная цена подписки: ${MinimumPrice}</div>
              <div>Желаемая цена подписки: ${DesiredPrice}</div>
              <div>Уже собрано: ${CollectedAmount}</div>
              <div>Ожидается собрать: ${ExpectedAmount}</div>
            </div>
          </div>
        </div>
        <div style={styles.booksContainer}>
          {Books.map((book, i) => {
                return (
                  <div>
                    <Book book={book} />
                  </div>
                )
              })}
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
  booksContainer: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column'
  },
  picture: {
    margin: '0 1em'
  }
}