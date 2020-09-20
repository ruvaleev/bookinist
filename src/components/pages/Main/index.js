import React from 'react';

import { Helmet } from 'react-helmet';
import Layout from '../../shared/Layout';
import useFetchBook from '../../hooks/useFetchBook';
import BookList from './BookList';

const FetchedList = () => {
  const bookList = useFetchBook();
  return (
    <BookList isLoading={!bookList} bookList={bookList} />
  )
}

const Main = () => (
  <Layout>
    <Helmet>
      <title>Bookinist</title>
    </Helmet>
    <div style={styles.book}><FetchedList/></div>
  </Layout>
)

export default Main;

const styles = {
  book: {
    marginTop: '4em'
  }
}
