import React from 'react';

import Button from './Button';
import AuthorCard from './AuthorCard';

const button = {
  'initialState': 'Подписаться',
  'resultState': 'Отписаться',
  'initialAlert': 'Вы подписаны',
  'resultAlert': 'Вы отписаны'
}

class Book extends React.Component {
  render() {
    const { 
      book: { title, shortDescription, pageCount, language, progress, cover, minimumPrice, desiredPrice,
        collectedAmount, expectedAmount, authors } 
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.half}>
            <a href={cover}>
              <img src={cover} style={styles.picture}/>
            </a>
          </div>
          <div style={styles.half}>
            <h2 style={styles.title}>{title}</h2>
            <div style={styles.pageCount}>Кол-во страниц: {pageCount}</div>
            <div style={styles.shortDescription}>{shortDescription}</div>
            <div style={styles.language}>Язык: {language}</div>
            <div style={styles.progress}>Прогресс: {progress}%</div>
            <div>Минимальная цена подписки: ${minimumPrice}</div>
            <div>Желаемая цена подписки: ${desiredPrice}</div>
            <div>Уже собрано: ${collectedAmount}</div>
            <div>Ожидается собрать: ${expectedAmount}</div>
            <Button button={button} />
          </div>
        </div>
        <div style={styles.row}>
          {authors.map((author, i) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    )
  }
}

export default Book;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  picture: {
    margin: '0 1em'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}