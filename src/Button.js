import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      alert(this.props.button.initialAlert)
    } else {
      alert(this.props.button.resultAlert)
    }
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const { 
      button: { initialState, resultState, initialAlert, resultAlert } 
    } = this.props;

    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? initialState : resultState}
      </button>
    );
  }
}

export default Button;

const styles = {
  button: {
    display: 'flex'
  }
}