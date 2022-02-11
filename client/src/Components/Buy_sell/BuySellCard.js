import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import "./BuySellCard.css";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaEdit,FaTrashAlt} from "react-icons/fa";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      background: "#E7E7F7",
      position: "relative",
    },
    card_content: {
      background: "#E7E7F7",
     display:'flex',
     flexDirection:'Column',
     gap:'4px',
     fontSize:'18px'
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

const NoteCard = ({ data,editOption,handleClick}) => {
  
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
      { editOption?
      <div className='eidtIcons_buySell'>
      <Link 
   to='/editMyBuySellItems'
  state={{ Data: data }}><FaEdit /></Link>  
    < FaTrashAlt onClick={(e)=>handleClick(data,e)}/>
      </div> : null
}
      <CardMedia
        className={classes.media}
        component="img"
        padding="5"
        image={data.files[0].uri}
        alt="watch"
      />
      

      <CardContent className={classes.card_content}>
        <Typography variant="p">{data.name}</Typography>
       
        <Typography variant="p">Rs {data.price}</Typography>
        <Typography variant="p">Description:{data.description}</Typography>
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
