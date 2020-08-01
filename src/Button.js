import React from 'react';

class Button extends React.Component {
  render() {
    const style = this.props.style || {};
    return (
      <div onClick={this.props.containerOnClick} style={style.container}>
        <button onClick={this.props.buttonOnClick} style={style.button}>
          {this.props.title}
        </button>
      </div>
    )
  }
}

export default Button;
