/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../../logo.svg'
import './Logo.css'

function Logo() {
  return (
    <div className='logo-contenedor'>
      <img src={logo} className='logo' />
    </div>
  )
}
export default Logo
