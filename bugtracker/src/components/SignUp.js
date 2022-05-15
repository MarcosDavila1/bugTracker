import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/signUp.css'

function SignUp() {

    const history = useHistory()

    function handleSubmit(){
        history.push('/')
    }

  return (
    <div className='containerSignUp'>
        <div className='containerFormSignUp'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className='formSignUp'>
                <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    // value=''
                    placeholder='Your name'
                />

                <label>Email</label>
                <input 
                    type='email'
                    name='email'
                    // value=''
                    placeholder='Your email'
                />

                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    // value=''
                    placeholder='Your password'
                />

                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp