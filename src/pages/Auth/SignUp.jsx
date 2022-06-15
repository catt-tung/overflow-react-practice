import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Auth.css'

//Assets
import cat from '../../assets/avatars/cat.png'

//Services
import { signup } from '../../services/authService'



const SignUp = (props) => {
  const navigate = useNavigate()
  //state for tracking errors
  const [msg, setMsg] = useState('')

  //form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
  })

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

      <div className='left-container'>

        <div className='form-container'>
          <form className="register-form">
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
            >Select Avatar</button>

            <button
              autoComplete="off"
              id="submit-button"
              type="submit"
            >SIGN UP</button>
          </form>

          <div className="title-container">
            <h1>Create an Account</h1>
						<h3>Social media for developers</h3>
          </div>
          <form className="register-form">
            Inputs Here
          </form>
        </div>

      </div>

      <div className="right-container">
        Animation Here
      </div>

    </div>
  );
}

export default SignUp;