import './req_feed.css';
import { FaEdit,FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";


const Req_feed = ({ data,postedBy,handleClick ,editOption}) => {
  const navigate = useNavigate();

  
  return (
  <div className='feed'>
    <div className='feed_title'>
      <h3>{ data.title }</h3>
{ editOption?
      <div className='eidtIcons'>
      <Link 
   to='/editMyRequirement'
  state={{ Data: data }}><FaEdit /></Link>  
    < FaTrashAlt onClick={(e)=>handleClick(data,e)}/>
      </div> : null
}
  
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
