import React from 'react';

import Button from './Button';
import ModalWindow from './ModalWindow';
const childRef = React.createRef();

class SubscribeModal extends React.Component {

  closeModal() {
    childRef.current.closeModal();
  }

  render() {
    const { isSubscribed, toggleSubscription } = this.props;
    const title = isSubscribed ? 'Отписаться' : 'Подписаться'
    const modalBody = isSubscribed ? 'Вы уверены, что хотите отписаться?' : 'Переведете нам больше денег - книга выйдет быстрее!'
    return (
      <>
        <ModalWindow id='subscriptionModal'
                         openWindowButtonTitle={title}
                         ref={childRef}>
          {modalBody}
          <Button buttonOnClick={toggleSubscription}
                  title={title}/>
        </ModalWindow>
      </>
    )
  }
}

export default SubscribeModal;
