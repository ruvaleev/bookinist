import React from  'react';

import AuthorCard from './AuthorCard';

class AuthorList extends React.Component {
  render() {
    return (
      this.props.children.map((author, i) => (
        <AuthorCard key={author.id} author={author} />
      ))
    );
  }
}

export default AuthorList;
