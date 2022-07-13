import React from 'react'
import '../../styles/Card.css'

const PostActions = (props) => {
  console.log(props)
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId

  return (
    isAuthor &&
    <div className="interactions">
      {!props.post.is_resolved &&
        <button
          onClick={() => props.markPostResolved(props.post._id)}
        >Resolve</button>
      }
    </div >
  )
}

export default PostActions;