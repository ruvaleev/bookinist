import React from  'react';

import AuthorList from './AuthorList';
import Button from '../Button';

import './index.css';

class Authors extends React.Component {
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
    const authorsRowClass = (isRolledUp) ? 'rolledUpAuthorsRow' : 'rolledOutAuthorsRow'
    const styles = {
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

    return (
      <div id='authorsRow' data-testid='authorsRow' className={authorsRowClass}>
        <AuthorList>{authors}</AuthorList>
        {authors.length > 3 &&
          <Button containerOnClick={this.toggleRoll} style={ { container: styles.buttonContainer } }>
            {isRolledUp ? `Показать всех ${authors.length} авторов` : 'Свернуть'}
          </Button>}
      </div>
    );
  }
}

export default Authors;
