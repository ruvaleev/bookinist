import React from 'react';

import SubscribeModal from './SubscribeModal';
import Authors from './Authors';
const childRef = React.createRef();

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSubscription = this.toggleSubscription.bind(this);
    this.state = {
      isSubscribed: false,
      raiting: this.props.book.raiting,
      isPopular: this.props.book.raiting >= 10
    };
  }
  
  toggleSubscription() {
    this.setState((prevState, props) => (
      {
        isSubscribed: !prevState.isSubscribed,
        raiting: prevState.isSubscribed ? prevState.raiting - 1 : prevState.raiting + 1,
        isPopular: (prevState.isSubscribed && prevState.raiting > 10) || (!prevState.isSubscribed && prevState.raiting > 8)
      }
    ), this.closeModalwithMessage(this.state.isSubscribed ? 'Вы отписаны' : 'Вы подписаны'));
  }

  closeModalwithMessage(message) {
    childRef.current.closeModal();
    alert(message);
  }

  render() {
    const { 
      book: { title, shortDescription, pageCount, language, progress, cover, minimumPrice,
              desiredPrice, collectedAmount, expectedAmount, raiting, authors }
    } = this.props;
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
            <SubscribeModal isSubscribed = {this.state.isSubscribed}
                            toggleSubscription = {this.toggleSubscription}
                            ref={childRef}/>
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
