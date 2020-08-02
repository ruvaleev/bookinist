import React from 'react';

import Button from './Button';
import ModalWindow from './ModalWindow';
import Authors from './Authors';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSubscription = this.toggleSubscription.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      isSubscribed: false,
      raiting: this.props.book.raiting,
      isPopular: this.props.book.raiting >= 10
    };
  }
  
  toggleSubscription() {
    this.setState({isSubscribed: !this.state.isSubscribed});
    let message;
    if (this.state.isSubscribed) {
      message = 'Вы отписаны';
      this.state.raiting -= 1;
    } else {
      message = 'Вы подписаны';
      this.state.raiting += 1;
    }
    this.setState({isPopular: this.state.raiting >= 10});
    this.closeModal();
    alert(message)
  }

  closeModal() {
    document.getElementById('subscriptionModal').style.display = 'none';
  }

  render() {
    const { 
      book: { title, shortDescription, pageCount, language, progress, cover, minimumPrice, desiredPrice,
        collectedAmount, expectedAmount, raiting, authors } 
    } = this.props;
    const modalBody = this.state.isSubscribed ? 'Вы уверены, что хотите отписаться?' : 'Переведете нам больше денег - книга выйдет быстрее!'
    const currentRaiting = this.state.raiting;
    const popularBadge = this.state.isPopular && '(Популярная книга)';

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
            <div>Рейтинг: {currentRaiting} {popularBadge}</div>
            <ModalWindow id='subscriptionModal' openWindowButtonTitle={this.state.isSubscribed ? 'Отписаться' : 'Подписаться'}>
              {modalBody}
              <Button buttonOnClick={this.toggleSubscription} title={this.state.isSubscribed ? 'Отписаться' : 'Подписаться'}/>
            </ModalWindow>
          </div>
        </div>
        <>
          <Authors authors={authors}/>
        </>
      </div>
    )
  }
}

export default Book;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2em 0'
  },
  picture: {
    margin: '0 1em'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto'
  }
}
