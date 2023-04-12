import React from 'react'
import Navbar from './Navbar'
import image from '../Images/background.jpg'
import { Link } from 'react-router-dom'

const WorkingPage = () => {
  const str1 = "She walked along the beach feeling the warm sand between her toes and the cool water lapping at her feet. The sun was shining brightly in the clear blue sky, and she could hear the seagulls calling overhead. It was a perfect day, and she felt grateful to be alive and able to enjoy it. She closed her eyes and took a deep breath, savoring the salty air and the peacefulness of the moment."

  return (
    <div className='working-page-container'>
        <Navbar/>
        <img src={image} alt="background" />
            <p>Original Text</p>
          <div className='textbox-area'>
            <div className='textbox-1'>
            <p>str1</p>
            </div>
        
            <div className="textbox-2">
            <p>str2</p>
            </div>
        </div>

        <div className='instructions'>
          <p> Hit record button to record the following </p>
          <button > Record </button>  
          <button id='reset-button'> Reset </button>
          <button id='next-button'> <Link to="/resultpage">Next</Link></button>
      </div>

    </div>
  )
}

export default WorkingPage