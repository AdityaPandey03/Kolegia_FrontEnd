import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import "./BuySellCard.css";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      background: "#E7E7F7",
      position: "relative",
    },

    Link: {
      color: "#F25767",
    },
    price: {
      background: "#F25767",
      color: "white",
      width: "10em",
      position: "absolute",
      top: "220px",
      left: "40px",
    },
  };
});

const NoteCard = ({ data}) => {
  
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        padding="5"
        image={data.files[0].uri}
        alt="watch"
      />
      

      <CardContent className={classes.card}>
        <Typography variant="p">{data.name}</Typography>
       
        <Typography variant="p">{data.price}</Typography>
        <Typography variant="p">{data.description}</Typography>
        <div className="box">
         
          <Link to={`/product/${data._id}`} underline="none">
            {"View more"}
          </Link>
          {/* <Link
            className={classes.Link}
            
          >
            
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
