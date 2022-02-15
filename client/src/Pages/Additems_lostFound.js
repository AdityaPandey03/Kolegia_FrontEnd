import React from "react";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import jwt_decode from "jwt-decode";
import "../Components/Lost_Found/LostFound.css";
import { addNewLostFoundItem ,resetStatus} from "../redux/actions/LostFoundActions";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [lostDate, setLostDate] = useState(null);
  const [lostTime, setLostTime] = useState(null);
  const [lostLocation, setLostLocation] = useState("");
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const Status7 = useSelector((state) => state.lostFound.addItemsLostFoundResonse);
  
  
  if (Status7 === 200) {
    dispatch(resetStatus);
    navigate("/lostFound");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("color", color);
    formData.append("description", description);
    formData.append("lost_date", lostDate);
    formData.append("lost_time", lostTime);
    formData.append("lost_location", lostLocation);
    formData.append("token", decoded.auth_token);
    for (var i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    dispatch(addNewLostFoundItem(formData));
    
  };

  return (
    <div style={{ height: "100vh" }}>
      <form className="addItemForm" onSubmit={handleSubmit}>
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
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="category" className="inputLabel">
              Category
            </label>
            <input
              className="formInput"
              type="text"
              id="category"
              placeholder="category of item"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
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
              onChange={(e) => setColor(e.target.value)}
              value={color}
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
              onChange={(e) => setFiles([...files, ...e.target.files])}
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
              onChange={(e) => setLostDate(e.target.value)}
              value={lostDate}
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
              onChange={(e) => setLostTime(e.target.value)}
              value={lostTime}
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
              onChange={(e) => setLostLocation(e.target.value)}
              value={lostLocation}
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
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
