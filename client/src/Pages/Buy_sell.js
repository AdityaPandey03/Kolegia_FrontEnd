import NoteCard from "../Components/Buy_sell/BuySellCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Rolex from "../assests/Rolex.jpg";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import Modal from "./Additems_buySell";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import LoadingBox from "../Components/LoadingBox";
import Navbar from "../Components/Appbar/Navbar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { getAllBuySellItems } from "../redux/actions/BuySellActions";
import { Link, Navigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: "10vh",
    },
  };
});

const Cards = (props) => {
  const itemList = useSelector((state) => state.buySell.itemList);
  const isLoading = useSelector((state) => state.buySell.isLoading);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBuySellItems());
    // eslint-disable-next-line no-use-before-define
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const classes = useStyles();
  return (
    <>
    <Navbar visibleSearch={true} presentPage="buySell" />
    {isLoading ? (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isLoading}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  ) :(
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {itemList.length > 0 ? (
          itemList.map((item, index) => {
            return (
              <Grid lg={3} sm={4} xs={12} md={4} item key={index}>
                <NoteCard editOption={false} data={item} />
              </Grid>
            );
          })
        ) : (
          <div></div>
        )}
      </Grid>
      <div className="circle">
        <Link to="/buySell/addItem">
       <FaPlusCircle  className="btn-modal btn"/>

        </Link>
        
      </div>
    </Container>
    
  )};
  </>
);
        }


export default Cards;
