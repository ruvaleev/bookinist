import React from 'react';

import Button from './Button';
import AuthorList from './AuthorList';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSubscription = this.toggleSubscription.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      isSubscribed: false,
      raiting: this.props.book.raiting,
      isPopular: this.props.book.raiting >= 10
    };
  }
  
  toggleSubscription() {
    this.setState({isSubscribed: !this.state.isSubscribed});
    if (this.state.isSubscribed) {
      alert('Вы отписаны');
      this.state.raiting -= 1;
    } else {
      alert('Вы подписаны');
      this.state.raiting += 1;
    }
    this.closeModal();
    this.setState({isPopular: this.state.raiting >= 10});
  }

  closeModal() {
    document.getElementById('modalContainer').style.display = 'none';
  }

  openModal() {
    document.getElementById('modalContainer').style.display = '';
  }

  render() {
    const { 
      book: { title, shortDescription, pageCount, language, progress, cover, minimumPrice, desiredPrice,
        collectedAmount, expectedAmount, raiting, authors } 
    } = this.props;
    const buttonTitle = this.state.isSubscribed ? 'Отписаться' : 'Подписаться';
    const modalBody = this.state.isSubscribed ? 'Вы уверены, что хотите отписаться?' : 'Переведете нам больше денег - книга выйдет быстрее!'
    const subscriptionButton = { 
      buttonOnClick: this.toggleSubscription,
      title: buttonTitle
    };
    const openModalButton = { 
      buttonOnClick: this.openModal,
      title: buttonTitle
    };
    const closeModalButton = { 
      buttonOnClick: this.closeModal,
      title: 'Закрыть'
    };
    const currentRaiting = this.state.raiting;
    const popularBadge = this.state.isPopular ? '(Популярная книга)' : '';

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
            {<Button button={openModalButton}/>}
          </div>
        </div>
        <>
          <AuthorList authors={authors}/>
        </>
        <div id='modalContainer' data-testid='modalContainer' style={styles.modalContainer}>
          <div style={styles.modalBody}>
            {modalBody}
            {<Button button={subscriptionButton}/>}
            {<Button button={closeModalButton}/>}
          </div>
        </div>
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
  },
  modalContainer: {
    backgroundColor: '#00000080',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'none'
  },
  modalBody: {
    position: 'fixed',
    top: '40%',
    left: '30%',
    width: '40%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}
