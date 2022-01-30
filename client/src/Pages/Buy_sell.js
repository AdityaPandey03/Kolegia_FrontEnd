import NoteCard from "../Components/Buy_sell/BuySellCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Rolex from "../assests/Rolex.jpg";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import Modal from "./Additems_buySell";
import { connect, useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../redux/actions/projectActions";
import { getAllBuySellItems } from "../redux/actions/BuySellActions";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: "20px",
    },
  };
});

const Cards = () => {
  const itemList = useSelector((state) => state.buySell.itemList);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBuySellItems());
    // eslint-disable-next-line no-use-before-define
  }, []);
  console.log(itemList);
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
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {itemList.length > 0 ? (
          itemList.map((item, index) => {
            return (
              <Grid lg={3} sm={4} xm={12} md={4} item key={index}>
                <NoteCard img={Rolex} data={item} />
              </Grid>
            );
          })
        ) : (
          <div></div>
        )}
      </Grid>
      <div className="circle">
        <button onClick={toggleModal} className="btn-modal btn">
          +
        </button>
      </div>
      <Modal const toggleModal={toggleModal} modal={modal} />
    </Container>
  );
};

export default Cards;
