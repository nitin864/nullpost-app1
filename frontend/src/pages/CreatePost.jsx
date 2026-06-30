import React from 'react'


const CreatePost = () => {
  return (
    <div>
        <h1>Create Post</h1>
        <form type="file" name="image" accept="image/*" />
        <form type="text" name="caption" placeholder="Enter caption" required/>
        <button type="submit">Create Post</button>
    </div>
  )
}

export default CreatePost