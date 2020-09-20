import React from 'react';

import Layout from '../../shared/Layout';
import useFetchBook from '../../hooks/useFetchBook';
import BookCard from '../../shared/BookCard/index';

const FetchedBook = ({ bookId }) => {
  const book = useFetchBook(bookId);
  return (
    <BookCard isLoading={!book} book={book} />
  )
}

const BookPage = ({ match: { params } }) => (
  <Layout>
    <div style={styles.book}><FetchedBook bookId = {params.id} /></div>
  </Layout>
)

export default BookPage;

const styles = {
  book: {
    marginTop: '4em'
  }
}
