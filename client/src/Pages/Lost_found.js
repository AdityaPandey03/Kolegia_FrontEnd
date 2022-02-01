import Rolex from "../assests/Rolex.jpg";
import Pic from "../assests/Pic.jpeg";
import "../Components/Lost_Found/LostFound.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { getAllLostFoundItems } from "../redux/actions/LostFoundActions";
import Modal from "./Additems_lostFound";
import { Link, useNavigate } from "react-router-dom";

const Bcards = () => {
  const navigate = useNavigate();
  const [pht, setPht] = useState("");
  const [modal, setModal] = useState(false);

  const Data = useSelector((state) => state.lostFound.itemList);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    dispatch(getAllLostFoundItems());
  }, []);

  //   console.log(Data);
  const image = [];
  // const data=[
  //     {
  //         name:'Rohit Kumar',
  //         item:"watch",
  //         location:'Behind Hostel 1',
  //         time:'12/4/2022 14:12',
  //         image:[Rolex,Pic],
  //         type:"Lost"

  //     },

  // ]

  const showImage = (e) => {
    let iD = e.target.alt;
    if (pht === e.target.src) {
      setPht("");
      document.querySelector(`#div${iD}`).classList.remove("hover-img");
    } else {
      setPht(e.target.src);
      document.querySelector(`#div${iD}`).classList.add("hover-img");
    }
  };
  return (
    <>
      <div className="Bcards-cont">
        {Data.map((card) => {
          return (
            <div className="found" id="Bcard" key={card.name}>
              <h2 className="header-02">Found</h2>
              <div className="card-details">
                <h2 className="pink">
                  <label htmlFor="h2">
                    <FaUser />
                  </label>
                  {card.posted_by}
                </h2>
                <h4 className="pink">
                  <label htmlFor="h4">Item:</label>
                  {card.item_name}
                </h4>
                <h4 className="pink">
                  <label htmlFor="h4">Description:</label>
                  {card.description}
                </h4>
                <div className="view-more-01">
                  <div>
                    <label htmlFor="h4">Created at:</label>
                    <h4 className="pink">{card.createdAt}</h4>
                  </div>
                  <Link to={`/lostItem/${card._id}`}>View More</Link>
                </div>
              </div>
              <div id={`div${card.item_id}`} className="Display">
                <img src={pht} alt="Watch" />
              </div>

              {image.length ? (
                <div className="img-cont">
                  {image.map((i) => {
                    return (
                      <img onClick={showImage} src={i} alt={card.item_id} />
                    );
                  })}
                </div>
              ) : (
                <div className="img-cont">
                  <h3>No images available</h3>
                </div>
              )}
            </div>
          );
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
    </>
  );
};

export default Bcards;
