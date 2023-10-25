import React from 'react'
import style from '../styles/style'
import NavBar from './NavBar'

function Footer() {
  return (
    <div style={style.footer}>
        <h1>Printivo</h1>
        <ul style={style.List}>
          <li className='text-danger'>About</li>
          <li>contact us</li>
          <li>Track order</li>
        </ul>
    </div>
  )
};

export default Footer