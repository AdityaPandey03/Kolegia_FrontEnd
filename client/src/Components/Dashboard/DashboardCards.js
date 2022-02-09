
import Buy from '../../assests/Buy.svg'
import Lostfound from '../../assests/Lostfound.svg'
import Tickets from '../../assests/Tickets.svg'
import Profile from './Profile'

import { Link } from 'react-router-dom'


import './DashboardCards.css'


const Dcards = () => {

    const data=[
        {
            Title:'Lost-found',
            img:Lostfound,
            button_title:'Explore',
            path:'/lostFound'

        },
        {
            Title:'Buy-Sell',
            img:Buy,
            button_title:'Explore',
            path:'/buySell'
            

        },
        {
            Title:'My-Tickets',
            img:Tickets,
            button_title:'ViewMore',
            path:'myTickets'

        },
        {
            Title:'My Requirements',
            img:Tickets,
            button_title:'ViewMore',
            path:'/myOwnRequirements'

        },
        {
            Title:'My Responses',
            img:Tickets,
            button_title:'ViewMore',
            path:'myTickets'

        },
        
        
    ]
    return (
        <>
      
        <div className='Dcards-cont'>
            <Profile/>
            {data.map((card,index)=>{
                return(
                    <div className={card.Title} id='Dcard' key={index}>
                        <h2>{card.Title}</h2>
                        <img src={card.img} alt={card.Title} />
                     <Link to={card.path}><button className='button-01'>{card.button_title}</button></Link>   
                    </div>
                )
            })}
        </div>
        </>

      );
}
 
export default Dcards;