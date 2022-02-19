import NoteCard from "../Components/Buy_sell/BuySellCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";

import LoadingBox from "../Components/LoadingBox";

import { deleteBuySellItem, getAllOwnBuySellItems } from "../redux/actions/BuySellActions";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: "20px",
      
    },
  };
});

const My_buySellItems = () => {
  const itemList = useSelector((state) => state.buySell.ownBuySellItems);
  const isLoading = useSelector((state) => state.buySell.isLoading);

  console.log(itemList);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOwnBuySellItems());
    
  }, []);

  ///delete item
  const handleClick=(data,e)=>{
    
    const token = localStorage.getItem("jwt");
      const decoded = jwt_decode(token);
   dispatch(deleteBuySellItem(data._id,decoded.auth_token));
   window.location.reload(true);
}
  
 

  const classes = useStyles();
  return ( 
    <>
    {isLoading ? (
    <LoadingBox />
  ) :(
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {itemList.length > 0 ? (
          itemList.map((item, index) => {
            return (
              <Grid lg={3} sm={4} xm={12} md={4} item key={index}>
                <NoteCard handleClick={handleClick}  data={item} editOption={true} />
              </Grid>
            );
          })
        ) : (
          <div></div>
        )}
      </Grid>
      
    </Container>
    
  )};
  </>
);
        }


export default My_buySellItems;
