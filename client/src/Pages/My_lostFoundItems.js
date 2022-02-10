import "../Components/Lost_Found/LostFound.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBox from "../Components/LoadingBox";
import LostFoundCard from "../Components/Lost_Found/LostFoundCard";

import { getAllOwnLostFoundItems } from "../redux/actions/LostFoundActions";

import { Link, useNavigate } from "react-router-dom";

const My_lostFoundItems = () => {
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllOwnLostFoundItems());
  }, []);

  const items = useSelector((state) => state.lostFound.ownlostfoundItems);
  const isLoading = useSelector((state) => state.lostFound.isLoading);

  const dispatch = useDispatch();

 

  console.log(items)

 
  return (
    <>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className="Bcards-cont">
          
             { items.map((card,index) => {
              return (
                <LostFoundCard postedby={'You'} editOption={true} key={index} card={card}/>
              )
            })}
          
        </div>
      )}
    </>
  );
};

export default My_lostFoundItems;
