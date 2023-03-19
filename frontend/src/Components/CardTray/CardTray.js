import React, { useEffect, useState } from "react";
import ViewCard from "../Card/ViewCard";
import "./CardTray.css";
import { useDispatch, useSelector } from "react-redux";
import "./CardTray.css";
import Pagination from "react-js-pagination";

import { fetchProducts } from "../../redux/slices/productSlice";
import Loader from "../../Components/Loader/loader";

function CardTray() {

  const [currentPage,setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const resultPerPage = useSelector((state)=>state.products.resultPerPage);

  console.log(resultPerPage);
  const setCurrentPageNo =(e)=>{
    setCurrentPage(e)
  }
  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch,currentPage]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error} </div>;
  }
  if (status === "succeeded") {
    const product_list = products.product;
    const total_products = products.productCount;

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
                  brand_name={product.brand}
                  price={product.price}
                />
              </div>
            ))}
            <div className="paginationBox">
              <Pagination 
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={total_products}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTray;
