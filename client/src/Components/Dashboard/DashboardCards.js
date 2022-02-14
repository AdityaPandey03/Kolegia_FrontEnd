
import Buy from '../../assests/Buy.svg'
import Lostfound from '../../assests/Lostfound.svg'
import Tickets from '../../assests/Tickets.svg'
import Profile from './Profile'

import { Link, useNavigate } from 'react-router-dom'


import './DashboardCards.css'


const Dcards = () => {

    const navigate=useNavigate();

   

    const data=[
        {
            Title:'Lost-Found',
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
            Title:'Requirements',
            img:Tickets,
            button_title:'ViewMore',
            path:'/requirements'

        },
        {
            Title:'My-Responses',
            img:Tickets,
            button_title:'ViewMore',
            path:'/aaa'

        },
        {
            Title:'Stats',
            img:Tickets,
            button_title:'ViewMore',
            path:'/myOwnBuySellItems'

        },
        
        
    ]
    return (
        <>
      
        <div className='Dcards-cont'>
          <Link to='/sidebar'> <Profile/> </Link>  
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