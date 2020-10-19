import React from 'react';
import "./Input.css"
const Input = (props) => {
  return (
    <div className="form_container">
      <p className="input_title">{props.text}</p>
      <div className="form">
        <input name={props.name} value={props.value} min={props.min} max={props.max} type="range" className="input" onChange={props.onChange}></input>
        <p className="result">x {props.unit}</p>
      </div>
    </div>
  );
}

export default Input;