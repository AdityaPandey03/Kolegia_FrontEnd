import NoteCard from "./Card";
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Rolex from '../../../assests/Rolex.jpg'
import { makeStyles } from "@mui/styles";
import {useState,useEffect} from 'react'

const useStyles = makeStyles((theme)=>{
  return{
    root:{
      marginTop:'20px'
    }
  }
})

  




// const Data=[
//     {
//         name:'Rolex',
//         description:'Branded watch in Good Condition',
//         time:'6 months old',
//         img:Rolex
//     },
//     {
//       name:'Rolex',
//       description:'Branded watch in Good Condition',
//       time:'6 months old',
//       img:Rolex
//   },
//   {
//     name:'Rolex',
//     description:'Branded watch in Good Condition',
//     time:'6 months old',
//     img:Rolex
// },
// {
//   name:'Rolex',
//   description:'Branded watch in Good Condition',
//   time:'6 months old',
//   img:Rolex
// }
// ]

const Cards = () => {
  const [data,setData]=useState([]);
  

  useEffect(()=>{
    fetch('http://localhost:8000/data')
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

   
 
  const classes=useStyles();
    return ( 
        <Container className={classes.root} >
        <Grid container spacing={3}>
  
       {data.map((item)=>{
         return(
           <Grid lg={3} sm={4} xm={12}  md={4} item key={item.id}> 
         
           <NoteCard img={Rolex}  data={item}/>
           </Grid>
         
         )
       })}
      </Grid>
      </Container>


     );
}
 
export default Cards;