import React from 'react';

import Button from './Button';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm() {
    let question = document.getElementById('question')
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    console.log(question.value)
    console.log(name.value)
    console.log(email.value)
    question.value = ''
    name.value = ''
    email.value = ''
  }

  render() {

    return (
      <div style={styles.feedbackFormContainer}>
        <textarea id='question' placeholder='Ваш вопрос...'/>
        <input id='name' placeholder='Имя'/>
        <input id='email' placeholder='Email'/>
        <Button buttonOnClick={this.sendForm}>Задать вопрос</Button>
      </div>
    )
  }
}

export default FeedbackForm;

const styles = {
  feedbackFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '10%',
    position: 'fixed',
    bottom: '0',
    margin: '1em'
  }
}
