import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="12"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        ToUpperCase
      </button>
    </div>
  );
}

TextForm.prototype = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Enter text to analyze" };
