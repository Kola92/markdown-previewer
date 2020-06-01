import React, { useState, useEffect } from "react";
import marked from "marked";

const Previewer = () => {
	// Declare new state variable
	const [text, setText] = useState('');


	const handleChange = (evt) => {
		setText(evt.target.value);
	} 

	return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <div className="editor-container">
          <h6>Enter markdown:</h6>
          <textarea id="editor" value={text} onChange={handleChange} />
        </div>

        <div id="preview" className="preview">
          <h6>Preview:</h6>
          <div
            className="preview-wrapper"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Previewer;
