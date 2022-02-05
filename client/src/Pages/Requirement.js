import React from 'react';
import "../Components/Requirement/requirement.css";
import Req_feed from '../Components/Requirement/Req_feed';

const Requirement = () => {
    const data = [
        {
            title : "Mobile" ,
            desc : "I want a old mobile phone under 7k in proper condition",
            username : "Jayant Singh",
            date : "12 Feb 2022"
        },
    ]
    return (
  <div className='requirement_page'>
      <div className='page_heading'>
          <h3>Requirement</h3>
          <a href="#"><p>+</p></a>
      </div>
      <div className='page_content'>
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      <Req_feed  data = {data[0]} />
      </div>
  </div>
    );
};

export default Requirement;
