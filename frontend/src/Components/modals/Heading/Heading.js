import React from 'react'
import './Heading.css'

function Heading({heading__name}) {
  return (
    <div className='container-lg'>
        <div className="row">
            <div className="col-12 heading__name" align='center'>
                  - - - - {heading__name} - - - - 
            </div>
        </div>
    </div>
  )
}

export default Heading