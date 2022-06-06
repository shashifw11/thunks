import React from 'react'

export const PostItem = (props) => {
    const {id,title,body}=props
  return (
    <div>
<p>{title}</p>
    </div>
  )
}