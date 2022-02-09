import './req_feed.css';
import { FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";

const Req_feed = ({ data,postedBy }) => {
  const navigate = useNavigate();

  // const handleClick=()=>{
  //   navigate('/editMyRequirement',{
  //     state:data,
  //   });
  // }
  return (
  <div className='feed'>
    <div className='feed_title'>
      <h3>{ data.title }</h3>
   <Link 
   to='/editMyRequirement'
  state={{ Data: data }}><FaEdit /></Link>  
    </div>
    <div className='feed_desc'>
      <p>{ data.description }</p>
    </div>
    <div className='feed_username'>
      <p>Posted by: { postedBy }</p>
    </div>
    <div className='feed_date'>
      <h3>{ data.posted_on }</h3>
    </div>
  </div>
  );
};

export default Req_feed;
