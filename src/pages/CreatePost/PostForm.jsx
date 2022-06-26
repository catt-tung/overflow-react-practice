import React from "react";

const PostForm = (props) => {
  return (
    <form className="create-form">
      <div className="question-prompt">
        <label>Enter your question</label>
      </div>

      <input 
        required
        name="question"
        autoComplete="off"
        placeholder="Question"
      />

      <div className="border"></div>
      
      <div className="code-prompt">
        <label>Codeblock</label>
        <button type="button" id="plus-button">+</button>
      </div>

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;