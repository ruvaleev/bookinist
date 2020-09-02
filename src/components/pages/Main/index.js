import React from 'react';

import Book from '../../shared/BookCard/index';
import Layout from '../../shared/Layout';
import useFetchBook from '../../hooks/useFetchBook';

const FetchedBook = (bookId) => {
  const fetchedBook = useFetchBook('reckmfqNyptO7JXGt');
  return (
    <Book isLoading={!fetchedBook} book={fetchedBook}/>
  )
} 

const Main = () => (
  <Layout>
    <div style={styles.book}><FetchedBook bookId='reckmfqNyptO7JXGt'/></div>
  </Layout>
)

export default Main;

const styles = {
  book: {
    marginTop: '4em'
  }
}
