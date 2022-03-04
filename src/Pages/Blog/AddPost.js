import React, { useState } from 'react'

const AddPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: ""

    })
  return (
    <div className='newPostContainer'>
        <h2>New Blog Post</h2>
        <label htmlFor="">Title</label>
        <input type="text" name="title" className='new-post-form' value={formData.title}/>

        {/*Content*/}
        <label htmlFor="">Author</label>
        <input type="text" name="author" className='new-post-form' value={formData.author}/>

        <div>
            <div>

            </div>
        </div>


    </div>

  )
}

export default AddPost