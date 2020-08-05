import React from  'react';

import AuthorCard from './AuthorCard';

const AuthorList = (props) => (
  props.children.map((author, i) => (
    <AuthorCard key={author.id} author={author} />
  ))
);

export default AuthorList;
