import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Lost_Found/LostFound.css";

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
  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="LostItemMaincontainer">
      <div className="LostItemDetailsContainerWrapper">
        <div className="headingContainer">
          <div>
            <h1>Lost Item Details</h1>
            <h4>Item Id : 1234ABCD</h4>
          </div>
          <button className="raiseHandBtn" onClick={(e) => setOpenModal(true)}>
            RAISE HAND
          </button>
        </div>
        <div className="LostItemDetailsContainer">
          <div className="firstHalf">
            <div className="LostDetailsListItem">
              <h4>Item Lost</h4>
              <p>Necklace</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Category</h4>
              <p>Ornament and Accessories</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Brand</h4>
              <p>XYZ Brand</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Primary Color</h4>
              <p>Gold</p>
            </div>
          </div>
          <div className="secondHalf">
            <div className="LostDetailsListItem">
              <h4>Date Lost</h4>
              <p>27-01-2022</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Time Lost</h4>
              <p>14:00</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Location Lost</h4>
              <p>XYZ Location</p>
            </div>
            <div className="LostDetailsListItem">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
