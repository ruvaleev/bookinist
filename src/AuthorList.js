import React from  'react';

import AuthorCard from './AuthorCard';

class AuthorList extends React.Component {
  render() {
    const authors = this.props.authors

    return (
      authors.map((author, i) => (
        <AuthorCard key={author.id} author={author} />
      ))
    );
  }
}

export default AuthorList;
