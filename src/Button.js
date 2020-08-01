import React from 'react';

class ShowMoreButton extends React.Component {
  render() {
    const {
      button: { title, containerOnClick, buttonOnClick, style={} }
    } = this.props;

    return (
      <div onClick={containerOnClick} style={style.container}>
        <button onClick={buttonOnClick} style={style.button}>
          {title}
        </button>
      </div>
    )
  }
}

export default ShowMoreButton;
