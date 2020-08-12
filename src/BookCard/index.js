import React from 'react';

import SubscribeModal from './SubscribeModal';
import Authors from '../Authors/index';
import RecommendationList from './RecommendationList';
import withLoading from '../HOC/withLoading';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSubscription = this.toggleSubscription.bind(this);
    this.isPopular = this.isPopular.bind(this);
    this.amountInputRef = React.createRef();
    this.state = {
      isSubscribed: false,
      raiting: this.props.book && this.props.book.raiting
    };
  }

  toggleSubscription() {
    this.setState((prevState, props) => (
      {
        isSubscribed: !prevState.isSubscribed,
        raiting: prevState.isSubscribed ? prevState.raiting - 1 : prevState.raiting + 1
      }
    ), alert(this.state.isSubscribed ? 'Вы отписаны' : 'Вы подписаны'));
  }

  isPopular(currentRaiting) {
    return currentRaiting >= 10
  }

  render() {
    const book = this.props.book;
    const currentRaiting = this.state.raiting;
    const popularBadge = this.isPopular(currentRaiting) && '(Популярная книга)';
    return (
      book == null
      ? null
      :
        <div style={styles.container}>
          <div style={styles.row}>
            <div style={styles.half}>
              <a href={book.cover}>
                <img src={book.cover} style={styles.picture}/>
              </a>
            </div>
            <div style={styles.half}>
              <h2 style={styles.title}>{book.title}</h2>
              <div style={styles.pageCount}>Кол-во страниц: {book.pageCount}</div>
              <div style={styles.shortDescription}>{book.shortDescription}</div>
              <div style={styles.language}>Язык: {book.language}</div>
              <div style={styles.progress}>Прогресс: {book.progress}%</div>
              <div>Минимальная цена подписки: ${book.minimumPrice}</div>
              <div>Желаемая цена подписки: ${book.desiredPrice}</div>
              <div>Уже собрано: ${book.collectedAmount}</div>
              <div>Ожидается собрать: ${book.expectedAmount}</div>
              <div>Рейтинг: {currentRaiting} {popularBadge}</div>
              <SubscribeModal isSubscribed = {this.state.isSubscribed}
                              onSuccess = {this.toggleSubscription}/>
            </div>
            <div style={styles.recommendations}>
              <RecommendationList recommendations={book.recommendations}/>
            </div>
          </div>
          <>
            <Authors authors={book.authors}/>
          </>
        </div>
    )
  }
}

export default withLoading(Book);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '3em 0'
  },
  picture: {
    margin: '0 1em'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto'
  },
  recommendations: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3em'
  }
}
