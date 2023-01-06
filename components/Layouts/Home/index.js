import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Home = () => {
  return (
    <div className='home-styles'>
    <div className="desktop" >
        <Desktop />
    </div>
    <div className="mobile" >
        <Mobile />
    </div>
    {/* <Mobile className="mobile" /> */}
    </div>
  )
}

export default Home