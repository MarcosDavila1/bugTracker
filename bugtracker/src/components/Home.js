import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import profile from '../images/profile.svg'
import job from '../images/job.svg'
import task from '../images/task.svg'

function Home() {
  return (
    <div className='containerHome'>
        <Link to='#' className='menuLinks'>
            <img src={profile} alt='profile'/>
            Candidates
        </Link>
        
        <Link to='#' className='menuLinks'>
            <img src={job} alt='job'/>
            Job Positions
        </Link>
        
        <Link to='#' className='menuLinks'>
            <img src={task} alt='task'/>
            Tasks and Notes
        </Link>
    </div>
  )
}

export default Home