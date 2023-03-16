import React, { useEffect } from "react";
import ViewCard from "../Card/ViewCard";
import img1 from "../Assets/Carousel/carousel_img1.jpeg";
import Heading from "../modals/Heading/Heading";
import "./CardTray.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/slices/productSlice";
import Loader from '../../Components/Loader/loader';
import {useAlert} from 'react-alert';

function CardTray() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(fetchProducts());
  }, [dispatch, error]);

  if (status === "loading") {
    return <Loader/>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  if (status === "succeeded") {
    const product_list = products.product;
    return (
      <div className="cardTray container-lg" id="products">
        <>
          <div className="row" align="center">
            <Heading heading__name={"Products"} />
            {product_list.map((product) => (
              <div className="col-lg-4 col-md-6 my-4" key={product._id}>
                <ViewCard
                  image={img1}
                  product_name={product.name}
                  brand_name={product.category}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </>
      </div>
    );
  }
}

export default CardTray;
