import React from "react";
import '../../styles/Create.css'
import CodeEditor from '../../components/Code/CodeEditor'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="question-prompt">
        <label>Enter your question</label>
      </div>

      <input 
        required
        name="question"
        autoComplete="off"
        placeholder="Question"
        value={props.question}
        onChange={(e) => props.seQuestion(e.target.value)}
      />

      <div className="border"></div>
      
      <div className="code-prompt">
        <label>Codeblock</label>
        <button 
          type="button" 
          id="plus-button"
          onClick={() => props.setTogglecode(!props.toggleCode)}
        >+</button>
      </div>

      {props.toggleCode &&
        <CodeEditor
          codeblock={props.codeblock}
          setCodeBlock={props.setCodeBlock}
        ></CodeEditor>

      }

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;