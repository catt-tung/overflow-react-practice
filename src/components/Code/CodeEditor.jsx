import React, { useEffect } from 'react';
import Prism from "prismjs"
import '../../styles/prism.css'

const CodeEditor = ({ codeblock, setCodeBlock }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [codeblock])

  return (
    <div className="code-editor">
      <pre className="display-field">
        <code className="language-javascript">
          {codeblock}
        </code>
      </pre>
      <textarea
        className="input-field"
        value={codeblock}
        onChange={(e) => setCodeBlock(e.target.value)}
      ></textarea>
    </div>
  )
}

export default CodeEditor