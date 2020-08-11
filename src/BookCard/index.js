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
      raiting: this.props.book.raiting
    };
  }
  

  componentDidMount() {
    this.amountInputRef.current.focus();
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
    const { 
      book: { title, shortDescription, pageCount, language, progress, cover, minimumPrice,
              desiredPrice, collectedAmount, expectedAmount, raiting, authors, recommendations }
    } = this.props;
    const currentRaiting = this.state.raiting;
    const popularBadge = this.isPopular(currentRaiting) && '(Популярная книга)';

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
            <input ref={this.amountInputRef} type='text' name='amount' placeholder='Сколько готовы перечислить?'/>
            <SubscribeModal isSubscribed = {this.state.isSubscribed}
                            onSuccess = {this.toggleSubscription}/>
          </div>
          <div style={styles.recommendations}>
            <RecommendationList recommendations={recommendations}/>
          </div>
        </div>
        <>
          <Authors authors={authors}/>
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
