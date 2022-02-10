import "../Components/Lost_Found/LostFound.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBox from "../Components/LoadingBox";
import LostFoundCard from "../Components/Lost_Found/LostFoundCard";

import { getAllLostFoundItems } from "../redux/actions/LostFoundActions";

import { Link, useNavigate } from "react-router-dom";

const Bcards = () => {
  const navigate = useNavigate();
  

  const Data = useSelector((state) => state.lostFound.lostFoundItemList);
  const isLoading = useSelector((state) => state.lostFound.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLostFoundItems());
  }, []);

  const image = [];

 
  return (
    <>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className="Bcards-cont">
          {Data.length > 0 &&
            Data.map((card,index) => {
              return (
                <LostFoundCard editOption={false} key={index} card={card}/>
              )
            })}
          <div className="addNewBtnContainer">
            <button
              className="addNewBtn"
              onClick={(e) => navigate("/lostItem/addItem")}
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Bcards;
