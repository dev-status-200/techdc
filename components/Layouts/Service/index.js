import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Service = () => {
  return (
    <div className='home-styles'>
    <div className="desktop" >
        <Desktop />
    </div>
    <div className="mobile" >
        <Mobile />
    </div>
    </div>
  )
}

export default Service