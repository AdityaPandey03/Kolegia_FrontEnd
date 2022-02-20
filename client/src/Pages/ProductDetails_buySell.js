import "../Components/Buy_sell/ProductDetails.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDetails } from "../redux/actions/BuySellActions";
import LoadingBox from "../Components/LoadingBox";
import { useParams } from "react-router-dom";
import { CircularProgress, Button } from "@material-ui/core";
import Navbar from "../Components/Appbar/Navbar";

function ProductDetails() {
  const params = useParams();

  const productId = params.id;
  const buySell = useSelector((state) => state.buySell);
  const { isLoading, singleProduct, firstImage } = buySell;


  const {owner_details}=singleProduct;
  console.log(owner_details)



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductDetails(productId));
  }, []);

  var image2 = firstImage;
  const handleClick = (e) => {
    image2 = e.target.src;
  };
console.log(singleProduct)
  return (
    <>
    <Navbar visibleSearch={false}/>
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
          <div className="description_wrapper">
          <div className="imageContainer">
            <img alt="image" className="previewImage" src={image2} />
          </div>
          <div className="description">
            <h2>Description</h2>
            <p style={{marginTop:'15px'}}>{singleProduct.brand}</p>
            <p style={{marginTop:'5px'}}>
              {singleProduct.color}
            
            </p>
            <p style={{marginTop:'5px'}}>{singleProduct.description}</p>
            <p style={{marginTop:'5px'}}>{singleProduct.category}</p>
          </div>
          </div>
          <div className="detailsContainer">
            <h1 style={{fontFamily:"Inconsolata, monospace",marginBottom:'15px',fontWeight:'700',color:'#000000',fontSize:'40px'}}>{singleProduct?.name}</h1>
            <p style={{fontSize:'20px'}}>Price :  Rs. {singleProduct?.price}</p>
            
            <h3 style={{marginTop:'15px',marginBottom:'5px',fontFamily:"Hind Siliguri, sans-serif",fontWeight:'600',fontSize:'28px'}}>Owner Details</h3>
            <h4 style={{color:'black',fontSize:'20px'}}>Posted by : {owner_details?.name}</h4>
            <h4 style={{color:'black',fontSize:'18px'}}>Phone No : {owner_details?.phone}</h4>


              <Button
                variant="contained"
                style={{
                  width: "18rem",
                  color: "white",
                  background: "#332A7C",
                  borderRadius: "10px",
                  marginRight: "10px",
                  marginTop: "48px",
                  height: "2.5rem",
                  fontFamily: "Hind Siliguri, sans-serif",
                  fontWeight: "700",
                }}
              >
                <CircularProgress size={14} />
                Connect with author
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
