import React from 'react';

import AuthorCard from './AuthorCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthorCard author={this.props.author} />
      </div>
    );
  };
}

export default App;