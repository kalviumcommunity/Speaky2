import React from 'react'
import './style.css'
import LoginButton from './LoginButton'

const Navbar = () => {

  return (
    <div className='navbar'>
        <h1>Speaky</h1>
        <LoginButton/>
    </div>
  )
}

export default Navbar