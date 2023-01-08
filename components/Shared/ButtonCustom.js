import React from 'react'

const ButtonCustom = ({title, width, color1, color2}) => {
  return (
    <div className='btn-custom' style={{width:width, height:70}}>
        <div className='btn-custom-back' style={{width:width, height:50, backgroundColor:color1}}></div>
        <div className='btn-custom-top' style={{width:width, height:50, backgroundColor:color2}}>
            <div className='white'><strong>{title}</strong></div>
        </div>
    </div>
  )
}

export default ButtonCustom