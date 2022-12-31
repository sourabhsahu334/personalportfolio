import React from 'react'

import './hover.css';

const Hover = () => {
  return (
    <div> <div class="svg-wrapper">
    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
      <rect class="shape" height="50" width="150" />
    </svg>
     <div class="text" style={{color:"red"}}>HOVER</div>
  </div></div>
  )
}
export default Hover
