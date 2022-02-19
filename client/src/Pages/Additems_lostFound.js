import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "../Components/Lost_Found/LostFound.css";
import {
  addNewLostFoundItem,
  resetStatus,
} from "../redux/actions/LostFoundActions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Appbar/Navbar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function AddItem() {
  const categories = [
    {
      value: "Electronics and Mobiles",
      label: "Electronics and Mobiles",
    },
    {
      value: "Fashion",
      label: "Fashion",
    },
    {
      value: "Home and Garden",
      label: "Home and Garden",
    },
    {
      value: "Sports & Outdoors",
      label: "Sports & Outdoors",
    },
    {
      value: "Toys & Games",
      label: "Toys & Games",
    },
    {
      value: "Health & Beauty",
      label: "Health & Beauty",
    },
    {
      value: "Automotive",
      label: "Automotive",
    },
    {
      value: "Books & Audible",
      label: "Books & Audible",
    },
  ];
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [OtherCategory, setCategoryOthers] = useState("");
  const [lostDate, setLostDate] = useState(null);
  const [lostTime, setLostTime] = useState(null);
  const [lostLocation, setLostLocation] = useState("");
  const [files, setFiles] = useState([]);
  const [createResponse, setCreateResponse] = useState(null);
  const [done, setDone] = useState(false);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemsResponse = useSelector(
    (state) => state.lostFound.addItemsLostFoundResponse
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    if (category) {
      formData.append("category", category);
    } else {
      formData.append("category", OtherCategory);
    }

    formData.append("color", color);
    formData.append("description", description);
    formData.append("lost_date", lostDate);
    formData.append("lost_time", lostTime);
    formData.append("lost_location", lostLocation);
    formData.append("token", decoded.auth_token);

    for (var i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    dispatch(addNewLostFoundItem(formData));
  };
  console.log(category);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  //TOASTIFY FUNCTION START
  useEffect(() => {
    setCreateResponse(addItemsResponse);
  }, [addItemsResponse]);

  useEffect(() => {
    if (createResponse?.status === 200) {
      toast.success(createResponse?.message);
      setDone(true);
      setCreateResponse(null);
    } else {
      toast.error(createResponse?.message);
      setCreateResponse(null);
    }
  }, [createResponse]);

  //TOASTIFY FUNCTIONS END

  useEffect(() => {
    if (done === true) {
      dispatch(resetStatus);
      navigate("/lostFound");
    }
  }, [done]);

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", marginTop: "10vh" }}>
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
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={category}
                onChange={handleChange}
                helperText="Please select the category"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <input
                className="formInput"
                type="text"
                id="category"
                placeholder="If Any other"
                onChange={(e) => setCategoryOthers(e.target.value)}
                value={OtherCategory}
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default AddItem;
