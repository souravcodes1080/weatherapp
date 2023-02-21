import React from 'react'
import '../App.css'
function Header() {
  return (
    <>
    <div className='header'>
        <div className='title-div'><p className='title'>Weather App</p></div>
        <div><img className='header-icon' src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='logo'/></div>
    </div>
    <hr className='header-hr'/>
    </>
  )
}

export default Header