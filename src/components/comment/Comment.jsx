import React, { useEffect, useState } from 'react'
import './Comment.css'
const Comment = ({content, id, deleteComment, isLoading}) => {
  const [commentId, setcommentId] = useState('')

  useEffect(() => {
    setcommentId(id)
  }, [])
  

  return (
    <>
    <div class="comment-card">
        <p class="comment-content">{content}</p>
        <div class="comment-actions">
            <button class="delete-button" disabled={ isLoading ? true : false} onClick={()=> deleteComment(commentId)}>Delete</button>
        </div>
    </div>
    
    </>
  )
}

export default Comment