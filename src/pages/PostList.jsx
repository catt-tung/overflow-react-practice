import React, { useState, useEffect } from "react";

//Services
import { getAllPosts, updatePost, } from "../services/postService";

//Components
import PostCard from "../components/Post/PostCard";
import Header from "../components/misc/Header";

const PostList = (props) => {
  const [posts, setPosts] = useState([])

  const markPostResolved = async (postId) => {
    try {
      const updatedPost = updatePost(postId)
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)))
    } catch (error) {
      throw error
    }
  }

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
      <Header />
      {posts?.map((post) => (
        <PostCard 
          post={post}
          key={post._id}
          user={props.user}
          markPostResolved={markPostResolved}
        />
      ))}
    </div>
  );
}

export default PostList;