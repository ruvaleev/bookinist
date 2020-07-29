import React from 'react';

import BookCard from './BookCard';

class App extends React.Component {
  render() {
    return (
      <>
        <BookCard book={this.props.book} />
      </>
    );
  };
}

export default App;