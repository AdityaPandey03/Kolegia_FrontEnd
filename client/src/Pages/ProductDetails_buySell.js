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
  var isLoading=buySell?.isLoading;
  var singleProduct=buySell?.singleProduct;
  var firstImage=buySell?.firstImage;
  const [image2, setimage2] = useState(firstImage)

  var {owner_details}=singleProduct;


  const dispatch = useDispatch();
  useEffect(async() => {
    await dispatch(getSingleProductDetails(productId));
  }, []);

  const handleClick = (e) => {
    setimage2(e.target.src);
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
          <div className="imageContainer">
            <img alt="image" className="previewImage" src={image2} />
          </div>
          
          <div className="detailsContainer">
            <h1 style={{fontSize:'40px'}}>{singleProduct?.name}</h1>
            <p>in {singleProduct.category=='Other'?singleProduct.other_category_name:singleProduct?.category}</p>
            <p style={{fontSize:'30px',color:"green",fontWeight:"600"}}>₹ {singleProduct?.price}</p>
            <p style={{fontSize:"22px"}}>{singleProduct?.description}</p>

            <div className="description">
            <h2>Details</h2>
            <p style={{marginTop:'15px'}}><span style={{fontWeight:"600"}}>Brand:</span> {singleProduct?.brand}</p>
            <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Color:</span> {singleProduct?.color}</p>
            <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Bought on:</span> {singleProduct?.bought_datetime.split('T')[0]}</p>
            <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Warranty Till:</span> {singleProduct?.warranty_till.split('T')[0]}</p>
          </div>
            
            <h3 style={{marginTop:'15px',marginBottom:'5px',fontFamily:"Hind Siliguri, sans-serif",fontWeight:'600',fontSize:'25px'}}>Seller Details</h3>
            <div className="owner">
              <div className="ownerImg">
                <img src={owner_details?.profile_picture} style={{borderRadius:"50%"}}></img>
              </div>
              <div className="ownerDet">
              <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Name:</span> {owner_details?.name}</p>
              <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Hostel:</span> {owner_details?.hostel}</p>
              <p style={{marginTop:'5px'}}><span style={{fontWeight:"600"}}>Room No:</span> {owner_details?.room_number}</p>
              </div>
            </div>

              <Button
                variant="contained"
                style={{
                  width: "100%",
                  color: "white",
                  background: "#332A7C",
                  borderRadius: "10px",
                  marginTop: "2rem",
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
