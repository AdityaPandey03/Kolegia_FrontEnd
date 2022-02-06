import Rolex from "../assests/Rolex.jpg";
import Pic from "../assests/Pic.jpeg";
import "../Components/Lost_Found/LostFound.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import LoadingBox from "../Components/LoadingBox";

import { getAllLostFoundItems } from "../redux/actions/LostFoundActions";
import Modal from "./Additems_lostFound";
import { Link, useNavigate } from "react-router-dom";

const Bcards = () => {
  const navigate = useNavigate();
  const [pht, setPht] = useState("");
  const [modal, setModal] = useState(false);

  const Data = useSelector((state) => state.lostFound.lostFoundItemList);
  const isLoading = useSelector((state) => state.lostFound.isLoading);

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
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className="Bcards-cont">
          {Data.length > 0 &&
            Data.map((card) => {
              return (
                <div className="found" id="Bcard" key={card.name}>
                  <h2 className="header-02">Found</h2>
                  <div className="card-details">
                    <h2 className="pink">
                      <label htmlFor="h2">
                        <FaUser />
                      </label>
                      {card.owner_details.name}
                    </h2>
                    <h4 className="pink">
                      <label htmlFor="h4">Item:</label>
                      {card.name}
                    </h4>
                    <h4 className="pink">
                      <label htmlFor="h4">Description:</label>
                      {card.description}
                    </h4>
                    <div className="view-more-01">
                      <div>
                        <label htmlFor="h4">Created at:</label>
                        <h4 className="pink">{card.posted_on}</h4>
                      </div>
                      <Link to={`/lostItem/${card._id}`}>View More</Link>
                    </div>
                  </div>
                  <div id={`div${card.item_id}`} className="Display">
                    <img src={pht} alt="Watch" />
                  </div>

                  {card.files.length ? (
                    <div className="img-cont">
                      {card.files.map((item) => {
                        return (
                          <img
                            onClick={showImage}
                            src={item.uri}
                            alt={card.item_id}
                          />
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
      )}
    </>
  );
};

export default Bcards;
