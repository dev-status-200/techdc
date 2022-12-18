import React from 'react'

const Button = ({title, width}) => {
  return (
    <div className='btn-custom' style={{width:width, height:70}}>
        <div className='btn-custom-back' style={{width:width, height:50}}></div>
        <div className='btn-custom-top' style={{width:width, height:50}}>
            <div className='white'>{title}</div>
        </div>
    </div>
  )
}

export default Button