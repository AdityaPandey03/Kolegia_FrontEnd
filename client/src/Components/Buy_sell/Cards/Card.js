import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import "./Card.css";
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

const NoteCard = ({ data, img }) => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        padding="5"
        image={img}
        alt="watch"
      />

      <CardContent className={classes.card}>
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant="p">{data.description}</Typography>
        <div className="box">
          <Typography variant="p">{data.time}</Typography>
          <Link className={classes.Link} href="#" underline="none">
            {"View more"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
