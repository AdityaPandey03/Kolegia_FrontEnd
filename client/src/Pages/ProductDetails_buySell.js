import "../Components/Buy_sell/ProductDetails.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDetails } from "../redux/actions/BuySellActions";
import LoadingBox from "../Components/LoadingBox";
import { useParams } from "react-router-dom";
import { CircularProgress, Button } from "@material-ui/core";

function ProductDetails() {
  const params = useParams();

  const productId = params.id;
  const buySell = useSelector((state) => state.buySell);
  const { isLoading, singleProduct, firstImage } = buySell;



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductDetails(productId));
  }, []);

  var image2 = firstImage;
  const handleClick = (e) => {
    image2 = e.target.src;
  };

  return (
    <div className="container">
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className="containerWrapper">
          <div className="imageListContainer">
            {singleProduct ? (
              singleProduct.files?.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="sideImage"
                      src={image.uri}
                      onClick={handleClick}
                    />
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <div className="imageContainer">
            <img alt="image" className="previewImage" src={image2} />
          </div>
          <div className="detailsContainer">
            <h1>{singleProduct?.name}</h1>
            <p>price : ${singleProduct?.price}</p>
            <p>description : {singleProduct?.description}</p>
            <h3>Owner details</h3>
            <h4 style={{color:'black'}}>posted By :{singleProduct?.owner_details.name}</h4>

            <Button variant="contained">
              <CircularProgress size={14} />
              'Connect with author'
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
