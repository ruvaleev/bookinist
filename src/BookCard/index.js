import React from 'react';

import SubscribeModal from './SubscribeModal';
import Authors from '../Authors/index';
import RecommendationList from './RecommendationList';
import withLoading from '../HOC/withLoading';

import './index.css';

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
      <Row className='container'>
        <Row className='row'>
          <Cover cover={book.cover}/>
          <Row className='half'>
            <Title>{book.title}</Title>
            <Row className='pageCount'>Кол-во страниц: {book.pageCount}</Row>
            <Row className='shortDescription'>{book.shortDescription}</Row>
            <Row className='language'>Язык: {book.language}</Row>
            <Row className='progress'>Прогресс: {book.progress}%</Row>
            <Row >Минимальная цена подписки: ${book.minimumPrice}</Row>
            <Row >Желаемая цена подписки: ${book.desiredPrice}</Row>
            <Row >Уже собрано: ${book.collectedAmount}</Row>
            <Row >Ожидается собрать: ${book.expectedAmount}</Row>
            <Row >Рейтинг: {currentRaiting} {popularBadge}</Row>
            <SubscribeModal isSubscribed = {this.state.isSubscribed}
                            onSuccess = {this.toggleSubscription}/>
          </Row>
          <Row className='recommendations'>
            <RecommendationList recommendations={book.recommendations}/>
          </Row>
        </Row>
        <AuthorsRow><Authors authors={book.authors}/></AuthorsRow>
      </Row>
    )
  }
}

export default withLoading(Book);

const Cover = ({ cover }) => (
  <div className='half'>
    <a href={cover}>
      <img src={cover} className='picture'/>
    </a>
  </div>
);
const Title = ({ children }) => (
  <h2 className='title'>{children}</h2>
);

const Row = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const AuthorsRow = ({ children }) => (
  <>{children}</>
);
