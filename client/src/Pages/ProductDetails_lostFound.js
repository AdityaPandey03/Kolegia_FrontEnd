import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Lost_Found/LostFound.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLostFoundProductDetails } from "../redux/actions/LostFoundActions";
import jwt_decode from "jwt-decode";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: "70vw",
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function LostFoundItemDetails() {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);
  const [dateString, setDateString] = useState("");

  const product_id = params.id;
  const product = useSelector((state) => state.lostFound.singleProduct.Product);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

    dispatch(getLostFoundProductDetails({ product_id, decoded }));

    if (product?.lost_date) {
      const date = new Date(product?.lost_date);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      setDateString(day + "-" + month + "-" + year);
    }
  }, [product_id, product?.lost_date]);

  return (
    <div className="LostItemMaincontainer">
      <div className="LostItemDetailsContainerWrapper">
        <div className="headingContainer">
          <div>
            <h1>Lost Item Details</h1>
            <h4>Item ID : {product?._id}</h4>
          </div>
          <button className="raiseHandBtn" onClick={(e) => setOpenModal(true)}>
            RAISE HAND
          </button>
        </div>
        <div className="LostItemDetailsContainer">
          <div className="firstHalf">
            <div className="LostDetailsListItem">
              <h4>Item Lost</h4>
              <p>{product?.name}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Category</h4>
              <p>{product?.category}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Brand</h4>
              <p>{product?.brand}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Primary Color</h4>
              <p>{product?.color}</p>
            </div>
          </div>
          <div className="secondHalf">
            <div className="LostDetailsListItem">
              <h4>Date Lost</h4>
              <p>{dateString}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Time Lost</h4>
              <p>{product?.lost_time}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Location Lost</h4>
              <p>{product?.lost_location}</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Description</h4>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={(e) => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalStyle} className={`${classes.paper}`}>
          <h4>Lost Item</h4>
          <form
            className="form"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="inputDiv">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="descripion"
                style={{ outline: "none", border: "1px solid gray" }}
              ></textarea>
            </div>
            <button type="submit" className="lostBtn">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default LostFoundItemDetails;
