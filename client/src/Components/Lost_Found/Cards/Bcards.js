
import Rolex from '../../../assests/Rolex.jpg'
import Pic from '../../../assests/Pic.jpeg'
import './Bcard.css'
import { useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";






const Bcards = () => {

    const [pht,setPht]=useState('');
  


   

    const data=[
        {
            name:'Rohit Kumar',
            item:"watch",
            location:'Behind Hostel 1',
            time:'12/4/2022 14:12',
            image:[Rolex,Pic],
            type:"Lost"

        },
        
        
    ]
   
    const showImage=(e)=>{
        if( pht===(e.target.src)){
            setPht('');
            document.querySelector('#display-image').classList.remove('hover-img')

        } else{
            
            setPht(e.target.src);
            document.querySelector('#display-image').classList.add('hover-img')
            
            
            
        }
       

    }
    return (
        <>
      
        <div className='Bcards-cont'>
            {data.map((card)=>{
                return(
                    <div className={card.type} id='Bcard' key={card.name}>
                       <h2 className='header-02'>{card.type}</h2>
                       <div className="card-details">
                           <h2 className='pink'><label htmlFor="h2"><FaUser/></label>{card.name}</h2>
                       <h3 className='pink'><label htmlFor="h3">Item:</label>{card.item}</h3>
                       <h3 className='pink'><label htmlFor="h3"><MdLocationOn/></label>{card.location}</h3>
                       <div className='view-more-01'><div><label htmlFor="h4">Created at:</label>
                       <h4 className='pink'>{card.time}</h4></div> 
                       <a href="">View-more</a></div>
                      
                       
                       </div>
                       <div id='display-image' className="Display">
                       <img  src={pht} alt="Watch"  />
                       </div>
                       
                       <div className='img-cont'>
                           
                           {card.image.map((i)=>{
                               return(
                   <img onClick={showImage} src={i} alt="Watch"   />
                               )
                           })}
                           
                           
                           </div>
                        
                    </div>
                )
            })}
        </div>
        </>

      );
}
 
export default Bcards;