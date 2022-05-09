import React from 'react'
import '../styles/login.css'

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
                    value=''
                    placeholder='Your email'
                />

                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    value=''
                    placeholder='Your email'
                />

                <button type='submit'>Login</button>
            </form>
            <p>Forgot your password? Click here</p>
            <p>Don't have an account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login