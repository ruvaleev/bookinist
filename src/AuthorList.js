import React from  'react';

import AuthorCard from './AuthorCard';
import Button from './Button';
// import arrow from 'url:./images/arrow.png';

class AuthorList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRoll = this.toggleRoll.bind(this);
    this.state = {isRolledUp: true};
  }
  
  toggleRoll() {
    this.setState({isRolledUp: !this.state.isRolledUp});
  }

  render() {
    const authors = this.props.authors
    const isRolledUp = this.state.isRolledUp;
    const title = isRolledUp ? `Показать всех ${authors.length} авторов` : 'Свернуть';
    const button = { 
      containerOnClick: this.toggleRoll,
      title: title,
      style: {
        container: styles.buttonContainer
      }
    }

    let toggleRolledUpButton;

    if (authors.length > 3) {
      toggleRolledUpButton = <Button button={button}/>;
    } else {
      toggleRolledUpButton = null;
    }

    return (
      <div id='authorsRow' data-testid='authorsRow' style={isRolledUp ? styles.authorsRowRolledUp : styles.authorsRowRolledOut}>
        {authors.map((author, i) => (
          <AuthorCard key={author.id} author={author} />
        ))}
        {toggleRolledUpButton}
      </div>
    );
  }
}

export default AuthorList;

const styles = {
  authorsRowRolledUp: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'hidden'
  },
  authorsRowRolledOut: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto'
  },
  arrow: {
    position: 'absolute',
    height: '5em',
    marginTop: '4em',
    right: '1em'
  },
  buttonContainer: {
    position: 'absolute',
    height: '10em',
    marginTop: '4em',
    right: '1em',
    backgroundColor: 'rgba(255, 255, 255, 0.89)',
    display: 'flex',
    minWidth: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
