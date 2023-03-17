import React from 'react'
import './ViewCard.css'
import { Link } from 'react-router-dom';
function ViewCard({id,image,product_name,brand_name,price,sizes}) {
  return (
    <Link className='view__card' to={`product/${id}`}>
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
    </Link>
  )
}

export default ViewCard