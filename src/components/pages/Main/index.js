import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../../shared/Layout';
import useFetchBookList from '../../hooks/useFetchBookList';
import BookList from './BookList';
import { newBookPath } from 'helpers/routes';

const FetchedList = () => {
  const bookList = useFetchBookList();
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
    <Link to={newBookPath}>Новая книга</Link>
  </Layout>
)

export default Main;

const styles = {
  book: {
    marginTop: '4em'
  }
}
