import './req_feed.css';

const Req_feed = ({ data }) => {
  return (
  <div className='feed'>
    <div className='feed_title'>
      <h3>{ data.title }</h3>
    </div>
    <div className='feed_desc'>
      <p>{ data.desc }</p>
    </div>
    <div className='feed_username'>
      <p>Posted by: { data.username }</p>
    </div>
    <div className='feed_date'>
      <h3>{ data.date }</h3>
    </div>
  </div>
  );
};

export default Req_feed;
