import React from 'react';

import Button from '../Button';
import ModalWindow from '../ModalWindow';

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess() {
    this.props.onSuccess();
  }

  render() {
    const { isSubscribed } = this.props;
    return (
      <ModalWindow 
        id='subscriptionModal'
        openWindowButtonTitle={isSubscribed ? 'Отписаться' : 'Подписаться'}
      >
        <ModalBody onSuccess={this.onSuccess} isSubscribed={isSubscribed} />
      </ModalWindow>
    )
  }
}

export default SubscribeModal;

const ModalBody = ({ isSubscribed, closeModal, onSuccess }) => (
  <div style={styles.modalBody}>
    {isSubscribed ? 'Вы уверены, что хотите отписаться?' : 'Переведете нам больше денег - книга выйдет быстрее!'}
    <Button 
      buttonOnClick={() => {
        onSuccess();
        closeModal();
      }}
    >
      {isSubscribed ? 'Отписаться' : 'Подписаться'}
    </Button>
  </div>
);

const styles = {
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
