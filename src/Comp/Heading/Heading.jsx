import React from 'react'
import './Heading.css'

const Heading = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Heading
