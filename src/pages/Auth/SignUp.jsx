import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../styles/Auth.css'

//Assets
import cat from '../../assets/avatars/cat.png'
import AvatarSelection from './AvatarSelection'
import coder from '../../assets/animation/coder.json'

//Services
import { signup } from '../../services/authService'

//components
import Animation from '../../components/misc/Animation'



const SignUp = (props) => {
  const navigate = useNavigate()
  //state for tracking errors
  const [msg, setMsg] = useState('')

  const [popup, setPopup] = useState(false)

  //form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
  })
  
  const handlePopup = () => {
    setPopup(!popup)
  }

  const handleChange = (e) => {
    setMsg('')
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(formData)
      props.handleSignupOrLogin()
      navigate('/posts')
    } catch (error) {
      setMsg(error.message)
    }
  }

  return (
    <div className="signup-page">
      {popup &&
        <AvatarSelection 
        formData={formData}
        handleChange={handleChange}
        handlePopup={handlePopup}
        />
      }

      <div className='left-container'>
        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
            {msg
              ? <h3>{msg}</h3>
              : <h3>Social Media for Developers</h3>
            }
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              required
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Username"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              required
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              required
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />

            <button
              autoComplete="off"
              id="avatar-button"
              type="button"
              onClick={handlePopup}
            >Select Avatar</button>

            <button
              autoComplete="off"
              id="submit-button"
              type="submit"
            >SIGN UP</button>
          </form>

          <form className="register-form">
            <p>Already have an account?</p>
            <Link className="redirect-link" to="/signin">
              Sign In
            </Link>
          </form>
        </div>

      </div>

      <div className="right-container">
        <Animation animData={coder}></Animation>
      </div>

    </div>
  );
}

export default SignUp;