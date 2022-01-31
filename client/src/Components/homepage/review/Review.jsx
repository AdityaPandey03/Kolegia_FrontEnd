import React, { useState } from 'react';
import './review.css';

const Review = () => {

    const feedback = {
        0: {
            user : "Vikas" ,
            message : "It is so helpful. I forgot my assignment file in the IEEE Lab and when I checked in that room, it was not there. So I posted it on Kolegia and the one who took it returned it back. Thanks to Kolegia."       
            },
        1: {
            user : "Manish" ,
            message : "Amazing djbsdufiudsgibdbuvvbdv"       
            },
        2: {
            user : "Aditya" ,
            message : "So helpful. iufbibfiubivkausudbbuskdv"       
            },
        3: {
            user : "Shivam" ,
            message : "Awesome. jfvbdfuifuhdkfnjnjfn"       
            },
        4: {
            user : "XYZ" ,
            message : "fwhiurfkrjflghfughfkgfdihir"       
            },
           
    }

    const [current, setCurrent] = useState(feedback[0]);

    const [active, setActive] = useState(0);

    const handleSetClick = (event) => {
        setCurrent(feedback[event.target.getAttribute("data-feedback")]);
        setActive(event.target.getAttribute("data-feedback"));
    }

  return (
        <div className='review section__padding section__margin'>
            <div className='review-heading'>
                <h1>Feedbacks</h1>
            </div>
            <div className='review-content'>
                <p>{current.message}</p>
                <p id='user'>{current.user}</p>
                <div className='slider'>
                    {Object.keys(feedback).map(index => (
                        <span 
                        onClick={event => handleSetClick(event)}
                        data-feedback={index}
                        key={index}
                        />
                    ))}
            </div>
            </div>
        </div>

  );
  
};

export default Review;
