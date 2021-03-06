import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'
import PostList from '../pages/PostList'
import CreatePost from '../pages/CreatePost/CreatePost'

//Services
import { getUser, logout } from '../services/authService'

//Pages + Components

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(getUser())

  const handleSignupOrLogin = async () => {
    const currentUser = getUser()
    setUser(currentUser)
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    navigate('/')
  }

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <Routes>

        <Route path='/'
        element={<h1>Landing</h1>}
        />

        <Route path='/signin'
        element={<SignIn handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route path='/signup'
        element={<SignUp handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route path='/posts'
        element={<PostList user={user} />}
        />

        <Route path='/new'
          element={user ? <CreatePost user={user} /> : <Navigate to="/signin" />}
        />

      </Routes>
    </div>
  )
}

export default App