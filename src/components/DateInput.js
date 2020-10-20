import React from 'react';
import "./DateInput.css";
const DateInput = (props) => {
  return (
    <div className="form_container">
      <p className="input_title">{props.title}</p>
      <div className="date_form">
        <input type="date" className="date_input" />
      </div>
    </div>
  );
}

export default DateInput;