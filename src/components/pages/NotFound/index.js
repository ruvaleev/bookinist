import React from 'react';

import Layout from '../../shared/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout>
      'Wrong turn, kid...'
      <Link to={'/'}>Get back</Link>
    </Layout>
  )
} 

export default NotFound;
