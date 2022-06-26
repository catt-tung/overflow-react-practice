import React from "react";
import '../../styles/Create.css'

//Components
import PostForm from "./PostForm";
import Header from '../../components/misc/Header'

//Services
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";



const CreatePost = (props) => {
  const navigate = useNavigate()

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      console.log(newPost)
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header />
      <PostForm />
    </div>
  );
}

export default CreatePost;