import React, { useState } from "react";


export default function TextFrom(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success');
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success');
  };

  //Credits: A
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied Text','success');
  }

  //Credits: Coding wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed','success');
  }

  const handRemoveClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.slice(4);
    setText(newText);
  };

  const handleResetClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert('Textarea has been reset','success');
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text";//wrong way to change state
  // setText("new text");//correct way to change state

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#03182aff' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handRemoveClick}> Remove 1st 4 Letter </button>
        <button className="btn btn-primary mx-1" onClick={handleResetClick}> Reset </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}> CopyText </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Sapces</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview </h2>
        <p>{text.length > 0 ? text : 'Enter something inthe textbox above to preview it here'} </p>
      </div>
    </>
  );
}
