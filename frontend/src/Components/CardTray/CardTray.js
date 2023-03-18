import React, { useEffect } from "react";
import ViewCard from "../Card/ViewCard";
import img1 from "../Assets/Carousel/carousel_img1.jpeg";
import "./CardTray.css";
import { useDispatch, useSelector } from "react-redux";
import "./CardTray.css";

import { fetchProducts } from "../../redux/slices/productSlice";
import Loader from "../../Components/Loader/loader";


function CardTray() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return (
      <div>
        Error: {error}{" "}
        
      </div>
    );
  }
  if (status === "succeeded") {
    const product_list = products.product;
    return (
      <div className="cardTray container-lg" id="products">
        <div>
          <div className="row" align="center">
            <h1 className="home__heading"> Products </h1>
            <hr />
            {product_list.map((product) => (
              <div className="col-lg-4 col-md-6 my-4" key={product._id}>
                <ViewCard
                  id={product._id}
                  image={product.images}
                  product_name={product.name}
                  brand_name={product.category}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CardTray;
