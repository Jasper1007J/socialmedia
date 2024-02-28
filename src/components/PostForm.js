import React, { useState } from 'react';
const PostForm = ({addPost}) => {
  const [formData, setFormData] = useState({
    author: '',
    content: ''
  });

  const { author, content } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addPost(formData); // Pass the form data to addPost function
    setFormData({ author: '', content: '' }); // Clear the form after submission
  };

  return (
    <div className='create-post'>
      <h2>Create Post</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Author" name="author" value={author} onChange={onChange} required />
        <textarea placeholder="Content" name="content" value={content} onChange={onChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
