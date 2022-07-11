import React, { useEffect } from 'react';
import Prism from "prismjs"
import '../../styles/prism.css'


const Codeblock = ({ codeblock }) => {

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

  return (
    <pre className='codeblock'>
      <code className='language-javascript'>
        {codeblock}
      </code>
    </pre>
  );
}

export default Codeblock;