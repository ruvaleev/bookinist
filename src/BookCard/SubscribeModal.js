import React from 'react';

import Button from '../shared/Button';
import ModalWindow from '../shared/ModalWindow';
const childRef = React.createRef();

class SubscribeModal extends React.Component {

  closeModal() {
    childRef.current.closeModal();
  }

  render() {
    const { isSubscribed, toggleSubscription } = this.props;
    const title = isSubscribed ? 'Отписаться' : 'Подписаться';
    return (
      <>
        <ModalWindow id='subscriptionModal'
                         openWindowButtonTitle={title}
                         ref={childRef}>
          {isSubscribed ? 'Вы уверены, что хотите отписаться?' : 'Переведете нам больше денег - книга выйдет быстрее!'}
          <Button buttonOnClick={toggleSubscription}>
            {title}
          </Button>
        </ModalWindow>
      </>
    )
  }
}

export default SubscribeModal;
