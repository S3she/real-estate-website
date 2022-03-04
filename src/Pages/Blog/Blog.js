import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from "../../firebaseConfig";
import "./blog.css";
import AddPost from './AddPost';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
    const postsRef = collection(db, "BlogPosts");
    const q = query(postsRef, orderBy("Created", "desc"));
    onSnapshot(q, (snapshot) => {
        const blogPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setBlogPosts(blogPosts);
        console.log(blogPosts);
      });
    },[]);
  return (
    <div>
        {blogPosts.length === 0 ? (
          <p>Nothing Found</p>
        ) : (
          blogPosts.map(({id, title, author}) => (<div className='blogContainer' key={id}>
            <div className='news-article'>
            <div className='addPostComponent'><AddPost/></div>
              <h2>{title}</h2>
              <h5>Written by: {author}</h5>
              
            </div>

            </div> 
            ))
        )}
        </div>
      );
    }

export default Blog;