export const Fetchdata = () => (dispatch)=>{
    dispatch({type:"REQUEST_lYRICS_PENDING"})
    fetch('http://localhost:8000/data')
    .then((res)=>res.json())
    .then(data=>dispatch({type:"SENDING-DATA",payload:data}))
    .catch(error => dispatch({ type: "REQUEST_ROBOTS_FAILED", payload:error }))
}
 
