import React from 'react';
import "./Button.css"
const Button = (props) => {
  return (
    <div className="button_form">
      <button onClick={props.onClick}>Count</button>
    </div>
  );
}

export default Button;