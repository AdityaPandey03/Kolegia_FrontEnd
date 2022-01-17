
import Buy from '../../../assests/Buy.svg'
import Lostfound from '../../../assests/Lostfound.svg'
import Tickets from '../../../assests/Tickets.svg'


import './Dcard.css'


const Dcards = () => {

    const data=[
        {
            Title:'Lost-found',
            img:Lostfound,
            button_title:'Explore'

        },
        {
            Title:'Buy-Sell',
            img:Buy,
            button_title:'Explore'

        },
        {
            Title:'My-Tickets',
            img:Tickets,
            button_title:'ViewMore'

        },
        {
            Title:'My-Tickets',
            img:Tickets,
            button_title:'ViewMore'

        }
        
    ]
    return (
        <>
      
        <div className='Dcards-cont'>
            {data.map((card)=>{
                return(
                    <div className={card.Title} id='Dcard' key={card.Title}>
                        <h2>{card.Title}</h2>
                        <img src={card.img} alt={card.Title} />
                        <button className='button-01'>{card.button_title}</button>
                    </div>
                )
            })}
        </div>
        </>

      );
}
 
export default Dcards;