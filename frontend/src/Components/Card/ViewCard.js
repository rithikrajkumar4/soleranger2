import React from 'react'
import './ViewCard.css'

function ViewCard({image,product_name,brand_name,price,sizes}) {
  return (
    <div className='view__card'>
        <img src={image} alt="card__image" className='card__image' loading='lazy'/>
        <div className="card__name">
            {product_name}
        </div>
        <div className="card__brand">
            {brand_name}
        </div>
        <div className="card__price">
            Rs. {price}
        </div>
        <div className="card__sizes">
            {sizes}
        </div>
    </div>
  )
}

export default ViewCard