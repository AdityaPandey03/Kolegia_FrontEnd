import NoteCard from "./Card";
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Rolex from '../../assests/Rolex.jpg'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>{
  return{
    root:{
      marginTop:'20px'
    }
  }
})

const data=[
    {
        name:'Rolex',
        description:'Branded watch in Good Condition',
        time:'6 months old',
        img:Rolex
    },
    {
      name:'Rolex',
      description:'Branded watch in Good Condition',
      time:'6 months old',
      img:Rolex
  },
  {
    name:'Rolex',
    description:'Branded watch in Good Condition',
    time:'6 months old',
    img:Rolex
},
{
  name:'Rolex',
  description:'Branded watch in Good Condition',
  time:'6 months old',
  img:Rolex
}
]

const Cards = () => {

  const classes=useStyles();
    return ( 
        <Container className={classes.root} >
        <Grid container spacing={3}>
  
       {data.map((item)=>{
         return(
           <Grid lg={3} sm={4} xm={12}  md={4} item key={item.id}> 
         
           <NoteCard  data={item}/>
           </Grid>
         
         )
       })}
      </Grid>
      </Container>


     );
}
 
export default Cards;