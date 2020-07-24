import React from 'react';

import Button from './Button';

const button = {
  'initialState': 'Подписаться',
  'resultState': 'Отписаться',
  'initialAlert': 'Вы подписаны',
  'resultAlert': 'Вы отписаны'
}

class Book extends React.Component {
  render() {
    const { 
      book: { Title, ShortDescription, PageCount, Language, Progress, Cover } 
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.half}>
          <a href={Cover}>
            <img src={Cover} style={styles.picture}/>
          </a>
        </div>
        <div style={styles.half}>
          <h2 style={styles.title}>{Title}</h2>
          <div style={styles.pageCount}>Кол-во страниц: {PageCount}</div>
          <div style={styles.ShortDescription}>{ShortDescription}</div>
          <div style={styles.Language}>Язык: {Language}</div>
          <div style={styles.Progress}>Прогресс: {Progress}%</div>
          <Button button={button} />
        </div>
      </div>
    )
  }
}

export default Book;

const styles = {
  container: {
    display: 'flex'
  },
  picture: {
    margin: '0 1em'
  }
}