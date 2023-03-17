import React from 'react'
import './ColorTab.css'

function ColorTab({name}) {
  return (
    <div className='colorTab'>
        <button className="color__button">
            {name}
        </button>
    </div>
  )
}

export default ColorTab