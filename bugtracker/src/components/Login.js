import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

function Login() {

    function submit(e){
        e.preventDefault()
        alert('holis')
    }

  return (
    <div className='containerLogin'>
        <div className='popUpLogin'>
            <h1>Login</h1>
            <form onSubmit={submit} className='formLogin'>
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

                <button type='submit'>Login</button>
            </form>

            <p>Forgot your password?  
                <Link to='#' className='link'> Click here</Link>
            </p>
            
            <p>Don't have an account?  
                <Link to='signup' className='link'> Sign Up</Link>
            </p>
        </div>
    </div>
  )
}

export default Login