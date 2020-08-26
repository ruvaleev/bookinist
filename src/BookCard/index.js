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
      <BookContainer>
        <BookRow>
          <BookCover cover={book.cover}/>
          <BookInfo>
            <BookTitle>{book.title}</BookTitle>
            <BookPageCount>Кол-во страниц: {book.pageCount}</BookPageCount>
            <BookShortDescription>{book.shortDescription}</BookShortDescription>
            <BookLanguage>Язык: {book.language}</BookLanguage>
            <BookProgress>Прогресс: {book.progress}%</BookProgress>
            <BookMinimumPrice>Минимальная цена подписки: ${book.minimumPrice}</BookMinimumPrice>
            <BookDesiredPrice>Желаемая цена подписки: ${book.desiredPrice}</BookDesiredPrice>
            <BookCollectedAmount>Уже собрано: ${book.collectedAmount}</BookCollectedAmount>
            <BookExpectedAmount>Ожидается собрать: ${book.expectedAmount}</BookExpectedAmount>
            <BookCurrentRaiting>Рейтинг: {currentRaiting} {popularBadge}</BookCurrentRaiting>
            <SubscribeModal isSubscribed = {this.state.isSubscribed}
                            onSuccess = {this.toggleSubscription}/>
          </BookInfo>
          <BookRecommendations>
            <RecommendationList recommendations={book.recommendations}/>
          </BookRecommendations>
        </BookRow>
        <AuthorsRow><Authors authors={book.authors}/></AuthorsRow>
      </BookContainer>
    )
  }
}

export default withLoading(Book);

const BookContainer = ({ children }) => (
  <div style={styles.container}>{children}</div>
);
const BookRow = ({ children }) => (
  <div style={styles.row}>{children}</div>
);
const BookCover = ({ cover }) => (
  <div style={styles.half}>
    <a href={cover}>
      <img src={cover} style={styles.picture}/>
    </a>
  </div>
);
const BookInfo = ({ children }) => (
  <div style={styles.half}>{children}</div>
);
const BookTitle = ({ children }) => (
  <h2 style={styles.title}>{children}</h2>
);
const BookPageCount = ({ children }) => (
  <div style={styles.pageCount}>{children}</div>
);
const BookShortDescription = ({ children }) => (
  <div style={styles.shortDescription}>{children}</div>
);
const BookLanguage = ({ children }) => (
  <div style={styles.language}>{children}</div>
);
const BookProgress = ({ children }) => (
  <div style={styles.progress}>{children}</div>
);
const BookMinimumPrice = ({ children }) => (
  <div>{children}</div>
);
const BookDesiredPrice = ({ children }) => (
  <div>{children}</div>
);
const BookCollectedAmount = ({ children }) => (
  <div>{children}</div>
);
const BookExpectedAmount = ({ children }) => (
  <div>{children}</div>
);
const BookCurrentRaiting = ({ children }) => (
  <div>{children}</div>
);
const BookRecommendations = ({ children }) => (
  <div style={styles.recommendations}>{children}</div>
);
const AuthorsRow = ({ children }) => (
  <>{children}</>
);
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
