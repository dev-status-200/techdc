import Image from 'next/image'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <div>
            <div className="text-center" style={{position:"relative",top:"300px"}}>
                <img src='/loader.svg' />
                
                <div className="mt-2">Loading...</div>
              </div>
        </div>
    )
}

export default Loader