import React from 'react';

import Button from './Button';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      isOpen: this.props.isOpen
    }
  }

  closeModal() {
    this.setState((prevState, props) => (
      { isOpen: false }
    ))
  }

  openModal() {
    this.setState((prevState, props) => (
      { isOpen: true }
    ));
  }

  render() {
    const { id, openWindowButtonTitle, children } = this.props;

    return (
      <>
        <Button buttonOnClick={this.openModal}>{openWindowButtonTitle}</Button>
        <div id={id} data-testid={id} style={{...styles.modalContainer, ...{ display: this.state.isOpen ? 'block' : 'none' }}}>
          <div style={styles.modalBody}>
            {React.cloneElement(children, {closeModal: this.closeModal})}
            <Button buttonOnClick={this.closeModal}>Закрыть</Button>
          </div>
        </div>
      </>
    )
  }
}

export default ModalWindow;

const styles = {
  modalContainer: {
    backgroundColor: '#00000080',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'none'
  },
  modalBody: {
    position: 'fixed',
    top: '40%',
    left: '30%',
    width: '40%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}
