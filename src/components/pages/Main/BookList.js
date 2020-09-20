import React from 'react';

import { Link } from 'react-router-dom';
import withLoading from '../../HOC/withLoading';

const BookList = ({bookList}) => (
  bookList
  &&
    bookList.map((book, i) => (
      <LinkToBook key={book.id} bookId={book.id} title={book.fields.title}/>
    ))
);

const LinkToBook = ({bookId, title}) => (
  <div>
    <Link to={`/book/${bookId}`}>{title}</Link>
  </div>
);

export default withLoading(BookList);
