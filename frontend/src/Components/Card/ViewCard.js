import React from "react";
import "./ViewCard.css";
import { Link } from "react-router-dom";

import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/solerangers/";

function ViewCard({ id, image, product_name, brand_name, price, sizes }) {
  
  return (
    <Link className="view__card" to={`product/${id}`}>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={`solerangers/${image}/1.png`}
        className='card__image'
      />
      <div className="card__name">{product_name}</div>
      <div className="card__brand">{brand_name}</div>
      <div className="card__price">Rs. {price}</div>
      <div className="card__sizes">{sizes}</div>
    </Link>
  );
}

export default ViewCard;
