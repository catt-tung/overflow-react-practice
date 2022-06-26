import React from "react";
import '../../styles/Create.css'

//Components
import PostForm from "./PostForm";
import Header from '../../components/misc/Header'

const CreatePost = (props) => {
  return (
    <div className="layout">
      <Header />
      <PostForm />
    </div>
  );
}

export default CreatePost;