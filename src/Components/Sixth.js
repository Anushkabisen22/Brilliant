import React from 'react'
import Lessions from '../Side Components/Lessions'
import ProgressBar from '../Side Components/ProgressBar'
function Sixth() {
    return (
      <div>
        {/* <ProgressBar /> */}
        <div className='mt-8'>
        <div className="font-sans text-2xl font bold text-center mb-4">
          Learning paths based on your answers
        </div>
        <div className="text-sm font-light text-center align-baseline">
          Choose one to get started. You can switch any time.
        </div>
        </div>
        <div className="mt-10 ml-14 flex justify-center ">
          <Lessions />                                    
          <Lessions />
        </div>

    </div>
  )
}

export default Sixth