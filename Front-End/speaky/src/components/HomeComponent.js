import React from 'react'
import image from '../Images/background.jpg'
import Navbar from './Navbar'

const HomeComponent = () => {
    
  return (
    <>
      <Navbar/>
      <div className='main-content'>
          <h1><b>Speak without fear</b></h1>
          <img src={image} alt="background"/>
          <p>With Speaky you can improve your pronunciation which will overall help <br/> you develop your public speaking skills</p>
          <button> Get Started</button>
      </div>
    </>
  )
}

export default HomeComponent