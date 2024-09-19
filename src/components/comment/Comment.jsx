import React, { useContext, useEffect, useState } from 'react'
import './Comment.css'
import { UserContext } from '../../context/userContext'
const Comment = ({content, id, deleteComment, isLoading, owner}) => {
  const [commentId, setcommentId] = useState('')
  const [commentEligible, setcommentEligible] = useState(false)

  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    setcommentId(id)
    if(currentUser._id === owner){
      setcommentEligible(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
    <div class="comment-card">
        <p class="comment-content">{content}</p>
        <div class="comment-actions">
          { commentEligible ?
          <button class="delete-button" disabled={ isLoading ? true : false} onClick={()=> deleteComment(commentId)}>Delete</button> : ''
        }
            
        </div>
    </div>
    
    </>
  )
}

export default Comment