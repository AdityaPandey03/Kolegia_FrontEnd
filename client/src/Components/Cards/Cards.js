import NoteCard from "./Card";
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Rolex from '../../assests/Rolex.jpg'

const data=[
    {
        name:'Rolex',
        description:'Brander watch in Good Condition',
        time:'6 months old',
        img:Rolex
    },
    {
      name:'Rolex',
      description:'Brander watch in Good Condition',
      time:'6 months old',
      img:Rolex
  },
  {
    name:'Rolex',
    description:'Brander watch in Good Condition',
    time:'6 months old',
    img:Rolex
}
]

const Cards = () => {
    return ( 
        <Container>
        <Grid container spacing={3}>
  
       {data.map((item)=>{
         return(
           <Grid lg={3.5} sm={4} xm={12}  md={4} item key={item.id}> 
         
           <NoteCard  data={item}/>
           </Grid>
         
         )
       })}
      </Grid>
      </Container>


     );
}
 
export default Cards;