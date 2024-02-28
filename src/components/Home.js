import React, { useState } from 'react';
import PostForm from './PostForm';

const Home = () => {
  const [initialPosts, setInitialPosts] = useState([
    { id: 1, author: 'John', content: 'First post content' },
    { id: 2, author: 'Alice', content: 'Second post content' },
    { id: 3, author: 'Bob', content: 'Third post content' },
    // Add more initial posts as needed
  ]);

  const add_post = (newPost) => {
    const id = initialPosts.length + 1; // Generate unique id for the new post
    const postWithId = { ...newPost, id }; // Combine the new post with id
    setInitialPosts([...initialPosts, postWithId]); // Add the new post to initialPosts array
  };

  return (
    <div className='Home'>
      <h2>News Feed</h2>
      <PostForm addPost={add_post} /> {/* Render the PostForm component and pass addPost function as prop */}
      <div className='posts'>
        {initialPosts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.author}</h3>
            <p>{post.content}</p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Home;
