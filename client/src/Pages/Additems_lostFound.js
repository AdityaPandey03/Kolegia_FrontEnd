import React from "react";
import "../Components/Lost_Found/LostFound.css";

function AddItem() {
  return (
    <div style={{ height: "100vh" }}>
      <form className="addItemForm">
        <div className="left">
          <div className="inputContainer">
            <label htmlFor="item" className="inputLabel">
              Item Lost
            </label>
            <input
              className="formInput"
              type="text"
              id="item"
              placeholder="enter item name you lost"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="brand" className="inputLabel">
              Brand
            </label>
            <input
              className="formInput"
              type="text"
              id="brand"
              placeholder="enter brand of the item you lost"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="category" className="inputLabel">
              Category
            </label>
            <input
              className="formInput"
              type="email"
              id="category"
              placeholder="category of item"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="color" className="inputLabel">
              Color
            </label>
            <input
              className="formInput"
              type="name"
              id="color"
              placeholder="primary color of item"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="images" className="inputLabel">
              Images of Item
            </label>
            <input
              className="formInput"
              type="file"
              multiple
              id="images"
              placeholder="Add images of item (if any)"
            ></input>
          </div>
        </div>
        <div className="right">
          <div className="inputContainer">
            <label htmlFor="date" className="inputLabel">
              Date
            </label>
            <input
              className="formInput"
              type="date"
              id="date"
              placeholder="date when item lost"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="time" className="inputLabel">
              Time
            </label>
            <input
              className="formInput"
              type="time"
              id="time"
              placeholder="time when item lost"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="location" className="inputLabel">
              Location
            </label>
            <input
              className="formInput"
              type="text"
              id="location"
              placeholder="location where item lost"
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="description" className="inputLabel">
              Description
            </label>
            <textarea
              className="formInput"
              type="textarea"
              id="description"
              placeholder="tell us more about item, additional information"
              required
            ></textarea>
          </div>
          <div className="inputContainer">
            <button
              type="submit"
              className="primary submitBtn"
              style={{ marginBottom: "1.5rem" }}
            >
              POST
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
