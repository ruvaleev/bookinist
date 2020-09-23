import React from 'react';

import Layout from '../../shared/Layout';
import { Link } from 'react-router-dom';
import { rootPath } from 'helpers/routes';

const NotFound = () => {
  return (
    <Layout>
      'Wrong turn, kid...'
      <Link to={rootPath}>Get back</Link>
    </Layout>
  )
} 

export default NotFound;
