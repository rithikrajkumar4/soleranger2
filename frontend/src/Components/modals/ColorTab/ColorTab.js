import React from 'react'
import './ColorTab.css'

function ColorTab({name}) {
  return (
    <div className='colorTab'>
        <button className="color__button" onClick={(e) => e.preventDefault()}>
            {name}
        </button>
    </div>
  )
}

export default ColorTab