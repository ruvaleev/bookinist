import React from 'react';

class Button extends React.Component {
  render() {
    const { style = {}, containerOnClick, buttonOnClick, title, children } = this.props;
    return (
      <div onClick={containerOnClick} style={style.container}>
        <button onClick={buttonOnClick} style={style.button}>
          {children}
        </button>
      </div>
    )
  }
}

export default Button;
