import React, { useState, useEffect } from "react";

//Services
import { getAllPosts } from "../services/postService";

//Components
import PostCard from "../components/Post/PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  return (
    <div className="layout">
      <h1>Posts!!</h1>
      {posts?.map((post) => (
        <PostCard 
          post={post}
          key={post._id}
        />
      ))}
    </div>
  );
}

export default PostList;