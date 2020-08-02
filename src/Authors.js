import React from  'react';

import AuthorList from './AuthorList';
import Button from './Button';
// import arrow from 'url:./images/arrow.png';

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
    const title = isRolledUp ? `Показать всех ${authors.length} авторов` : 'Свернуть';
    const styles = {
      authorsRow: (isRolledUp) ? {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'hidden'
      } : {
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

    return (
      <div id='authorsRow' data-testid='authorsRow' style={styles.authorsRow}>
        <AuthorList authors={authors} />
        {authors.length > 3 && <Button containerOnClick={this.toggleRoll} title={title} style={ { container: styles.buttonContainer } }/>}
      </div>
    );
  }
}

export default Authors;
